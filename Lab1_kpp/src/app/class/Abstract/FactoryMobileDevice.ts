import { Smartphone } from "./Smartphone";
import { Tablet } from "./Tablet";
import { MobileDevice } from "./MobileDevice";
import { NameMobileDeviceMaps } from "./NameMobileDevice";

export class FactoryMobileDevice {
    public static getMobileDevice(
        name: string,
        brand: string,
        batteryCapacity: number,
        weight: number,
        extraParam: any // Останній параметр буде або cameraResolution, або screenSize
    ): MobileDevice {
        if (name === NameMobileDeviceMaps["smartphone"]) {
            return new Smartphone(name, brand, batteryCapacity, weight, extraParam); 
        } else if (name === NameMobileDeviceMaps["tablet"]) {
            return new Tablet(name, brand, batteryCapacity, weight, extraParam); 
        } else {
            throw new Error("Невідомий тип пристрою");
        }
    }
}
