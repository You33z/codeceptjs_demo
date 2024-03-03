import { SWAG_LABS_LOCATORS } from "../locators/swaglabs.locators";
import { User } from "../models/user";
const { I } = inject();


class LoginPage {
    private locators = SWAG_LABS_LOCATORS;

    
    public async login(user: User): Promise<void> {
        await I.amOnPage('/'); 
        await I.waitForElement(this.locators.login.username,10)
        await I.fillField(this.locators.login.username, user.username)
        await I.fillField(this.locators.login.password, user.password)
        await I.click(this.locators.login.loginBtn)
    }

    public async logout(): Promise<void> {
        await I.click(this.locators.product.header.burgerMenu)
        await I.click(this.locators.product.header.logout)
        await I.seeElement(this.locators.login.loginBtn)        
    }

    public async checkErrorMessage(user: User): Promise<void> {
        await I.waitForElement(this.locators.login.error,10)
        const errorMessageGrabbed = await I.grabTextFrom(this.locators.login.error)
        await I.assertEqual(errorMessageGrabbed,user.error)
    }


}

export = new LoginPage()