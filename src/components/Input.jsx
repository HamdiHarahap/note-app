/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Input = ({ text, width, height, value, onChange }) => {
	return (
		<input
			type="text"
			placeholder={text}
			style={{
				width,
				height,
				borderRadius: '10px',
				background: 'transparent',
				padding: '1rem',
				border: '2px solic',
				outline: 'none',
			}}
			value={value}
			onChange={onChange}
		/>
	)
}

export default Input
