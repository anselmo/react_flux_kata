/**
* App dispatcher
*/

var assign = require('object.assign');
var Dispatcher = require('./dispatcher');

var AppDispatcher = assign(Dispatcher.prototype, {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;


