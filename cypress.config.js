/**const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
*/
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  //video:true,
  projectId: xvvhay,
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {},
});
