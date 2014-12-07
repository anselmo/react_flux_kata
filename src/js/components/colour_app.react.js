var React = require('react');

var ColourStore = require('../stores/colour_store');
var ColourActions = require('../actions/colour_actions.js');

var ColourSelect = require('./colour_select.react.js');
var Swatch = require('./swatch.react.js');

function getColours() {
  return ColourStore.getAll();
}

function getComposite() {
  return ColourStore.getComposite();
}

//create a component
var ColourApp = React.createClass({

  getInitialState: function() {
    return {
      colours: getColours(),
      composite: getComposite()
    }
  },

  getDefaultProps:function(){
    return { 
      title: 'Colour Mixer'
    };
  },
  
  propTypes: {
    title: React.PropTypes.string
  },

  componentDidMount: function() {
    ColourStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ColourStore.removeChangeListener(this._onChange);
  },

  // componentWillMount: function() {
  // },

  // componentWillReceiveProps: function(nextProps, nextState) {
  // },

  // componentWillUpdate: function(nextProps, nextState) {
  // },

  // componentDidUpdate: function(nextProps, nextState) {
  // },

  // shouldComponentUpdate: function(nextProps, nextState){
  // }

  _onChange: function(payload){
    this.setState(
      { 
        colours: getColours(),
        composite: getComposite()
      }
    );
  },

  render: function() {
    var colours = [];
 
    var colours = this.state.colours.map(function(colour, i){
       return  <ColourSelect key={i} id={i} value={colour}/>;
    });

    return (
        <div className='group group--colour'>
          <div className='group__head split'>
            <div className='split__left'> 
              <h1 className='group__title'>{this.props.title}</h1>
            </div> 
            <div className='split__right'>
              <button className='btn btn--primary push--half-right' onClick={this.add}>Add</button>
              <button className='btn btn--primary' onClick={this.reset}>Reset</button>
            </div>
          </div>
          <div className='group__body grid'>
           <div className='grid__item three-quarters'>
             {colours}
           </div>
           <div className='grid__item one-quarter'>
             <div className='swatch--composite'>
               <Swatch size='large' show_label='true' val={this.state.composite}/>
              </div>
           </div>
         </div>
      </div>
    );
  },

  add: function(){
    ColourActions.add()
  },

  reset: function(){
    ColourActions.reset()
  }

});

module.exports = ColourApp;

