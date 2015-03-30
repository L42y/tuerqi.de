'use strict';

let React = require('react');
let {Link} = require('react-router');

let homeStyle = {
  height: '100%',
  margin: 0,
  background: 'url(/_/taksim.jpg) 50% fixed no-repeat',
  backgroundSize: 'cover'
};

let copyrightStyle = {
  color: 'white',
  right: 10,
  bottom: 10,
  position: 'fixed'
};

let aboutStyle = {
  left: 10,
  bottom: 10,
  position: 'fixed'
};

let Copyright = React.createClass({
  render() {
    return (
      <div style={copyrightStyle}>
        <span>Picture by </span>
        <a href="http://photo.gabrielgm.ch">Gabriel Garcia Marengo</a>
      </div>
    );
  }
});

let Home = React.createClass({
  render() {
    return (
      <div style={homeStyle}>
        <Link to="about" style={aboutStyle}>About</Link>
        <Copyright/>
      </div>
    );
  }
});

module.exports = Home;
