import { ethers } from "hardhat";

const main = async () => {
  const Todo = await ethers.getContractFactory("TodoList");
  const todo = await Todo.attach("0xb12f163df91d2A40F89371d1AD8D69Bb30Bb7A7a");

  const createTodoTxn = await todo.createTodo("I want to write exams");
  const createTodoTxnReciept = await createTodoTxn.wait();
  console.log("Create Todo reciept: ", createTodoTxnReciept);
  
  const getAllTodoTxn = await todo.getAllTodos();
  console.log("Get all Todo reciept: ", getAllTodoTxn);

  const getOneTodoTxn = await todo.getOneTodo(1);
  console.log("Get one Todo reciept: ", getOneTodoTxn);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});