// Import stylesheets
import './style.css';
import { Octokit } from "octokit"

const octokit = new Octokit({
  // auth: "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",
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

function createGHPagesInOrganization() {
  octokit.rest.repos.createPagesDeployment({
    owner: 'forkpack',
    repo: 'test-repo',
    artifact_url: '',
    pages_build_version,
    oidc_token,
  }).then((response => {
    console.log("create repo in organization")
  }))
}
// createRepoInOrganization()

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;