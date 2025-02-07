<p align="center" >
<div align="center" >
<img src="https://github.com/waseemofficial/DSA_Python/blob/main/Images/github_logo_blue.png"/>
</div>

<div align="center">
<a href="https://github.com/waseemofficial">
<img src="https://img.shields.io/badge/syed-waseem-93b023?&style=for-the-badge&logo=&logoColor=white"/></a>
<img src="https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white"/>
<img src="https://img.shields.io/badge/Cypress-%23181717.svg?style=for-the-badge&logo=cypress&logoColor=green"/>
<img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
<img src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"/>
</div></p>


<div align="center">
<img src="https://img.shields.io/github/license/waseemofficial/Cypress_js.svg?style=flat"/> <img src="https://img.shields.io/github/stars/waseemofficial/Cypress_js.svg?colorB=orange&style=flat"/> <img sec="https://img.shields.io/github/languages/top/waseemofficial/Cypress_js.svg?style=flat"/> <img src="https://img.shields.io/github/languages/code-size/waseemofficial/Cypress_js.svg?style=flat"/> <img src="https://img.shields.io/github/issues-raw/waseemofficial/Cypress_js.svg?style=flat" />
</div>

<div align="center"> 

### Languages

![JavaScript](https://img.shields.io/badge/-JavaScript-000?&logo=JavaScript)
![SQL](https://img.shields.io/badge/-SQL-000?&logo=MySQL)
![Bash](https://img.shields.io/badge/-Bash-000?&logo=gnu-bash&logoColor=white)
![Bash](https://img.shields.io/badge/-markdown-000?&logo=markdown)



### Technologies

![Docker](https://img.shields.io/badge/-Docker-000?&logo=Docker)
![Linux](https://img.shields.io/badge/-Linux-000?&logo=Linux)
![Node.js](https://img.shields.io/badge/-Node.js-000?&logo=node.js)
![React](https://img.shields.io/badge/-React-000?&logo=React)
![Cypress](https://img.shields.io/badge/-Postman-000?&logo=Postman)
![Cypress](https://img.shields.io/badge/-Cypress-000?&logo=Cypress)
![GitHub](https://img.shields.io/badge/-GitHub-000?&logo=GitHub)
![GitHub](https://img.shields.io/badge/-Selenium-000?&logo=Selenium)
![GitHub](https://img.shields.io/badge/-Regex-000?&logo=Regex)
![GithubActions](https://img.shields.io/badge/-GithubActions-000?&logo=GithubActions)
</div>
<div align="center">
 
# Cypress

</div>

## Cypress JavaScript Automation Framework

This repository contains an automation framework for end-to-end testing of web applications using Cypress and JavaScript. The framework is designed to provide a robust, scalable, and maintainable solution for modern web application testing.

## Features

- Cypress Integration: Leverages the power of Cypress for fast, reliable, and easy-to-write tests.

- Page Object Model (POM) Design Pattern: Promotes modularity and reusability by separating test logic from page-specific logic.

- Custom Commands: Extends Cypress functionality with custom commands for reusable actions.

- Fixtures for Test Data: Uses JSON files for managing test data, ensuring clean and maintainable test scripts.

- Cross-Browser Testing: Supports testing across multiple browsers (Chrome, Firefox, Edge, etc.).

- CI/CD Ready: Easily integrates with CI/CD tools like GitHub Actions, Jenkins, or CircleCI.

- Detailed Reporting: Generates comprehensive test execution reports using Mochawesome.

## Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js (v14 or higher)

- npm (Node Package Manager)

- Cypress (installed via npm)

- IDE (Visual Studio Code, WebStorm, or any preferred IDE)

## Setup Instructions

Clone the Repository:

```bash
   
    git clone https://github.com/waseemofficial/Cypress_js.git
    cd Cypress_js
```
### Install Dependencies:

Run the following command to install all required dependencies:

>:information_source: **Information**
>
>npm install cypress --save-dev

```bash
    npm install

    Run Tests:
```

### Execute the tests using the following command:

```bash
   
    npx cypress run
```

### To open the Cypress Test Runner in interactive mode, use:

```bash
    npx cypress open
```
## Project Structure

```mermaid
Cypress_js/
├── cypress/
│   ├── e2e/                       # Test specs
│   ├── fixtures/                  # Test data (e.g., JSON files)
│   ├── pages/                     # Page classes for POM
│   ├── plugins/                   # Cypress plugins
│   ├── support/                   # Custom commands and utilities
│   └── videos/                    # Recorded test executions
├── cypress.config.js              # Cypress configuration file
├── package.json                   # npm dependencies and scripts
├── README.md                      # Project documentation
└── .gitignore                     # Files and directories to ignore
```

## Example Test

Here’s an example of a test case using the Cypress framework:

```javascript


import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

describe('Login Test Suite', () => {
  it('should log in successfully with valid credentials', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    loginPage.visit();
    loginPage.enterUsername('testuser');
    loginPage.enterPassword('password123');
    loginPage.clickLoginButton();
    homePage.verifyWelcomeMessage('Welcome, testuser!');
  });
});
```
## Custom Commands

Custom commands are defined in cypress/support/commands.js to simplify repetitive tasks. Example:

```javascript

Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('#login-button').click();
});
```
## Reports

After test execution, detailed reports are generated using Mochawesome. You can find the reports in the cypress/reports directory. To generate and view the report, run:

```bash
npx cypress run --reporter mochawesome
```
## CI/CD Integration

This framework is CI/CD-ready and can be integrated with tools like GitHub Actions, Jenkins, or CircleCI. Example GitHub Actions workflow (.github/workflows/cypress-tests.yml):

```yaml

name: Cypress Tests
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run Cypress tests
        run: npx cypress run --headless
```

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

- Fork the repository.

- Create a new branch for your feature or bugfix.
  
- Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.


<div class="alert alert-danger" role="alert">
    <div class="row vertical-align">
        <div class="col-xs-1 text-center">
            <i class="fa fa-exclamation-triangle fa-2x"/>
        </div>
        <div class="col-xs-11">
            <strong>Error:</strong>
        </div>
    </div>
</div>


[![cypress](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/xvvhay/develop&style=flat&logo=cypress)](https://cloud.cypress.io/projects/xvvhay/runs)

[![cypress](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/count/xvvhay/develop&style=flat&logo=cypress)](https://cloud.cypress.io/projects/xvvhay/runs)
