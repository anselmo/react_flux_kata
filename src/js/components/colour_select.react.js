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
    };
  },

  propTypes: {
    value: React.PropTypes.object.isRequired,
    id: React.PropTypes.number
  },

  render: function() {
    var _this = this;
    
    var colour_components = Object.keys(this.props.value).map(function(k,i){
      var _val = Helper.colourFromComponent(k, _this.props.value[k]);
      return <Slider key={i} group={_this.props.id} id={k} label={k} val={_this.props.value[k]}>
               <Swatch val={ _val }/>
             </Slider>
    })

    return (
      <div className='colour-select'>
        <div className='colour-select__handler'>
          {colour_components}
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
    ColourActions.remove({
      id: this.props.id,
    });
  }

});

module.exports = ColourSelect;

