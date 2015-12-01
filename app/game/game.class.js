import Rx from 'rx';

export default class Game {
  constructor(parties, promises) {
    this.parties = parties;
    this.promises = promises;
    this.currentPromise = 0;
    this.answers = [];
    this.onNextSubscribers = new Rx.Subject();
    this.onResponseSubscribers = new Rx.Subject();
  }

  getResponse(promiseIndex) {
    return this.answers[promiseIndex] || null;
  }

  getScore() {
    return this.answers.reduce((score, answer, index) => {
      return score + (this.promises[index].promisedBy(answer.getName()) ? 1 : 0);
    }, 0);
  }

  giveAnswer(partyIndex) {
    this.answers[this.currentPromise] = this.parties[partyIndex];
    this.onResponseSubscribers.onNext([
      this.promises[this.currentPromise].promisedBy(this.parties[partyIndex].getName()),
      this.promises[this.currentPromise].getPromisor()
    ]);
    this.currentPromise++;
    this.onNextSubscribers.onNext(this.currentPromise);
    return this.currentPromise;
  }

  giveAnswers(indexes) {
    indexes.forEach(index => this.giveAnswer(index));
    return this.currentPromise;
  }

  onNext(handler) {
    this.onNextSubscribers.subscribe(handler);
    this.onNextSubscribers.onNext(this.currentPromise, this.promises[this.currentPromise]);
  }

  onResponse(handler) {
    this.onResponseSubscribers.subscribe(handler);
  }

  setAnswer(index, partyIndex) {
    this.answers[index] = this.parties[partyIndex];
  }
}