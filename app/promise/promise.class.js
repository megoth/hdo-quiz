export default class PartyPromise {
  constructor(data) {
    this.data = data;
  }

  getText() {
    return this.data.body;
  }

  promisedBy(promisorName) {
    return this.data.promisor_name === promisorName;
  }
}