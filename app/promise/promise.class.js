export default class PartyPromise {
  constructor(data) {
    this.data = data;
  }

  getCensored() {
    return this.data.body.replace(/(Ap|SV)/g, '[Partiet]');
  }

  getPromisor() {
    return this.data.promisor_name;
  }

  getText() {
    return this.data.body;
  }

  promisedBy(promisorName) {
    return this.data.promisor_name === promisorName;
  }
}