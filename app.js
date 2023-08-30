import {createServer} from "node:http"
import {json} from "node:stream/consumers"
import { findTodos,createTodo } from "./function/todos_storage.js"
const server= createServer(async(req,res)=>{
    res.setHeader("content-type","Application/json")
    const url = new URL(req.url,"http://"+ req.headers.host)
    if(url. pathname === "/todos"){
        if(req.method === "GET"){
            const todos = await findTodos()
            res.write(JSON.stringify(todos))
        }else if(req.method === "POST"){
           const todo =  await createTodo(await json(req))
           res.write(JSON.stringify(todo))
        }
    }else{
        res.writeHead(404)
    }
})
server.listen(8000)