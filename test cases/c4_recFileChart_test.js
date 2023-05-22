const scenariosFile = require("../src/Scenarios");
var scenarios = new scenariosFile.Scenarios();

Feature('recursive file chart');

Scenario('recursive file chart',  async ({ I }) => {

    scenarios.scenario2();
    I.wait(3)
});