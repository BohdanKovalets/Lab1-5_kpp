import { Smartphone } from "./Smartphone";
import { Tablet } from "./Tablet";
import { Laptop } from "./Laptop";
import { MobileDevice } from "./MobileDevice";
import { NameMobileDeviceMaps } from "./NameMobileDevice";

export class FactoryMobileDevice {
  public static getMobileDevice(
    type: string,
    brand: string,
    batteryCapacity: number,
    weight: number,
    extraParam: any
  ): MobileDevice {
    if (type === NameMobileDeviceMaps["smartphone"]) {
      return new Smartphone(type, brand, batteryCapacity, weight, extraParam as number);
    } else if (type === NameMobileDeviceMaps["tablet"]) {
      return new Tablet(type, brand, batteryCapacity, weight, extraParam as number);
    } else if (type === NameMobileDeviceMaps["laptop"]) {
      return new Laptop(type, brand, batteryCapacity, weight, extraParam as number);
    } else {
      throw new Error("Невідомий тип пристрою");
    }
  }
}
