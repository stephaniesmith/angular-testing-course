import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let calculator: CalculatorService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(loggerSpy);
  });

  it('should add two numbers', () => {
    const res = calculator.add(2, 2);

    expect(res).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should add subtract numbers', () => {
    const res = calculator.subtract(6, 2);

    expect(res).toBe(4, 'Unexpected Subtraction Res');
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
