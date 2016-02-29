"use strict";

const
  React = require("react"),
	ReactDOM = require("react-dom"),
	ItemList = require("./components/item-list");
	
let items = [
	"Item 1", "Item 2", "Item 3"
];
	
ReactDOM.render(<ItemList header='Item List' items={items} />,
	document.querySelector("[class='container']"));