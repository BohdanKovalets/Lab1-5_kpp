import { MobileDevice } from "./MobileDevice";

export class Tablet extends MobileDevice {
  type: string;

  constructor(brand: string, batteryCapacity: number, weight: number, public screenSize: number) {
    super(brand, batteryCapacity, weight);
    this.type = "Планшет"; 
  }

  displayInfo(): string {
    return `
      <strong>Тип:</strong> ${this.type} <br>
      <strong>Бренд:</strong> ${this.brand} <br>
      <strong>Ємність батареї:</strong> ${this.batteryCapacity} мАг <br>
      <strong>Вага:</strong> ${this.weight} г <br>
      <strong>Розмір екрану:</strong> ${this.screenSize} дюймів
    `;
  }
}
