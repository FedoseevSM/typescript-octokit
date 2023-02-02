// Import stylesheets
import './style.css';
import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: "",
})

async function getUser(){
const {data} = await octokit.request("/user");
console.log(data)
}
getUser()

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;