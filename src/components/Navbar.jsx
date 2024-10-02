/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Input from './Input'

function Navbar({ onSearchChange }) {
	const handleSearchChange = (e) => {
		onSearchChange(e.target.value)
	}

	return (
		<div className="navbar">
			<h1 style={{ fontWeight: '600' }}>Notes App</h1>
			<Input
				text="Search..."
				width="320px"
				onChange={handleSearchChange} // Tambahkan prop onChange
			/>
		</div>
	)
}

export default Navbar
