"use strict";

const
  React = require("react"),
	ReactDOM = require("react-dom");
	
let
	HelloWorld = React.createClass({

		render: function() {
			return React.createElement("h1", null, "Hello World!");
		}
		
	});
	
ReactDOM.render(React.createElement(HelloWorld),
	document.querySelector("[class='container']"));