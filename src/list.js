import React, { Component } from "react";

class List extends Component {
constructor(props){
	super(props);
this.state={
	items:[]
};
	this.addItem=this.addItem.bind(this);

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
	render(){
		return(

			<div className="listMain">
			<div className="header">
			<form onSubmit={this.addItem}>
			<input placeholder="enter what to do" ref={(a) => this._inputElement = a}>
			</input>
			<button type="submit">get it in</button>
			</form>
			</div>
			</div>


			);
	}
}

export default List;