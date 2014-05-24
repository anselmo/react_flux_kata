/**
* @jsx React.DOM
*/

var React = require('react');
var ColourApp = require('./components/colour_app.react');
// 
React.renderComponent(
  <ColourApp title='MIXER'/>, document.getElementById('js-container')
);

// JSX (optional)
// React components implement a render() that returns what to display
// var HelloMessage = React.createClass({
//   render: function() {
//       return <span>Hello {this.props.name}</span>;
//     }
// });
// React.renderComponent(<HelloMessage name="John" />,  document.getElementById('js-container'));

// JS (Compiled)
// var HelloMessage = React.createClass({displayName: 'HelloMessage',
//   render: function() {
//       return React.DOM.div(null, "Hello ", this.props.name);
//     }
// });
// 
// React.renderComponent(HelloMessage( {name:"John"} ), document.getElementById('js-container'));
