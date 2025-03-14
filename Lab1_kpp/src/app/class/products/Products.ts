export class Product {
    name: string;
    unit: string;
    category: string;
    stock: number;
    pricePerUnit: number;

    constructor(name: string, unit: string, category: string, stock: number, pricePerUnit: number) {
        this.name = name;
        this.unit = unit;
        this.category = category;
        this.stock = stock;
        this.pricePerUnit = pricePerUnit;
    }
}
