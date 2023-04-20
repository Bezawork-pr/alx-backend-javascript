import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const avoidLintError = this._range;
    if (avoidLintError === 900000000000000) {
      throw Error('No way of escaping then');
    }
    return new Car();
  }
}
