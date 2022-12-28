import React from 'react';
import "./TodoCounter.css";
//import { TodoContext } from '../TodoContext';
function TodoCounter({totalTodos, completeTodos}){
	return (
			<h2 className='todoCounter'>Has completado {completeTodos} de {totalTodos} TODOs</h2>
		);
}
export {TodoCounter};