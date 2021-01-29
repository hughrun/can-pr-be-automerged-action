const core = require('@actions/core');
const github = require('@actions/github');
core.info(`github Actor ${process.env.GITHUB_ACTOR}`)
core.info(`github HEAD ref is ${process.env.GITHUB_HEAD_REF}`)

const actor = process.env.GITHUB_ACTOR;
const head = process.env.GITHUB_HEAD_REF;
const requiredUser = core.getInput('required-user');
const requiredBranch = core.getInput('required-branch');
const userRequired = typeof requiredUser == 'string' && requiredUser.length > 0;
const branchRequired = typeof requiredBranch == 'string' && requiredBranch.length > 0;
const requireBoth = userRequired && branchRequired;
actorMatches = requiredUser == actor;
headMatches = requiredBranch == head;
ok =  requireBoth ? actorMatches && headMatches : 
      userRequired ? actorMatches : 
      branchRequired ? headMatches : 
      false;

message = requireBoth ? `Only PRs from user ${requiredUser} on branch ${requiredBranch} can be auto-merged` : 
          userRequired ? `Only PRs from user ${requiredUser} can be auto-merged` : 
          branchRequired ? `Only PRs on branch ${requiredBranch} can be auto-merged` : 
          `Something went wrong`;

if ( !ok) {
  core.setFailed(message)
}
