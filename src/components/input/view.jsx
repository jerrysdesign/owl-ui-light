var React = require('react');

var Input = React.createClass({

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  componentWillReceiveProps: function(props) {
    this.setState({
      value: props.value
    });
  },

  render: function() {
    return (
      <input value={this.state.value} placeholder={this.props.placeholder} onChange={this._change} />
    );
  },

  _change: function(e) {
    this.setState({
      value: e.target.value
    });
  }

});

module.exports = Input;
