export default class Party {
  constructor(data) {
    this.data = data;
  }

  getName() {
    return this.data.name;
  }
}