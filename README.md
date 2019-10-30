# TestCafe Action

This action installs [TestCafe](https://github.com/DevExpress/testcafe) from `npm` and runs tests.

## Usage

```yaml
- uses: actions/checkout@v1
- uses: actions/testcafe-action@v0.0.1
  with:
    args: "chrome tests"
```

This workflow checks out the repository, installs the latest TestCafe version and runs tests from the `tests` folder in Google Chrome.

The [args](#args) option specifies command line arguments passed to the [testcafe](https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html) command.

You can also use the [version](#version) option to specify the TestCafe version to install.

> Run the [setup-node](https://github.com/actions/setup-node) action before `testcafe-action` to install a specific Node.js version.

## Options

### args

TestCafe [command line arguments](https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html).

```yaml
- uses: actions/checkout@v1
- uses: actions/testcafe-action@v0.0.1
  with:
    args: "safari fixture.js -s takeOnFails=true -q -c 3"
```

### version

*Optional*

The TestCafe version to install.

```yaml
- uses: actions/testcafe-action@v0.0.1
  with:
    version: "1.6.0"
    args: "chrome tests"
```

The **latest version** is installed by default.
