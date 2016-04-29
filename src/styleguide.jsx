var React = require("react");
var ReactDOM = require('react-dom');

// Base CSS
var CSS = require("assets/css/base.styl");


var Sidebar = React.createClass({
  render: function() {
    return (
      <div className="_navigation">
				<div className="-nav-bar"></div>
				<div className="_nav-setting">setting</div>
			</div>
    );
  }
});

var MainContainer = React.createClass({
  render: function() {
    return (
      <div id="page" className="_page">
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="_app-container">
        <Sidebar/>
        <MainContainer />
      </div>
    );
  }
});

var AppLayoutFixed = React.createClass({
  render: function() {
    return (
      <div className="body layout-fixed">
      	<App/>
      </div>
    );
  }
});

ReactDOM.render(<AppLayoutFixed />,document.body);
