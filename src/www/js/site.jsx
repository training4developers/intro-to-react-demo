"use strict";

const
  React = require("react"),
	ReactDOM = require("react-dom");
	
let
	HelloWorld = React.createClass({

		render: function() {
			return <h1>Hello World!!</h1>;
		}
		
	});
	
ReactDOM.render(<HelloWorld />,
	document.querySelector("[class='container']"));