export default class Door {
  #number;
  #awarded;
  #selected;
  #opened;

  constructor(number, awarded = false, selected = false, opened = false) {
    this.number = number;
    this.awarded = awarded;
    this.selected = selected;
    this.opened = opened;
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

  unselect() {
    const selected = false;
    return new Door(this.number, this.awarded, selected, this.opened);
  }

  toggleSelection() {
    const selected = !this.selected;
    return new Door(this.number, this.awarded, selected, this.opened);
  }

  open() {
    const opened = true;
    return new Door(this.number, this.awarded, this.selected, opened);
  }
}
