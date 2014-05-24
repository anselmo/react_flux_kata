/**
* Colour helpers
*/

var merge = require('react/lib/merge');

module.exports = {
  colourFromComponent: function(component, value){
    var base = {};
    base[component] = value;
    return merge({r:0, b:0, g:0}, base);
  }
};
  

