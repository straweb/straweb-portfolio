import { toString } from './node_modules/CypressBinary/15.3.0/Cypress.app/Contents/Resources/app/node_modules/zod/src/v3/helpers/errorUtil';
import { defineConfig } from 'cypress'
import * as fs from 'fs';
import * as path from 'path';

// const { defineConfig } = require('cypress');

export default defineConfig({
  retries: 3,
  defaultBrowser: 'electron:stable',
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0, // Keep all tests in memory

  e2e: {
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0, // Keep all tests in memory
    // Specify the browser to launch.
    // Options: 'chrome', 'firefox', 'electron', 'edge'
    // This example sets Chrome as the default browser for `cypress run`
    // browser: 'electron',
    'baseUrl': 'http://localhost:4200',
    pageLoadTimeout: 5*60000, // 5 minutes
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // Access the config object here
      const configObject = config;

      // Convert the entire config object to a JSON string
      const configString = JSON.stringify(configObject, null, 2); // The 'null, 2' arguments are for pretty-printing with 2 spaces indentation

      console.log('Cypress config as a string:', configString);
      fs.appendFileSync('./logs/cypress.log', `${JSON.stringify(configString).toString()}\n`);
      // You can also stringify a specific part of the config object
      // const envVariablesString = JSON.stringify(config.env, null, 2);
      // console.log('Environment variables as a string:', envVariablesString);
      on('task', {
        log(message) {
          console.log(message); // Log to the console
          // Log to a file (assuming 'logs' directory exists)
          fs.appendFileSync('./logs/cypress.log', `${message}\n`);
          return null; // Return null to indicate task completion
        },
      });
      on('before:browser:launch', (browser, launchOptions) => {
        // Modify launchOptions here to customize browser behavior
        if (browser.name === 'chrome') {
          launchOptions.args.push('--incognito'); // Example: Launch Chrome in incognito mode
        }
        return launchOptions;
      });
      // implement node event listeners here
      // npx cypress cache clear
      // npm install cypress --save-dev # or yarn add cypress --dev / pnpm add --save-dev cypress
      return config;
    },
    retries: 3,
  },

  component: {
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0, // Keep all tests in memory
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

})

// export async function manageFileAsync() {
//     const filePath = path.join(__dirname, 'async-example.txt');

//     try {
//         // Write to a file asynchronously
//         await fsPromises.writeFile(filePath, 'Hello from async TypeScript!', 'utf8');
//         console.log('File written successfully (async).');

//         // Read from a file asynchronously
//         const fileContents = await fsPromises.readFile(filePath, 'utf8');
//         console.log('File contents (async):', fileContents);

//         // Delete a file asynchronously
//         await fsPromises.unlink(filePath);
//         console.log('File deleted successfully (async).');
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

