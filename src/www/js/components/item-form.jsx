"use strict";

const
	React = require("react");
	
module.exports = React.createClass({
	
	getInitialState: function() {
		return {
			newItem: ""
		};
	},
	
	onChange: function(e) {
		this.setState({
			newItem: e.target.value
		});
	},
	
	addItem: function(e) {
		this.props.addItem(this.state.newItem);
		this.setState({
			newItem: ""
		});
	},
	
	render: function() {
		return <form>
			<label htmlFor="new-item">New Item:</label>
			<input id="new-item" value={this.state.newItem} onChange={this.onChange} />
			<button type="button" onClick={this.addItem}>Add Item</button>
		</form>;
	}
	
});