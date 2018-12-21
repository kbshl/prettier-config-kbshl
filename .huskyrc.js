module.exports = {
  hooks: {
    'pre-commit': 'lint-staged && npm run test',
    'commit-msg': 'npm run lint:commit',
  },
}
