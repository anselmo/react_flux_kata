var React = require('react');
var Slider = require('./slider.react.js');
var ColourActions = require('../actions/colour_actions.js');

var ColourApp = React.createClass({
  
  getDefaultProps:function(){
    return { 
      max: 255,
      min: 0,
      step: 1,
      label: 'Slider',
      val: 0
    }
  },

  propTypes: {
    val: React.PropTypes.number.isRequired,
    label: React.PropTypes.string
  },

  render: function() {
    return (
      <div className='slider'>
        <label className='slider__title'>{this.props.label} : {this.props.val}</label>
        <input step={this.props.step} className='slider__handler' defaultValue={this.props.val} type='range' min={this.props.min} max={this.props.max} onChange={this.update}/>
        {this.props.children}
      </div>
    );
  },

  update: function(e){
    ColourActions.update({
        id: this.props.id,
        group: this.props.group,
        value: e.target.value
    });
  },

});

module.exports = ColourApp;


