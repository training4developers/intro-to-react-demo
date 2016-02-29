"use strict";

const
  React = require("react"),
	Item = require("./item"),
	ItemForm = require("./item-form");
	
module.exports = React.createClass({

	getInitialState: function() {
		return {
			items: this.props.items
		};
	},
	
	addItem: function(newItem) {
		let items = this.state.items;
		items.push(newItem);
		this.setState({
			items: items
		});
	},

	render: function() {
		return <div>
			<h1>{this.props.header}</h1>
			<ul>
				{this.state.items.map(function(item) {
					return <Item>{item}</Item>;
				})}
			</ul>
			<ItemForm addItem={this.addItem} />
		</div>;
	}
	
});
