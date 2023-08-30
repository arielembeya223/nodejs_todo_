export async function index(req,res){
    const todos = await findTodos()
    res.write(JSON.stringify(todos))
}