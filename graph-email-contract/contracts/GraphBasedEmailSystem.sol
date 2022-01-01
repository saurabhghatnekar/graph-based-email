//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract GraphBasedEmailSystem {

    struct PublicKey{
        string publicKey;
    }
    //store public keys against sender address
    mapping(address => PublicKey) internal publicKeys;

    event NewMessage(address indexed _fromAddress, address indexed _toAddress, string _ipfsHash,  uint time);
    event newRegistration(address indexed _toAddress,string _publicKey, uint time);

    function Register(string memory _publicKey) external {
        publicKeys[msg.sender].publicKey = _publicKey;
        emit newRegistration(msg.sender, _publicKey, block.timestamp);
    }

    function GetReceiverPublicKey(address _receiver) external view returns(string memory) {
        return publicKeys[_receiver].publicKey;
    }
    function GetSenderPublicKey() external view returns(string memory) {
        return publicKeys[msg.sender].publicKey;
    }

    function SendMessage(address _toAddress, string calldata _ipfsHash) external {
        emit NewMessage(msg.sender, _toAddress, _ipfsHash, block.timestamp);
    }
}
