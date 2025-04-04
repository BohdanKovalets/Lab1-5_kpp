import { MobileDevice } from "./MobileDevice";

export class Laptop extends MobileDevice {
  constructor(
    public type: string,   
    brand: string,
    batteryCapacity: number,
    weight: number,
    public ramSize: number
  ) {
    super(brand, batteryCapacity, weight);
  }

  displayInfo(): string {
    return `
      <strong>Тип:</strong> ${this.type} <br>
      <strong>Бренд:</strong> ${this.brand} <br>
      <strong>Ємність батареї:</strong> ${this.batteryCapacity} мАг <br>
      <strong>Вага:</strong> ${this.weight} г <br>
      <strong>Оперативна пам'ять:</strong> ${this.ramSize} ГБ
    `.trim(); // trim для прибрання зайвих пробілів
  }
}
