import React, { Component } from 'react';

class TodoList extends Component 
{
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
  //udating
  updateInput(key,value){
    this.setState({
      [key]:value
    }); 
  }
  //adding
  addItem(){
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    const list = [...this.state.list];

    list.push(newItem);
    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    });
  }
  //rendering
  render(){
    return(
     <div className="TodoList">
        <div>
        Add an Itme...
        <br/>
        <input
        type="text"
        placeholder="Type Item Here..."
        value={this.state.newItem}
        onChange={e => this.updateInput("newItem", e.target.value)}
        />
        <button
        onClick={() => this.addItem()}
        >
        Add
        </button>
        </div>
        </div>
     );
  }
}
export default TodoList;