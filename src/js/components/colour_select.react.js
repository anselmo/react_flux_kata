/**
* @jsx React.DOM
*/

var React = require('react');
var Slider = require('./slider.react.js');
var Swatch = require('./swatch.react.js');
var Helper = require('../helpers/colour_helper.js');
var ColourActions = require('../actions/colour_actions.js');

var ColourSelect = React.createClass({
  getDefaultProps:function(){
    return { 
      value: {
        r: 0,
        g: 0,
        b: 0
      }
    }
  },

  propTypes: {
    value: React.PropTypes.object.isRequired,
  },

  render: function() {
    var _colour_components = [];
    var _i = 0;
    for(var c in this.props.value){
      var _val = Helper.colourFromComponent(c, this.props.value[c]);
      _colour_components.push(
        <Slider id={this.props.key} key={_i} ref={c} label={c} val={this.props.value[c]}>
          <Swatch val={ _val }/>
        </Slider>
      );
      _i = _i + 1;
    }

    return (
      <div className='colour-select'>
        <div className='colour-select__handler'>
          {_colour_components}
        </div>
        <div className='colour-select__swatch'>
          <Swatch size='medium' val={this.props.value}/>
        </div>
        <div className='colour-select__actions'>
          <button className='btn btn--primary btn--small' onClick={this.remove}>Remove</button>
        </div>
      </div>
    );
  },

  remove: function(){
    ColourActions.remove(
      {
        id: this.props.key,
      }
    );
  }

});

module.exports = ColourSelect;



