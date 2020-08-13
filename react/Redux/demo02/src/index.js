import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import store from './store'

const App = ( // Provider里面的组件都能用store了
  <Provider store={store}>
    <TodoList />
  </Provider>
);

ReactDOM.render(
  App,
  document.getElementById('root')
);

