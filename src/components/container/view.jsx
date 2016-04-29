var React = require('react');
var css = require("components/container/container.styl");

var container = React.createClass({

  render: function() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }

});

module.exports = container;

var Main = React.createClass({

  render: function() {
    return (
      <div className="main"></div>
    );
  }

});

module.exports = Main;

var Wrap = React.createClass({

  render: function() {
    return (
      <div className="wrap"></div>
    );
  }

});

module.exports = Wrap;

var Header = React.createClass({

  render: function() {
    return (
      <header id="header">
        <div id="logo"><a href="../index.html"></a></div>
      </header>
    );
  }

});

module.exports = Header;

