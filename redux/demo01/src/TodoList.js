import React, { Component } from "react";
import store from './store'; // 可以直接这么简写，因为node默认回去store文件下面找index.js文件
import { getMyListAction, getTodoList, changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store)
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }
  componentDidMount() {
    // thunk中间件写法
    // const action = getTodoList();
    // store.dispatch(action) // store使用了thunk后，action是函数了
    // saga中间件写法
    const action = getMyListAction();
    store.dispatch(action)
  }
  render() {
    return (
      <TodoListUI
        inputValue = {this.state.inputValue}
        changeInputValue = {this.changeInputValue}
        inputValue = {this.state.inputValue}
        clickBtn = {this.clickBtn}
        list = {this.state.list}
        deleteItem = {this.deleteItem}
      />
    );
  }
  changeInputValue(e) {
    console.log(e.target.value)
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
  clickBtn() {
    const action = addItemAction();
    store.dispatch(action)
  }
  deleteItem(index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;
