export default class Game {
  constructor(parties, promises) {
    this.parties = parties;
    this.promises = promises;
    this.currentPromise = 0;
    this.answers = [];
  }

  getScore() {
    return this.answers.reduce((score, answer, index) => {
      return score + (this.promises[index].promisedBy(answer.getName()) ? 1 : 0);
    }, 0);
  }

  giveAnswer(partyIndex) {
    this.answers[this.currentPromise] = this.parties[partyIndex];
    return ++this.currentPromise;
  }

  giveAnswers(indexes) {
    indexes.forEach(index => this.giveAnswer(index));
    return this.currentPromise;
  }

  setAnswer(index, partyIndex) {
    this.answers[index] = this.parties[partyIndex];
  }
}