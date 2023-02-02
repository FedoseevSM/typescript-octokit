// Import stylesheets
import './style.css';
import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: "",
})

function createForkInOrganization() {
  octokit.rest.repos.createFork({
    owner: "FedoseevSM",
    repo: "spa-template-vue-bootstrap-express-prisma",
    organization: "forkpack",
    name: "same-fork-repo-new-name2"
  }).then((response => {
    console.log("repo forked to organization")
  }))
}
// createForkInOrganization()

function createRepoInOrganization() {
  octokit.rest.repos.createInOrg({
    org: "forkpack",
    name: "test-repo",
  }).then((response => {
    console.log("create repo in organization")
  }))
}
// createRepoInOrganization()

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;