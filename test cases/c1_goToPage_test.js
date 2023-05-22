const scenariosFile = require("../src/Scenarios");
var scenarios = new scenariosFile.Scenarios();

Feature('go to page');

Scenario('go to page',  async ({ I }) => {

    scenarios.goToPage();
    I.wait(3)
});