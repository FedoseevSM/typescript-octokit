// Import stylesheets
import './style.css';
import { Octokit } from "octokit"
// @ts-ignore
import * as fs from "fs"

const octokit = new Octokit({
  // auth: "",
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
    pages_build_version: "weqeqweqwe",
    oidc_token: "qweqeqweqweqwe",
  }).then((response => {
    console.log("create repo in organization")
  }))
}
// createGHPagesInOrganization()

async function uploadZip(owner, repo, releaseId, filePath, name) {
  const { data: release } = await octokit.repos.getRelease({
    owner,
    repo,
    release_id: releaseId
  });

  const uploadUrl = release.upload_url;

  const file = fs.createReadStream(filePath);

  const { data: asset } = await octokit.repos.uploadAsset({
    url: uploadUrl,
    file,
    name
  });

  console.log(`Uploaded ${asset.name} to release ${release.name}`);
}

// uploadZip("fakeuser", "fakerepo", 123456, "/path/to/your/zip/file.zip", "file.zip");

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;