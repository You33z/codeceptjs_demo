export enum ProductTitle {
    bagBack = 'Sauce Labs Backpack',
    bikeLIght = 'Sauce Labs Bike Light',
    tShirt = 'Sauce Labs Bolt T-Shirt'
}

export enum ProductDescription {
    bagBack = 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    bikeLIght = "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    tShirt = 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.'
}

export enum ProductPrice {
    bagBack = '29.99',
    bikeLIght = '9.99',
    tShirt = '15.99'
}



export const bikeLight: Product = {
    image: 'https://www.saucedemo.com/static/media/bike-light-1200x1500.37c843b0.jpg',
    title: ProductTitle.bikeLIght,
    description: ProductDescription.bikeLIght,
    price: ProductPrice.bikeLIght,
    currency: '$',
    btnCart: 'Add to cart',
}

export interface Product {
    image: string,
    title: ProductTitle,
    description: ProductDescription,
    price: ProductPrice,
    currency: string,
    btnCart: string,
}

