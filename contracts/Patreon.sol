// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "hardhat/console.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Patreon is ReentrancyGuard {
    mapping(uint256 => Stream) public streams; // maps streamIds to stream

    using Counters for Counters.Counter;
    Counters.Counter private _streamIds; // track unique streamIds

    struct Stream {
        uint256 deposit;
        uint256 ratePerSecond;
        uint256 remainingBalance;
        uint256 startTime;
        uint256 stopTime;
        address recipient;
        address sender;
        bool isEntity;
    }

    /**
     * @notice Emits when a stream is successfully created.
     */
    event CreateStream(
        uint256 indexed streamId,
        address indexed sender,
        address indexed recipient,
        uint256 deposit,
        uint256 startTime,
        uint256 stopTime
    );

    constructor() {
        console.log("starting streamId is ", _streamIds.current());
    }

    function tipETH(address _recipient) public payable {
        require(
            msg.value > .0001 ether,
            "Ether sent is lower than minimum requirement"
        );
        (bool success, ) = payable(_recipient).call{value: msg.value}("");
        require(success, "Ether not sent successfully");
    }

    function createETHStream(
        address _recipient,
        uint256 _startTime,
        uint256 _stopTime
    ) public payable returns (uint256) {
        uint256 _depositAmount = msg.value;
        require(_recipient != address(0x00), "stream to the zero address");
        require(_recipient != address(this), "stream to the contract itself");
        require(_recipient != msg.sender, "stream to the caller");
        require(_depositAmount > 0, "deposit is zero");
        require(
            _startTime >= block.timestamp,
            "start time before block.timestamp"
        );
        require(_stopTime > _startTime, "stop time before the start time");

        uint256 _duration = _stopTime - _startTime;
        uint256 _ratePerSecond = _depositAmount / _duration;

        /* Without this, the rate per second would be zero. */
        require(_depositAmount >= _duration, "deposit smaller than time delta");

        /* This condition avoids dealing with remainders */
        require(
            _depositAmount % _duration == 0,
            "deposit not multiple of time delta"
        );

        uint256 currentStreamId = _streamIds.current();
        streams[currentStreamId] = Stream({
            remainingBalance: _depositAmount,
            deposit: _depositAmount,
            isEntity: true,
            ratePerSecond: _ratePerSecond,
            recipient: _recipient,
            sender: msg.sender,
            startTime: _startTime,
            stopTime: _stopTime
        });

        emit CreateStream(
            currentStreamId,
            msg.sender,
            _recipient,
            _depositAmount,
            _startTime,
            _stopTime
        );

        _streamIds.increment();
        return currentStreamId;
    }
}
