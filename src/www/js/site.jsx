"use strict";

const
  React = require("react"),
	ReactDOM = require("react-dom");
	
let
	ItemList = React.createClass({

		render: function() {
			
			let items = this.props.items.map(function(item) {
				return <li>{item}</li>;
			});
			
			return <div>
				<h1>{this.props.header}</h1>
				<ul>
					{items}
				</ul>
			</div>;
		}
		
	});

let items = [
	"Item 1", "Item 2", "Item 3"
];
	
ReactDOM.render(<ItemList header='Item List' items={items} />,
	document.querySelector("[class='container']"));