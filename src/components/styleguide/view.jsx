
var React = require('react');
// var joinClasses = require("react/lib/joinClasses");

var css = require("assets/css/components/styleGuideLayout.styl");


var StyleGuide = React.createClass({
  click: function() {
    var i = 0,
    elements = document.getElementsByClassName('content'),
    len = elements.length,
    classToggle = function( element, tclass ) {

      var classes = elements[i].className,
      pattern = new RegExp( tclass );
      hasClass = pattern.test( classes );

      classes = hasClass ? classes.replace( pattern, '' ) : classes + ' ' + tclass;
      elements[i].className = classes.trim();
    };

    for ( ; i < len; i++ ) {
      classToggle( elements[i], 'layout-slide' );
    }

  },
  render: function() {
    return (
      <div className='layout-fixed'>
        <div className='sidebar'>
          <div className='title'>
            GuideLines
          </div>
          <ul className='nav'>
            <li><a>Introduction</a></li>
            <li>
              <a className='active'>UI Components</a>
              <ul>
                <li><a className='active'>Grid System</a></li>
                <li><a>Typography</a></li>
                <li><a>Buttons</a></li>
                <li><a>Color Palette</a></li>
                <li><a>Forms</a></li>
                <li><a>Navigation</a></li>
                <li><a>Lists</a></li>
                <li><a>Modals</a></li>
                <li><a>Icons</a></li>
                <li><a>Helper Classes</a></li>
              </ul>
            </li>
            <li><a>CSS Utility</a></li>
            <li><a>Resources</a></li>
          </ul>
          </div>
        <div className='content layout-slide'>
          <a className='button' onClick={this.click}></a>
          <div className='component-header'>
            <h1>UI Components</h1>
            <h2>Typography</h2>
          </div>
        </div>
      </div>
    );
  },

});

module.exports = StyleGuide;
