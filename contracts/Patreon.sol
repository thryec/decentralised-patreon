// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "hardhat/console.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Patreon is ReentrancyGuard {
    mapping(uint256 => Stream) public streams; // maps streamId to stream data struct

    using Counters for Counters.Counter;
    Counters.Counter streamId; // keep track of unique streamId

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
        console.log("deploying contract");
    }

    function tipETH(address recipient) public payable {
        uint256 amount = msg.value;
        require(amount > .0001 ether);
        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Ether not sent successfully");
    }
}
