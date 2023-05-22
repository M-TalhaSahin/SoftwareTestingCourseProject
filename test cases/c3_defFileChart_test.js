const scenariosFile = require("../src/Scenarios");
var scenarios = new scenariosFile.Scenarios();

Feature('default file chart');

Scenario('default file chart',  async ({ I }) => {
    
    scenarios.scenario1();
    I.wait(3)
});