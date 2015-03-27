'use strict';

let React = require('react');

let Layout = React.createClass({
  getDefaultProps() {
    return {
      bodyStyle: {
        margin: 0
      }
    };
  },
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <meta name="viewport"
                content="width=device-width, initial-scale=1"/>
          <title>土耳其的</title>
        </head>

        <body style={this.props.bodyStyle}>
          {this.props.children}
        </body>
      </html>
    );
  }
});

module.exports = Layout;
