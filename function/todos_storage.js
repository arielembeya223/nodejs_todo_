
import {readFile, writeFile } from "node:fs/promises"
const path = "storage/todo.json"
/**
 * @typedef {object} todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */
/**
 * @return {Promise<Todo[]}
 */
export async function findTodos(){
  const data = await readFile(path,{encoding:"utf-8"})
  return JSON.parse(data)
}
/**
 * @param {strring} title
 * @param {boolean} completed
 */
/**
 * @return {Promise<Todo>}
 */
export async function createTodo({title,completed=false}){
  const todo  = {title,completed,id: Date.now()}
  const todos= {todo,...await findTodos()}
 await writeFile(path,JSON.stringify(todos))
 return todos
}