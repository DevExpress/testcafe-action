# Run TestCafe GitHub Action

This action installs [TestCafe](https://github.com/DevExpress/testcafe) from `npm` and runs tests.

## Usage

```yaml
- uses: actions/checkout@v1
- uses: DevExpress/testcafe-action@latest
  with:
    args: "chrome tests"
```

In this example, the [checkout](https://github.com/actions/checkout) action fetches the repository. Then `testcafe-action` installs the latest TestCafe version and runs tests from the `tests` folder in Google Chrome.

The [args](#args) option specifies command line arguments passed to the [testcafe](https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html) command.

You can also use the [version](#version) option to specify the TestCafe version.

> Run the [setup-node](https://github.com/actions/setup-node) action before `testcafe-action` to install a specific Node.js version.

## Options

### args

TestCafe [command line arguments](https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html).

```yaml
- uses: DevExpress/testcafe-action@latest
  with:
    args: "chrome fixture.js -s takeOnFails=true -q -c 3"
```

### version

*Optional*

The TestCafe version to install.

```yaml
- uses: DevExpress/testcafe-action@latest
  with:
    version: "1.6.0"
    args: "chrome tests"
```

**Default value:** `latest`

### skip-install

*Optional*

Whether to skip having this action install TestCafe. This is useful if you are managing TestCafe already in your package.json dependencies and want to use that version.

```yaml
- uses: DevExpress/testcafe-action@latest
  with:
    skip-install: true
    args: "chrome tests"
```

**Default value:** `false`

## Examples

This section contains sample workflows that show how to use `testcafe-action`.

### Run TestCafe Tests

The following workflow demonstrates how to use `testcafe-action` in a basic scenario:

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
        uses: DevExpress/testcafe-action@latest
        with:
          args: "chrome my-fixture.js"
```

The [checkout](https://github.com/actions/checkout) action fetches the repository. Then `testcafe-action` installs TestCafe and runs `my-fixture.js` in Chrome.

This workflow is triggered when you push changes to the repository. The job runs on a Windows virtual machine.

### Target Multiple Node.js Versions and Operating Systems

The following workflow demonstrates how to run TestCafe tests across Node.js versions and operating systems.

```yaml
name: Target Multiple Node.js Versions and Operating Systems
on: [push]

jobs:
  build:
    name: Run Tests Across Node.js Versions and Operating Systems
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node: [8, 10, 12]
    steps:
      - uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node }}
      - uses: actions/checkout@v1
      - name: Run TestCafe Tests
        uses: DevExpress/testcafe-action@latest
        with:
          args: "chrome tests"
```

This job contains a matrix strategy that duplicates it to run on Windows and Ubuntu virtual machines in three Node.js versions (`8`, `10`, and `12`).

The [setup-node](https://github.com/actions/setup-node) action installs the Node.js version defined in the matrix. Then [checkout](https://github.com/actions/checkout) fetches the code and `testcafe-action` runs tests.
