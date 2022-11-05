import {append} from "./componands/scripts/append.js";

console.log("bhai")
// console.log(append)
//1. Appending the data from localhost
//2. append function need two things 
// 3. get the place where we have to append our data 
let dataAppendPlace=document.getElementById('mainContent');
const getData=  async()=>{

const myResouse = await fetch (`http://localhost:3000/posts`)
const data = await myResouse.json();
console.log('data:', data)
append(data,dataAppendPlace)
}

getData()
