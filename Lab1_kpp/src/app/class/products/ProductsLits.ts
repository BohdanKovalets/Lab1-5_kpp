import { Product } from "./Products";

export class ProductsList {
    products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    sortByCategory() {
        this.products.sort((a, b) => a.category.localeCompare(b.category));
    }

    getGroupedByCategory() {
        return this.products.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
        }, {} as Record<string, Product[]>);
    }
}
