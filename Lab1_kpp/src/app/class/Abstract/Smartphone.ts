import { MobileDevice } from "./MobileDevice";

export class Smartphone extends MobileDevice {
  constructor(
    public type: string, 
    brand: string,
    batteryCapacity: number,
    weight: number,
    public cameraResolution: number
  ) {
    super(brand, batteryCapacity, weight);
  }

  displayInfo(): string {
    return `
      <strong>Тип:</strong> ${this.type} <br>
      <strong>Бренд:</strong> ${this.brand} <br>
      <strong>Ємність батареї:</strong> ${this.batteryCapacity} мАг <br>
      <strong>Вага:</strong> ${this.weight} г <br>
      <strong>Роздільна здатність камери:</strong> ${this.cameraResolution} Мп
    `;
  }
}
