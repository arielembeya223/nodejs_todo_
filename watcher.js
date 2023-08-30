import {exec,spawn} from "node:child_process"
const [node,watcher,file]=process.argv
const pr=spawn(node,[file])
pr.stdout.on("data",(data)=>{console.log(data.toString("utf-8"))})
pr.stderr.on("data",(data)=>{console.log(data.toString("utf-8"))})
pr.on("close",(code)=>{console.log("process exited:"+ code)})