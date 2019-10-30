# TestCafe Action

This action installs [TestCafe](https://github.com/DevExpress/testcafe) from `npm` and runs tests.

## Usage

```yaml
- uses: actions/checkout@v1
- uses: actions/testcafe-action@v0.0.1
  with:
    args: "chrome tests"
```

In this example, the [checkout](https://github.com/actions/checkout) action checks out the repository, then `testcafe-action` installs the latest TestCafe version and runs tests from the `tests` folder in Google Chrome.

The [args](#args) option specifies command line arguments passed to the [testcafe](https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html) command.

You can also use the [version](#version) option to specify the TestCafe version to install.

> Run the [setup-node](https://github.com/actions/setup-node) action before `testcafe-action` to install a specific Node.js version.

## Options

### args

TestCafe [command line arguments](https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html).

```yaml
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

## Examples

This section contains sample workflows that showcase `testcafe-action`.

### Run TestCafe Tests

The following workflow demonstrates the basic usage of `testcafe-action`.

```yaml
name: Basic TestCafe Workflow
on: [push]

jobs:
  build:
    name: Run TestCafe Tests
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v1
      - name: Install TestCafe from 'npm' and Run Tests
        uses: actions/testcafe-action@v0.0.1
        with:
          args: "safari my-fixture.js"
```

The [checkout](https://github.com/actions/checkout) action checks out the repository. Then, `testcafe-action` installs TestCafe and runs `my-fixture.js` in Safari.

This workflow is triggered when you push changes to the repository. The job runs on a Windows virtual machine.

### Use Multiple Node.js Versions

The following workflow demonstrates how to run TestCafe tests with several Node.js versions.

```yaml
name: Use Matrix Strategy to Test in Several Node.js Versions
on: [push]

jobs:
  build:
    name: Run Tests With Several Node.js Versions
    runs-on: windows-latest
    strategy:
      matrix:
        node: [8, 10, 12]
    steps:
      - uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node }}
      - uses: actions/checkout@v1
      - name: Run TestCafe Tests
        uses: actions/testcafe-action@master
        with:
          args: "chrome tests"
```

This job contains a matrix strategy that duplicates it to run three Node.js versions: `8`, `10`, and `12`.

The [setup-node](https://github.com/actions/setup-node) action installs the Node.js version defined in the matrix. Then, [checkout](https://github.com/actions/checkout) fetches the code and `testcafe-action` runs tests.
