# can-pr-be-automerged-action
GitHub action to check whether a PR can be automerged

## Inputs

### `required_label`

Pull Requests must have this label.

### `required_user`

Pull Requests must be from this user.

## Example usage

uses: actions/can-pr-be-automerged-action@v1.0  
with:  
&nbsp;&nbsp;required_label: 'automerge'  
&nbsp;&nbsp;required_user: 'octocat'
