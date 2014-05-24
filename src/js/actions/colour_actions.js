/**
* Colour Actions
*/

var AppDispatcher = require('../dispatcher/app_dispatcher');
var ColourConstants = require('../constants/colour_constants');

var ColourActions = {

  update: function(args){
    AppDispatcher.handleViewAction({
      actionType: ColourConstants.UPDATE,
      args: args,
    });
  },

  add: function(){
    AppDispatcher.handleViewAction({
      actionType: ColourConstants.ADD
    });
  },

  remove: function(args){
    AppDispatcher.handleViewAction({
      actionType: ColourConstants.REMOVE,
      args: args
    });
  },

  reset: function(){
    AppDispatcher.handleViewAction({
      actionType: ColourConstants.RESET
    });
  }

};

module.exports = ColourActions;


