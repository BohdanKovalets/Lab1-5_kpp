import { TabService } from './tab.service';
import { LogService } from './../logger/log.service';

describe('TabService', () => {
  let service: TabService;
  let logServiceSpy: jasmine.SpyObj<LogService>;

  beforeEach(() => {
    logServiceSpy = jasmine.createSpyObj('LogService', ['write']);
    service = new TabService(logServiceSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should compute correct values for x = 0.1', () => {
    const result = service.getTab(0.1, 0.1, 0.1);
    expect(result.x.length).toBe(1);
    expect(result.x[0]).toBeCloseTo(0.1, 2);
    expect(result.y[0]).toBeCloseTo(0.0990, 3);
  });

  it('should log values when log service is present', () => {
    service.getTab(0.1, 0.1, 0.1);
    expect(logServiceSpy.write).toHaveBeenCalledWith('x=0.10 y=0.0990');
  });
});
