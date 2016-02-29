"use strict";

const
  React = require("react");

module.exports = React.createClass({
	render: function() {
		return <li>{this.props.children}</li>;
	}
});