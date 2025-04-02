import { MobileDevice } from "./MobileDevice";

export class Tablet extends MobileDevice {
    screenSize: number;

    constructor(brand: string, batteryCapacity: number, weight: number, screenSize: number) {
        super(brand, batteryCapacity, weight);
        if (screenSize <= 0) throw new Error('Screen size must be positive');
        this.screenSize = screenSize;
    }

    displayInfo(): string {
        return `Бренд: ${this.brand}<br>Ємність батареї: ${this.batteryCapacity} мАг<br>Вага: ${this.weight} г<br>Розмір екрану: ${this.screenSize} дюймів`;
    }
}
