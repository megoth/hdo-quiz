export default class Party {
  constructor(data) {
    this.data = data;
  }

  getLogo() {
    return this.data._links.logo.href.replace('{?version}', '');
  }

  getName() {
    return this.data.name;
  }
}