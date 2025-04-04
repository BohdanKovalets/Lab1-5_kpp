import { Tablet } from './Tablet';

describe('Tablet testing', () => {
  let tablet: Tablet;

  beforeEach(() => {
    tablet = new Tablet('Tablet', 'Samsung', 8000, 300, 10.5);
  });

  // Створення екземпляру класу
  it('should create a tablet instance', () => {
    expect(tablet).toBeTruthy();
  });

  // Перевірка конструктору з від\'ємною ємністю батареї
  it('should throw error when battery capacity is negative', () => {
    expect(() => new Tablet('Tablet', 'Samsung', -8000, 300, 10.5))
      .toThrow(new Error('Battery capacity must be positive'));
  });

  // Перевірка методу getBatteryCapacity()
  it('should return correct battery capacity', () => {
    expect(tablet.getBatteryCapacity()).toBe(8000);
  });

  // Перевірка методу displayInfo()
  it('should display correct tablet info', () => {
    const info = `
      <strong>Тип:</strong> Tablet <br>
      <strong>Бренд:</strong> Samsung <br>
      <strong>Ємність батареї:</strong> 8000 мАг <br>
      <strong>Вага:</strong> 300 г <br>
      <strong>Розмір екрану:</strong> 10.5 дюймів
    `;
    expect(tablet.displayInfo()).toBe(info);
  });
});
