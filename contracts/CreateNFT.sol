// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract createNFT is ERC721URIStorage, Ownable {

constructor () ERC721 ("CreateNFT","CFT") {}
    function mint(address _to, uint256 _NFTId, string calldata _urL) external onlyOwner
    {
        _mint (_to,_NFTId) ;
        _setTokenURI (_NFTId, _urL);
    }
    function promptDescription()public pure returns(string memory prompt )
        {

           return( "jharkhand culture | west durga puja | unite india | wold war 2 |international rade");
        }
}