import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super();
    const _sqft = new Building(sqft);
    this._sqft = _sqft._sqft;
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
