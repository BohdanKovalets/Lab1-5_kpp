import { Laptop } from './Laptop';

describe('Laptop testing', () => {
  let laptop: Laptop;

  beforeEach(() => {
    laptop = new Laptop('Laptop', 'Dell', 10000, 1500, 16);
  });

  // Створення екземпляру класу
  it('should create a laptop instance', () => {
    expect(laptop).toBeTruthy();
  });

  // Перевірка конструктору з від\'ємною ємністю батареї
  it('should throw error when battery capacity is negative', () => {
    expect(() => new Laptop('Laptop', 'Dell', -10000, 1500, 16))
      .toThrow(new Error('Battery capacity must be positive'));
  });

  // Перевірка методу getBatteryCapacity()
  it('should return correct battery capacity', () => {
    expect(laptop.getBatteryCapacity()).toBe(10000);
  });

  // Перевірка методу displayInfo()
  it('should display correct laptop info', () => {
    const expectedInfo = `
      <strong>Тип:</strong> Laptop <br>
      <strong>Бренд:</strong> Dell <br>
      <strong>Ємність батареї:</strong> 10000 мАг <br>
      <strong>Вага:</strong> 1500 г <br>
      <strong>Оперативна пам\'ять:</strong> 16 ГБ
    `.trim(); //  trim для порівняння без зайвих пробілів

    expect(laptop.displayInfo()).toBe(expectedInfo);
  });
});
