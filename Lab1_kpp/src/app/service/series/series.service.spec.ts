import { SeriesService } from './series.service';
import { LogService } from '../logger/log.service';

describe('SeriesService', () => {
  let service: SeriesService;
  let mockLogService: jasmine.SpyObj<LogService>;

  beforeEach(() => {
    mockLogService = jasmine.createSpyObj('LogService', ['write']);
    service = new SeriesService(mockLogService);
  });

  it('повинен бути створений', () => {
    expect(service).toBeTruthy();
  });

  it('повертає правильне значення ряду для x = 0.1', () => {
    const result = service.getSeries(0.1);
    const expected = 0.1 - Math.pow(0.1, 3) + Math.pow(0.1, 5) - Math.pow(0.1, 7) + Math.pow(0.1, 9); // наближено
    expect(result).toBeCloseTo(expected, 3);
  });

  it('повертає Map з коректними значеннями', () => {
    const result = service.getTab(0.1, 0.3, 0.1);
    expect(result.size).toBe(3);
    expect(result.get('0.10')).toBeCloseTo(service.getSeries(0.1), 4);
    expect(mockLogService.write).toHaveBeenCalledWith(jasmine.stringMatching(/x=0\.10/));
  });
});
