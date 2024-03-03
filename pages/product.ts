import { SWAG_LABS_LOCATORS } from "../locators/swaglabs.locators";
import { Product } from "../models/products";
const { I } = inject();


class ProductPage {
    private locators = SWAG_LABS_LOCATORS;

    public async checkProductImage(product: Product): Promise<void> {
        await I.waitForElement(this.locators.product.card.image.replace('PRODUCT_TITLE',product.title),10)
        const imageGrabbed = await I.grabAttributeFrom(this.locators.product.card.image.replace('PRODUCT_TITLE',product.title), 'src');
        await I.assertEqual('https://www.saucedemo.com'.concat(imageGrabbed),product.image)
    }


}

export = new ProductPage()