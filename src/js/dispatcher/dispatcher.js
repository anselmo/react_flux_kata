/**
* Dispatcher
*/


var Promise = require('es6-promise').Promise;
var merge = require('react/lib/merge');

var _callbacks = [];
var _promises = [];

var _addPromise = function(callback, payload) {
  _promises.push(new Promise(function(resolve, reject) {
    if (callback(payload)) {
      resolve(payload);
    } else {
      reject(new Error('Dispatcher callback unsuccessful'));
    }
  }));
};

var _clearPromises = function() {
  _promises = [];
};

var Dispatcher = function() {};
Dispatcher.prototype = merge(Dispatcher.prototype, {

  register: function(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1; // index
  },

  dispatch: function(payload) {
    _callbacks.forEach(function(callback) {
      _addPromise(callback, payload);
    });
    Promise.all(_promises).then(_clearPromises);
  },
 
  waitFor: function(/*array*/ promiseIndexes, /*function*/ callback) {
    var selectedPromises = _promises.filter(function(/*object*/ _, /*number*/ j) {
      return promiseIndexes.indexOf(j) !== -1;
    });
    Promise.all(selectedPromises).then(callback);
  }

});

module.exports = Dispatcher;


