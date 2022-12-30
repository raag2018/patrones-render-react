import React from 'react';
import "./TodoCounter.css";
//import { TodoContext } from '../TodoContext';
function TodoCounter({totalTodos, completeTodos}){
	return (
			<div className='container'>
				<h2 className='todoCounter'>
					Has completado {completeTodos} de {totalTodos} TODOs
				</h2>
			</div>
			
		);
}
export {TodoCounter};