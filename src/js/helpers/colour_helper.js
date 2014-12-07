/**
* Colour helpers
*/

var assign = require('object.assign');


module.exports = {
  colourFromComponent: function(component, value){
    var base = {};
    base[component] = value;
    return assign({r:0, b:0, g:0}, base);
  }
};
  

