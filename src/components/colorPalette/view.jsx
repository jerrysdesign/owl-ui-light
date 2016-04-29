var React = require('react');
var css = require("components/colorPalette/colorPalette.styl");

var colors = {
  'Primary color'       : {
    'light'       : {
      'VARIABLES' : '$colorPrimaryLight',
      'HEX'       : '#CAB6F2',
      'RGB'       : 'rgb(202, 182, 242)',
      'CLASS'     : 'color--primary-light'
    },
    'normal'      : {
      'VARIABLES' : '$colorPrimary',
      'HEX'       : '#8962D9',
      'RGB'       : 'rgb(137, 98, 217)',
      'CLASS'     : 'color--primary'
    },
    'dark'        : {
      'VARIABLES' : '$colorPrimaryDark',
      'HEX'       : '#6B5499',
      'RGB'       : 'rgb(107, 84, 153)',
      'CLASS'     : 'color--primary-dark'
    }
  },
  'Secondary color'     : {
    'red'         : {
      'VARIABLES' : '$colorRed',
      'HEX'       : '#E6175C',
      'RGB'       : 'rgb(230, 23, 92)',
      'CLASS'     : 'color--secondary-red'
    },
    'orange'      : {
      'VARIABLES' : '$colorOrange',
      'HEX'       : '#F27F0C',
      'RGB'       : 'rgb(242, 127, 12)',
      'CLASS'     : 'color--secondary-orange'
    },
    'Blue'        : {
      'VARIABLES' : '$colorBlue',
      'HEX'       : '#1677D9',
      'RGB'       : 'rgb(22, 119, 217)',
      'CLASS'     : 'color--secondary-blue'
    },
    'Green'       : {
      'VARIABLES' : '$colorGreen',
      'HEX'       : '#B9E617',
      'RGB'       : 'rgb(185, 230, 23)',
      'CLASS'     : 'color--secondary-green'
    }
  },
  'gray color'          : {
    'lightest'    : {
      'VARIABLES' : '$colorGrayLightest',
      'HEX'       : '#F2F6F7',
      'RGB'       : 'rgb(242, 246, 247)',
      'CLASS'     : 'color--gray-lightest'
    },
    'lighter'     : {
      'VARIABLES' : '$colorGrayLighter',
      'HEX'       : '#DFE4E6',
      'RGB'       : 'rgb(223, 228, 230)',
      'CLASS'     : 'color--gray-lighter'
    },
    'light'       : {
      'VARIABLES' : '$colorGrayLight',
      'HEX'       : '#B8BDBF',
      'RGB'       : 'rgb(184, 189, 191)',
      'CLASS'     : 'color--gray-light'
    },
    'normal'        : {
      'VARIABLES' : '$colorGray',
      'HEX'       : '#919799',
      'RGB'       : 'rgb(145, 151, 153)',
      'CLASS'     : 'color--gray'
    },
    'dark'        : {
      'VARIABLES' : '$colorGrayDark',
      'HEX'       : '#6C7173',
      'RGB'       : 'rgb(108, 113, 115)',
      'CLASS'     : 'color--gray-dark'
    },
    'darker'      : {
      'VARIABLES' : '$colorGrayDarker',
      'HEX'       : '#3B3F40',
      'RGB'       : 'rgb(59, 63, 64)',
      'CLASS'     : 'color--gray-darker'
    }
  }
}

var ColorPaletteList = React.createClass({

  render: function () {
    var ColorPaletteItem = this.props.ColorPaletteItem;

    var Palette = Object.keys(this.props.ColorPaletteItem).map(function(item, index) {
      var className ='color-palette__color ' + ColorPaletteItem[item]['CLASS'];
      return (
        <div className={className} key={index}>
          <dl>
            <dt>VARIABLES</dt><dd>{ColorPaletteItem[item]['VARIABLES']}</dd>
            <dt>CLASS</dt><dd>.{ColorPaletteItem[item]['CLASS']}</dd>
            <dt>HEX</dt><dd>{ColorPaletteItem[item]['HEX']}</dd>
            <dt>RGB</dt><dd>{ColorPaletteItem[item]['RGB']}</dd>
          </dl>
        </div>
      );
    });

    return (
      <div>
        {Palette}
      </div>
    );
  }
});

var ColorPaletteGroup = React.createClass({

  render: function () {
    var title = Object.keys(colors).map(function(color, index) {
      return (
        <div className="color-palette_group" key={index}>
          <h3 key={index}>{color}</h3>
          <ColorPaletteList ColorPaletteItem={colors[color]} />
        </div>
      );
    });
    return (
      <div>
        {title}
      </div>
    );
  }
});

var ColorPalette = React.createClass({

  render: function() {
    return (
      <div className="color-palette">
        <h2 className="heading">Color Palette</h2>
        <ColorPaletteGroup />
      </div>
    );
  }
});

module.exports = ColorPalette;
