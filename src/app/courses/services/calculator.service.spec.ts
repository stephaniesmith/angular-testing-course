import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    const calculator = new CalculatorService(new LoggerService());
    const res = calculator.add(2, 2);
    expect(res).toBe(4);
  });

  it('should add subtract numbers', () => {
    const calculator = new CalculatorService(new LoggerService());
    const res = calculator.subtract(6, 2);
    expect(res).toBe(4);  });
});
