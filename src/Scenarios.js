const { I } = inject();
const baseClassFile = require("./Base");

class Scenarios {
    B;
    constructor(){
        this.B = new baseClassFile.Base();
    }

    goToPage(){
        I.amOnPage('http://127.0.0.1:5000/');
        I.wait(2);
        I.saveScreenshot("pageOpened.png");
    }

    async fileAttach(){
        baseClassFile.Base.waitAndClick('//a[@id="submit_upload_button"]');
        I.wait(3);
        await I.attachFile('//input[@type="file"]', "../YazilimTesti.zip");
        baseClassFile.Base.waitAndClick('//a[@id="submit_upload_button"]');
        I.wait(1);
        I.seeElement(baseClassFile.Base.generateFileLocator('YazilimTesti'));
        I.wait(3);
        await I.attachFile('//input[@type="file"]', "../1-uploadfolder.zip");
        baseClassFile.Base.waitAndClick('//a[@id="submit_upload_button"]');
        I.wait(1);
        I.seeElement(baseClassFile.Base.generateFileLocator('1-uploadfolder'));
        I.wait(3);
        I.saveScreenshot("filesUploaded.png");
    }

    scenario1(){
        baseClassFile.Base.waitAndClick(baseClassFile.Base.generateFileLocator('for_for.py'), 1);
        I.wait(3);
        I.see('i in mod');
        I.wait(2);
        I.saveScreenshot("defaultFile.png");
    }

    scenario2(){
        I.scrollTo(baseClassFile.Base.generateFileLocator('testfile2.py'), 0, 100);
        I.wait(0.5);
        baseClassFile.Base.waitAndClick(baseClassFile.Base.generateFileLocator('testfile2.py'), 1);
        
        I.waitForElement(baseClassFile.Base.generateNodeLocator("from test3 import fonksiyon", 0), 30);
        I.scrollTo(baseClassFile.Base.generateNodeLocator("from test3 import fonksiyon", 0), 0, -100);
        I.wait(0.5);
        I.saveScreenshot("recursiveFile1.png");
        baseClassFile.Base.waitAndClick(baseClassFile.Base.generateNodeLocator("from test3 import fonksiyon", 0), 1);
        I.wait(2);
        I.saveScreenshot("recursiveFile2.png");
        baseClassFile.Base.waitAndClick(baseClassFile.Base.generateNodeLocator("from test3 import fonksiyon", 1), 1);
        I.wait(2);
    }

}

module.exports= {
    Scenarios
}