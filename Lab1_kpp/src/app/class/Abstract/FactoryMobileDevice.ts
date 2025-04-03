import { Smartphone } from "./Smartphone";
import { Tablet } from "./Tablet";
import { MobileDevice } from "./MobileDevice";
import { NameMobileDeviceMaps } from "./NameMobileDevice";

export class FactoryMobileDevice {
    public static getMobileDevice(
        type: string,
        brand: string,
        batteryCapacity: number,
        weight: number,
        extraParam: any // Останній параметр буде або cameraResolution, або screenSize
    ): MobileDevice {
        if (type === NameMobileDeviceMaps["smartphone"]) {
            return new Smartphone(type, brand, batteryCapacity, weight, extraParam); 
        } else if (type === NameMobileDeviceMaps["tablet"]) {
            return new Tablet(type, brand, batteryCapacity, weight, extraParam); 
        } else {
            throw new Error("Невідомий тип пристрою");
        }
    }
}
