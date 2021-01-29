const core = require('@actions/core');
const github = require('@actions/github');

core.info(`GitHub event name is ${process.env.GITHUB_EVENT_NAME}`)
core.info(`github Actor ${process.env.GITHUB_ACTOR}`)
core.info(`github HEAD ref is ${process.env.GITHUB_HEAD_REF}`)
core.info(`github BASE ref is ${process.env.GITHUB_BASE_REF}`)
// if ( LOGIC HERE) {
//   core.setFailed('Does not qualify to be auto-merged')
// }
