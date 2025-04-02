import { MobileDevice } from "./MobileDevice";

export class Smartphone extends MobileDevice {
    cameraResolution: number;

    constructor(brand: string, batteryCapacity: number, weight: number, cameraResolution: number) {
        super(brand, batteryCapacity, weight);
        if (cameraResolution <= 0) throw new Error('Camera resolution must be positive');
        this.cameraResolution = cameraResolution;
    }

    displayInfo(): string {
        return `Бренд: ${this.brand}<br>Ємність батареї: ${this.batteryCapacity} мАг<br>Вага: ${this.weight} г<br>Роздільна здатність камери: ${this.cameraResolution} МП`;
    }
}
