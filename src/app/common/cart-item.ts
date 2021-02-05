export class CartItem {
    name: string;
    brand: string;
    price: number;
    imageUrl: string;
    id: number;
    constructor(product: any) {
        this.id = product.id;
        this.name = product.name;
        this.imageUrl = product.imageUrl;
        this.price = product.price;
        this.brand = product.brand;
    }
}