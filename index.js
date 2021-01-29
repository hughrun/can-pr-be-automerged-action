const core = require('@actions/core');
const github = require('@actions/github');

core.info(`GitHub event name is ${github.event_name}`)
core.info(`github.ref is ${github.ref}`)
core.info(`GitHub event title is ${github.event.title}`)
core.info(`GitHub event head label is ${github.event.head.label}`)
core.info(`GitHub event head user login is ${github.event.head.user.login}`)

// if ( LOGIC HERE) {
//   core.setFailed('Does not qualify to be auto-merged')
// }
