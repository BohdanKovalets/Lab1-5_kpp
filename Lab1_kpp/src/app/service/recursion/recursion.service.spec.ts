import { LogService } from './../logger/log.service';
import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;
  let mockLogService: LogService;

  beforeEach(() => {
    mockLogService = {
      write: jasmine.createSpy('write')
    } as any;

    service = new RecursionService(mockLogService);
  });

  it('повинен бути створений', () => {
    expect(service).toBeTruthy();
  });

  it('повинен повертати Map з обчисленнями для рекурсії', () => {
    const result = service.getTab(0.1, 0.3, 0.1);
    expect(result.size).toBeGreaterThan(0);

    for (let [x, y] of result) {
      expect(typeof x).toBe('string');
      expect(typeof y).toBe('number');
      expect(!isNaN(y)).toBeTrue();
    }
  });

  it('повинен коректно обчислювати f(x) = x / (1 + x^2) через ряд Тейлора', () => {
    const expected = (x: number) => x / (1 + x * x);
    const result = service.getTab(0.1, 1.0, 0.2);

    for (let [xStr, yRec] of result) {
      const x = parseFloat(xStr);
      const yExact = expected(x);
      expect(Math.abs(yRec - yExact)).toBeLessThan(0.01); // точність до 0.01
    }
  });

  it('повинен логувати значення у LogService', () => {
    service.getTab(0.1, 0.3, 0.1);
    expect(mockLogService.write).toHaveBeenCalled();
  });
});
