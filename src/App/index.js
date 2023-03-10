//import logo from './logo.svg';
import React from "react";
import "./App.css";
import { useTodos } from "./useTodos";
import { TodoList } from "../TodoList/TodoList";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoEmpty } from "../TodoEmpty";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { TodoHeader } from "../TodoHeader";
import { ChangeAlert } from "../ChangeAlert";
/*  const defaultTodos = [
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

function App() {
    const {
        error,
        loading,
        searchTodo,
        completedTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completeTodos,
        searchValue,
        setSearchValue,
        addTodo,
        sincronizeTodos,
    } = useTodos();
    return (
     <React.Fragment>
        <TodoHeader loading={loading}>
            <TodoCounter 
                totalTodos={totalTodos}
                completeTodos={completeTodos}
            /> 
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            /> 
        </TodoHeader>
       
        <TodoList
            error={error}
            loading={loading}
            searchTodo={searchTodo}
            totalTodos={totalTodos}
            searchText={searchValue}
            onError = {() => <TodoError/>}
            onLoading = {() => <TodoLoading/>}
            onEmpty = {() => <TodoEmpty/>}
            onEmptySearchResults = {(searchText) => <div className="alert alert-warning">Buscando TODOs con el texto: <span className='fw-bold'> {searchText}</span></div>}
            render={todo => (
                <TodoItem text={todo.text}
                        completed={todo.complete}
                        onComplete={() => completedTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        key={todo.text}
                />
            )}
        > 
            {/*todo => (
                <TodoItem text={todo.text}
                        completed={todo.complete}
                        onComplete={() => completedTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        key={todo.text}
                />
            )*/}
        </TodoList>
         {/*
        <TodoList> 
           
            {error && < TodoLoading />} 
            {loading && < TodoError />} 
            {!loading && !searchTodo.lenght === 0 && <TodoEmpty/>} 
            {
                searchTodo.map((todo) => (
                    <TodoItem text={todo.text}
                        completed={todo.complete}
                        onComplete={() => completedTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        key={todo.text}
                    />
                ))
            } 
            </TodoList> 
            */}
            <ChangeAlert
                sincronize={sincronizeTodos}
            />
            <CreateTodoButton setOpenModal={setOpenModal}/> 
            {!!openModal && (
                <Modal>
                <TodoForm addTodo={addTodo}
                    setOpenModal={setOpenModal}
                /> 
                </Modal>
            )
        } 
        </React.Fragment>
    );
}

export default App;