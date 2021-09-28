export default class DoorModel {
  #number: number;
  #awarded: boolean;
  #selected: boolean;
  #opened: boolean;

  constructor(
    number: number,
    awarded = false,
    selected = false,
    opened = false
  ) {
    this.#number = number;
    this.#awarded = awarded;
    this.#selected = selected;
    this.#opened = opened;
  }

  get number() {
    return this.#number;
  }

  get awarded() {
    return this.#awarded;
  }

  get selected() {
    return this.#selected;
  }

  get opened() {
    return this.#opened;
  }

  get closed() {
    return !this.#opened;
  }

  unselect() {
    const selected = false;
    return new DoorModel(this.number, this.awarded, selected, this.opened);
  }

  toggleSelection() {
    const selected = !this.selected;
    return new DoorModel(this.number, this.awarded, selected, this.opened);
  }

  open() {
    const opened = true;
    return new DoorModel(this.number, this.awarded, this.selected, opened);
  }
}
