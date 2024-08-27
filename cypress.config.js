const { defineConfig } = require("cypress");


const fs = require('fs'); // fs-extra provides promisified methods
const path = require('path');
const xml2js = require('xml2js');

module.exports = defineConfig({
  /*projectId: 'qpz4s9'*/
  projectId: '6wq9w8',
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      /*Read XML file from specific location*/
      on('task', {
          readXmlFile(filePath) {
            const fullPath = path.resolve(config.projectRoot, filePath);
            return fs.readFile(fullPath, 'utf-8').then(data => {
            const parser = new xml2js.Parser();
            return parser.parseStringPromise(data);
            }).catch(err => {
                throw new Error(`Failed to read or parse the XML file: ${err.message}`);
                });
                return config;
              },

      /*Rename Folder name from specific location*/

      renameFolder({ oldPath, newPath }) {
        return new Promise((resolve, reject) => {
          fs.rename(oldPath, newPath, (err) => {
            if (err) {
              return reject(err);
            }
            resolve(null);
          })
        })
      },
              
    });
        
  },
  
  screenshotOnRunFailure : true,
  
  //screenshotsFolder : "D:\cypressroject\cypress\screenshots",
  videoCompression: true,
  videoCompression: 15,
  video: true,
  //videoFolder : "D:\cypressproject\cypress\videos",
  experimentalStudio: true,
  chromeWebSecurity: false,
  baseUrl : 'http://localhost:8081/gui',
  viewportWidth: 1900,
  viewportHeight: 1200,
  clearCookiesBeforeAllTests: false,
  clearLocalStorageBeforeAllTests: false,
  experimentalRunAllSpecs: true,
  cacheAcrossSpecs: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  
  
},
    

});



