export abstract class MobileDevice {
    brand: string;
    batteryCapacity: number;
    weight: number;

    constructor(brand: string, batteryCapacity: number, weight: number) {
        if (batteryCapacity <= 0) throw new Error('Battery capacity must be positive');
        if (weight <= 0) throw new Error('Weight must be positive');
        
        this.brand = brand;
        this.batteryCapacity = batteryCapacity;
        this.weight = weight;
    }

    getBatteryCapacity(): number {
        return this.batteryCapacity;
    }

    abstract displayInfo(): string;
}
