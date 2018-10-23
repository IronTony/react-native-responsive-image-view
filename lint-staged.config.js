module.exports = {
  '*.js': ['prettier --write', 'eslint --fix', 'git add'],
  '*.{json,md,yml}': ['prettier --write', 'git add'],
  'README.md': ['doctoc', 'prettier --write', 'git add'],
};
