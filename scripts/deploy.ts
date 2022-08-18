import { ethers } from "hardhat";

const main = async () => {
  const Todo = await ethers.getContractFactory("TodoList");
  const todo = await Todo.deploy();

  await todo.deployed();

  console.log("Staking Contract deployed to:", todo.address);

}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});