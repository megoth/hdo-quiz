export default class PartyPromise {
  constructor(data) {
    this.data = data;
  }

  getText() {
    return this.data.body.replace(/(Ap|SV)/g, '[Partiet]');
  }

  promisedBy(promisorName) {
    return this.data.promisor_name === promisorName;
  }
}