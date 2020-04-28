import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    const logger = jasmine.createSpyObj('LoggerService', ['log']);
    const calculator = new CalculatorService(logger);

    const res = calculator.add(2, 2);

    expect(res).toBe(4);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it('should add subtract numbers', () => {
    const logger = new LoggerService();
    const calculator = new CalculatorService(logger);
    spyOn(logger, 'log');

    const res = calculator.subtract(6, 2);

    expect(res).toBe(4, 'Unexpected Subtraction Res');
    expect(logger.log).toHaveBeenCalledTimes(1);
  });
});
