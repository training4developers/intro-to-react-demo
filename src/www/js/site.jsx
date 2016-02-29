"use strict";

const
  React = require("react"),
	ReactDOM = require("react-dom");
	
let
	Item = React.createClass({
		render: function() {
			return <li>{this.props.children}</li>;
		}
	}),
	ItemList = React.createClass({

		getInitialState: function() {
			return {
				items: this.props.items
			};
		},

		render: function() {
			
			setTimeout(function() {
				let items = this.state.items;
				items.push("Item 4");
				this.setState({
					items: items
				});
			}.bind(this), 2000);
			
			return <div>
				<h1>{this.props.header}</h1>
				<ul>
					{this.state.items.map(function(item) {
						return <Item>{item}</Item>;
					})}
				</ul>
			</div>;
		}
		
	});

let items = [
	"Item 1", "Item 2", "Item 3"
];
	
ReactDOM.render(<ItemList header='Item List' items={items} />,
	document.querySelector("[class='container']"));