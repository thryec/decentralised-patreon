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
        address recipient,
        uint256 startTime,
        uint256 stopTime
    ) public payable returns (uint256) {
        uint256 depositAmount = msg.value;
        require(recipient != address(0x00), "stream to the zero address");
        require(recipient != address(this), "stream to the contract itself");
        require(recipient != msg.sender, "stream to the caller");
        require(depositAmount > 0, "deposit is zero");
        require(
            startTime >= block.timestamp,
            "start time before block.timestamp"
        );
        require(stopTime > startTime, "stop time before the start time");

        uint256 duration = stopTime - startTime;
        uint256 _ratePerSecond = depositAmount / duration;

        uint256 currentStreamId = _streamIds.current();
        streams[currentStreamId] = Stream({
            remainingBalance: depositAmount,
            deposit: depositAmount,
            isEntity: true,
            ratePerSecond: _ratePerSecond,
            recipient: recipient,
            sender: msg.sender,
            startTime: startTime,
            stopTime: stopTime
        });

        _streamIds.increment();
        return currentStreamId;
    }
}
