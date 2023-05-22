const scenariosFile = require("../src/Scenarios");
var scenarios = new scenariosFile.Scenarios();

Feature('file attachment');

Scenario('file attachment',  async ({ I }) => {

    await scenarios.fileAttach();
    I.wait(3)
});