import React from 'react';
/* [TODO FORM] */
var TodoForm = React.createClass({
	getInitialState: function() {
		return {item: ''};
	},
	handleSubmit: function(e){
		e.preventDefault();
		this.props.onFormSubmit(this.state.item);
		this.setState({item: ''});
		return;
	},
	onChange: function(e){
		this.setState({
			item: e.target.value
		});
	},
	render: function(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' ref='item' onChange={this.onChange} value={this.state.item}/>
				<input type='submit' value='Add'/>
			</form>
		);
	}
});

export default TodoForm;