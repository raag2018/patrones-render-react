import React from 'react';
import "./TodoSearch.css";
function TodoSearch({searchValue, setSearchValue}){
	const onSearchValueChange = (event) =>{
		let data = event.target.value;
		// 	console.log(data);
		setSearchValue(data);
	}
	return (
			<div className='container mb-5'>
				<input 
					placeholder='Comida'
					className='todoSearch form-control'
					value={searchValue}
					onChange={onSearchValueChange}
				/>
			</div>
			
			)
			;
}
export {TodoSearch};