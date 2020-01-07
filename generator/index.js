module.exports = api => {
  api.extendPackage({
    scripts: {
      commit: "git-cz",
      release: "release-it",
      changelog:
        "conventional-changelog -p custom-config -i CHANGELOG.md -s -r 0"
    },
    devDependencies: {
      commitizen: "^4.0.3",
      "conventional-changelog-cli": "^2.0.31",
      "conventional-changelog-custom-config": "^0.2.0",
      "cz-conventional-changelog": "^3.0.2",
      "release-it": "^12.4.3"
    },
    repository: {
      type: "git",
      url: "https://github.com/example/demo.git"
    },
    config: {
      commitizen: {
        path: "node_modules/cz-conventional-changelog"
      }
    },
    changelog: {
      bugsUrl: false,
      emojis: true,
      authorName: false,
      authorEmail: false
    }
  });
};
