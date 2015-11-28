function QuizFactory() {
  this.test = 42;
}
QuizFactory.prototype.create = function () {
  return this.test;
}

module.exports =i QuizFactory;