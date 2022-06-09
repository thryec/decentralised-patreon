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
        address tokenAddress;
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
}
