var React         = require("react"),
    ReactRouter   = require('react-router'),
    Router        = ReactRouter.Router,
    Link          = ReactRouter.Link;

var css = require("components/side/side.styl");

var side = React.createClass({

  render: function() {
    return (
      <aside className="side">
        <nav className="side-nav nav">
          <ul>
            <li><Link to="/color" className="btn">Colors</Link></li>
            <li><Link to="/typography" className="btn">Typography</Link></li>
            <li><Link to="/forms" className="btn">Forms</Link></li>
            <li><Link to="/buttons" className="btn">Buttons</Link></li>
            {/* toDo
            <li><Link to="/grid" className="btn">Grid</Link></li>
            <li><Link to="/layout" className="btn">Layout</Link></li>
            <li><Link to="/blocks" className="btn">Blocks</Link></li>
            <li><Link to="/tables" className="btn">Tables</Link></li>
            <li><Link to="/navigation" className="btn">Navigation</Link></li>
            <li><Link to="/icon" className="btn">Icons</Link></li>
            <li><Link to="/helpers" className="btn">Helpers</Link></li>
            <li><Link to="/mixins" className="btn">Mixins</Link></li>
            */}
          </ul>
        </nav>
      </aside>
    );
  }
});

module.exports = side;
