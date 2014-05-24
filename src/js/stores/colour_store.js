/**
* Colour Store
*/

var Dispatcher = require('../dispatcher/app_dispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var Color = require('color');
var ColourConstants = require('../constants/colour_constants');

var CHANGE_EVENT = 'change';

var _colours = [
  {r: 255, g: 255, b: 255 },
];

var ColourStore = merge(EventEmitter.prototype, {
  
  getAll: function() {
    return _colours;
  },
  
  getComposite: function() {
    var composite = _colours.reduce(function(prevColour, currentColour, i){ 
      return (prevColour !== null) ? prevColour.mix(Color(currentColour)) :  Color(currentColour);
    }, null);
    return composite !== null ? composite.rgb() : null;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
 
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  update: function(args){
    _colours[args.id][args.ref] = args.value;
  },

  remove: function(args){
    _colours = _colours.filter(function(colour, i){
      return (i !== args.id);
    });
  },

  add: function(){
    _colours.push({
      r: 255,
      g: 255,
      b: 255
    });
  },

  reset: function(){
    _colours = [];
    this.add();
  }

});

Dispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.actionType) {
    case ColourConstants.UPDATE:
      ColourStore.update(action.args); 
      break;
    case ColourConstants.RESET:
      ColourStore.reset();
      break;
    case ColourConstants.ADD:
      ColourStore.add();
      break;
    case ColourConstants.REMOVE:
      ColourStore.remove(action.args);
      break;
  }

  ColourStore.emitChange();

  return true; 
});

module.exports = ColourStore;


