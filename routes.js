'use strict';

let React = require('react');
let Router = require('react-router');
let {Route, RouteHandler, DefaultRoute} = Router;

let App = React.createClass({
  render() {
    return (
      <RouteHandler/>
    );
  }
});
let Home = require('./views/home');
let About = React.createClass({
  render() {
    return (
      <div>Oops, nothing here.</div>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Home}/>
    <Route name="about" path="/about" handler={About}/>
  </Route>
);

module.exports = routes;
