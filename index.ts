// Import stylesheets
import './style.css';
import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: "",
})

function createForkInOrganization() {
  octokit.rest.repos.createFork({
    owner: "FedoseevSM",
    repo: "BunJS-Example",
    organization: "forkpack",
    name: "same-fork-repo-new-name2222222"
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

function createGHPagesInOrganization() {
  octokit.rest.repos.createPagesDeployment({
    owner: 'forkpack',
    repo: 'test-repo',
    artifact_url: 'https://github.com/FedoseevSM/typescript-octokit/raw/8cea2656f44fc97ea6d9dd629a7108812e9b6394/deploy.zip',
    pages_build_version: "1231313",
    oidc_token: "13112312",
  }).then((response => {
    console.log("create repo in organization")
  }))
}
// createGHPagesInOrganization()

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;