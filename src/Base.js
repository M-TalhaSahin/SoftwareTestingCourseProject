const { I } = inject();

class Base {
    buttons;
    constructor(){
        this.buttons = {};
    }
    static waitAndClick(btn, duration){
        I.wait(duration);
        I.waitForElement(btn, 30);
        I.click(btn);
    }
    static generateFileLocator(name){
        return '//label[@data-file-name="' + name + '"]';
    }
    static generateNodeLocator(text, clickTime){
        if(clickTime == 0){
            return '//*[contains(text(),"' + text + '")]/parent::*';
        }
        else if(clickTime == 1){
            return '(//*[contains(text(),"' + text + '")])[2]/parent::*';
        }
        else{
            return 'Locator could not be generated!';
        }

    }
    
    
}

module.exports= {
    Base
}