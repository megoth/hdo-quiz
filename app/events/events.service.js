// shamelessly taken from https://github.com/Reactive-Extensions/RxJS/blob/master/doc/howdoi/eventemitter.md
import Rx from 'rx';

eventService.$inject = [];
export default function eventService() {
  var subjects = {};
  
  return {
    emit: emit,
    on: on,
    off: off,
    dispose: dispose
  };

  function emit(name, data) {
    var fnName = createName(name);
    subjects[fnName] || (subjects[fnName] = new Rx.Subject());
    subjects[fnName].onNext(data);
  }

  function on(name, handler) {
    var fnName = createName(name);
    subjects[fnName] || (subjects[fnName] = new Rx.Subject());
    subjects[fnName].subscribe(handler);
  }

  function off(name, handler) {
    var fnName = createName(name);
    if (subjects[fnName]) {
        subjects[fnName].dispose();
        delete subjects[fnName];
    }
  }

  function dispose() {
    subjects.each((subject) => subject.dispose());
    subjects = {};
  }

  function createName (name) {
      return '$' + name;
  }
}