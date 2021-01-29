const core = require('@actions/core');
const github = require('@actions/github');
core.info(`github Actor ${process.env.GITHUB_ACTOR}`)
core.info(`github HEAD ref is ${process.env.GITHUB_HEAD_REF}`)

const actor = process.env.GITHUB_ACTOR;
const head = process.env.GITHUB_HEAD_REF;
const requiredUser = core.getInput('required-user');
const requiredBranch = core.getInput('required-branch');
const requireBoth = requiredUser != null && requiredBranch != null 
actorMatches = requiredUser == actor;
headMatches = requiredBranch == head;
ok = requireBoth ? actorMatches && headMatches : requiredUser ? requiredUser == actor : requiredBranch ? requiredBranch == head : true;

message = requireBoth ? `Only PRs from user ${requiredUser} on branch ${requiredBranch} can be auto-merged` : 
          requiredUser ? `Only PRs from user ${requiredUser} can be auto-merged` : 
          requiredBranch ? `Only PRs on branch ${requiredBranch} can be auto-merged` : 
          `Something went wrong`;

if ( !ok) {
  core.setFailed(message)
}
