# Cypress Tests for Telnyx.com

## 1️⃣ Summary of repo

This repository contains automated **end-to-end tests** for Telnyx.com using **Cypress**.
Tests follow the **Page Object Model (POM)** structure to improve maintainability and readability.
Tests include: navigation, UI validation, and functional flows for main site features.

## 2️⃣ Requirements

- Node.js v18+
- npm
- Cypress (installed via npm)

Optional (for running in Chrome/Edge):

- Chrome or Edge browser installed

## 3️⃣ Steps to install

1. Clone the repository:

```bash
git clone https://github.com/geradot/telnyx-cypress-tests.git
cd telnyx-cypress-tests
```

2. Install dependencies:

```bash
npm install
```

3. Verify Cypress installation:

```bash
npx cypress verify
```

## 4️⃣ Steps to launch

### Run interactive test runner

```bash
npx cypress open
```

- Opens the Cypress Test Runner GUI.
- Select a test file and browser to run.

### Run tests in headless mode

```bash
npx cypress run
```

- Default browser: Electron
- To specify another browser:

```bash
npx cypress run --browser chrome
```

### Run a single test file

```bash
npx cypress run --spec "cypress/e2e/main.cy.js"
```

## 5️⃣ Steps to create the report

Cypress can generate reports using **Mochawesome** or built-in reporter:

1. Install reporter (if using Mochawesome):

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

2. Run tests with reporter:

```bash
npx cypress run --reporter mochawesome
```

3. Merge and generate HTML report:

```bash
npx mochawesome-merge cypress/results/*.json > cypress/results/report.json
npx marge cypress/results/report.json --reportDir cypress/results/report
```

4. Open the HTML report in your browser:

```bash
open cypress/results/report/mochawesome.html
```
