import React from 'react';
import "./TodoList.css";
function TodoList(props){
	const renderFunc = props.children || props.render;
	return (
			<section className='container'>
				{props.error && props.onError()}
				{props.loading && props.onLoading()}
				{(!props.loading &&  !props.totalTodos) && props.onEmpty()}
				{(!!props.totalTodos && !props.searchTodo.lenght && !!props.searchText) && props.onEmptySearchResults(props.searchText)}
				{
					(!props.loading && !props.error) &&
					props.searchTodo.map(renderFunc)
				}
				<ul>
					{props.children}
				</ul>
			</section>
		);
}
export {TodoList};