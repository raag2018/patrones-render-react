//import logo from './logo.svg';
import React from 'react';
/*import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import './App.css';
import { TodoList } from '../TodoList/TodoList';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoItem } from '../TodoItem/TodoItem';
/*const defaultTodos = [
	{text: "Comida 1", complete: false},
	{text: "Comida 2", complete: true},
	{text: "Comida 3", complete: false},
	{text: "Comida 4", complete: false},
  ];

 loading={loading}
      error={error}
      totalTodos={totalTodos} 
      completeTodos={completeTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchTodo = {searchTodo}
      completedTodo = {completedTodo}
      deleteTodo = {deleteTodo}*/
function App(){
  const [state, setState] = React.useState('estado compartido');
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter></TodoCounter>
        <TodoSearch></TodoSearch>
      </TodoHeader>
      <TodoList>
        <TodoItem state={state}/>
      </TodoList>
    </React.Fragment>
  );
}
function TodoHeader({children}){
  return (
    <header>{children}</header>
  );
}
function TodoList({children}){
  return (
    <section className='mt-4 p-5 bg-primary text-white rounded'>
      {children}
    </section>
  );
}
function TodoCounter(){
  return (
    <p>TodoCounter</p>
  );
}
function TodoSearch(){
  return (
    <p>TodoSearch</p>
  );
}
function TodoItem({state}){
  return (
    <p>TodoItem {state}</p>
  );
}

      /*
function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  );
}
*/
export default App;
