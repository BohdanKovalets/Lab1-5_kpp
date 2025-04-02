import { Smartphone } from './Smartphone';
import { Tablet } from './Tablet';
import { MobileDevice } from './MobileDevice';
import { NameMobileDeviceMaps } from './NameMobileDevice'; 

export class FactoryMobileDevice {
    public static getMobileDevice(name: string, brand: string, batteryCapacity: number, weight: number, extraParam?: any): MobileDevice {
        if (name == NameMobileDeviceMaps['smartphone'])
            return new Smartphone(brand, batteryCapacity, weight, extraParam as number);
        else if (name == NameMobileDeviceMaps['tablet'])
            return new Tablet(brand, batteryCapacity, weight, extraParam as number);
        else throw new Error('Невідомий мобільний пристрій');
    }
}
