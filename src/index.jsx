var React          = require('react'),
    ReactDOM       = require('react-dom'),
    ReactRouter    = require('react-router'),
    Router         = ReactRouter.Router,
    Route          = ReactRouter.Route,
    DefaultRoute   = ReactRouter.DefaultRoute,
    RouteHandler   = ReactRouter.RouteHandler,
    NotFoundRoute  = ReactRouter.NotFoundRoute,
    Redirect       = ReactRouter.Redirect,
    browserHistory = ReactRouter.browserHistory,
    IndexRoute     = ReactRouter.IndexRoute,
    Link           = ReactRouter.Link;
// Base CSS
var CSS = require('assets/css/base.styl');

// Components
var Side         = require('components/side'),
    Section      = require('components/section'),
    Container    = require('components/container'),
    Main         = require('components/container'),
    Header       = require('components/container'),
    Wrap         = require('components/container'),
    Typography   = require('components/typography'),
    ColorPalette = require('components/colorPalette/view.jsx'),
    Form         = require('components/form'),
    Input        = require('components/input'),
    Button       = require('components/button');

var btnjs = require('components/button/button.js');

var Index = React.createClass({
  componentDidMount(){
    require('components/button/button.js')();
  },
  render: function() {
    return (
      <div>
        <div className="wrap">
          <Header />
        </div>
        <div className="wrap">
          <Side />
          <div id="area" className="area">
            <Section>
              {this.props.children}
            </Section>
          </div>
        </div>
      </div>
    );
  }
});


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={ColorPalette} />
      <Route path="/color" component={ColorPalette} />
      <Route path="/typography" component={Typography} />
      <Route path="/forms" component={Form} />
      <Route path="/buttons" component={Button} />
    </Route>
  </Router>
), document.getElementById('app'));
