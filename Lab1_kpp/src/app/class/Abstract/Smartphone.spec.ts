import { Smartphone } from './Smartphone';

describe('Smartphone testing', () => {
  let smartphone: Smartphone;

  beforeEach(() => {
    smartphone = new Smartphone('Smartphone', 'Apple', 4000, 180, 12);
  });

  // Створення екземпляру класу
  it('should create a smartphone instance', () => {
    expect(smartphone).toBeTruthy();
  });

  // Перевірка конструктору з від\'ємною ємністю батареї
  it('should throw error when battery capacity is negative', () => {
    expect(() => new Smartphone('Smartphone', 'Apple', -4000, 180, 12))
      .toThrow(new Error('Battery capacity must be positive'));
  });

  // Перевірка методу getBatteryCapacity()
  it('should return correct battery capacity', () => {
    expect(smartphone.getBatteryCapacity()).toBe(4000);
  });

  // Перевірка методу displayInfo()
  it('should display correct smartphone info', () => {
    const info = `
      <strong>Тип:</strong> Smartphone <br>
      <strong>Бренд:</strong> Apple <br>
      <strong>Ємність батареї:</strong> 4000 мАг <br>
      <strong>Вага:</strong> 180 г <br>
      <strong>Роздільна здатність камери:</strong> 12 Мп
    `;
    expect(smartphone.displayInfo()).toBe(info);
  });
});
