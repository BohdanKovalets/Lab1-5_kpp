import { MobileDevice } from "./MobileDevice";

export class Smartphone extends MobileDevice {
  type: string;

  constructor(brand: string, batteryCapacity: number, weight: number, public cameraResolution: number) {
    super(brand, batteryCapacity, weight);
    this.type = "Смартфон"; 
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
