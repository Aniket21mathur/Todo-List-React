import React, { Component } from "react";
import Todo from "./Todo";
import "./List.css";

class List extends Component {
constructor(props){
	super(props);
this.state={
	items:[]
};
	this.addItem=this.addItem.bind(this);
	this.deleteItem=this.deleteItem.bind(this);

}



addItem(e) {
	if(this._inputElement.value!==""){

		var newItem={
			text:this._inputElement.value,
			key:Date.now()
		};

		this.setState((prevState) =>{
			return {
				items:prevState.items.concat(newItem)
			};
		});
		this._inputElement.value="";
	}
	console.log(this.state.items);
	e.preventDefault();
}

deleteItem(key){
	var filteredItems=this.state.items.filter(function(item){
		return (item.key!=key);
	});
	this.setState({
		items:filteredItems
	});
}
	render(){
		return(

			<div className="listMain">
			<div className="heading">Todo list</div>
			<div className="header">
			<form onSubmit={this.addItem}>
			<input placeholder="enter what to do" ref={(a) => this._inputElement = a}>
			</input>
			<button type="submit">IN</button>
			</form>
			</div>
			<Todo entries={this.state.items} delete={this.deleteItem}/>
			</div>


			);
	}
}

export default List;