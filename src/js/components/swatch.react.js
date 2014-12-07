var React = require('react');
var Color = require('color');
var Swatch = React.createClass({
  
  getDefaultProps:function(){
    return { 
      show_label: false
    };
  },

  getInitialState:function(){
    return {
      val: this.props.val
    }
  },

  render: function() {
    var _className = this.props.size ? 'swatch swatch--' + this.props.size : 'swatch swatch--small';
    var _colour = Color(this.props.val);
    var _style = {backgroundColor: _colour.hexString()};
    var _label = this.props.show_label ? <span className='swatch__label'>{ _colour.hexString() }</span> : '';
    return (
      <div className={_className}>
        <div className='swatch__block' style={_style}>
         {_label}
        </div>
      </div>
    );
  },

});

module.exports = Swatch;



