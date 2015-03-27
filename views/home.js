'use strict';

let React = require('react');
let Layout = require('./layouts');

let bodyStyle = {
  margin: 0,
  background: 'url(/_/taksim.jpg) fixed no-repeat',
  backgroundSize: 'cover'
};

let copyrightStyle = {
  color: 'white',
  right: 10,
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
      <Layout bodyStyle={bodyStyle}>
        <Copyright/>
      </Layout>
    );
  }
});

module.exports = Home;
