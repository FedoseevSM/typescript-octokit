// Import stylesheets
import './style.css';
import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: "",
})

function createForkInOrganization() {
  const repo = octokit.rest.repos.createFork({
    owner: "FedoseevSM",
    repo: "spa-template-vue-bootstrap-express-prisma",
    organization: "forkpack"
  }).then((response => {
    console.log("repo forked to organization")
  }))
}
// createForkInOrganization()

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;