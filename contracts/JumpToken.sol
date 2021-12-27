pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract JumpToken is ERC721 {

    struct Ball {
        uint id;
        uint power;
        bool canTrack;
    }

    struct Pokemon {
        uint id;

    }

    Ball[] public balls;
    Pokemon[] public pokemons;
    address public owner;

    constructor () ERC721("Jump", "JUMP") public {
        owner = msg.sender;
    }

    function mintBall() public {
        require(balanceOf(msg.sender) == 0);
        uint id = balls.length;
        balls.push(Ball(id, 1, false));
        _mint(msg.sender, id);
    }
}
