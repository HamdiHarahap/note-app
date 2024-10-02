/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Button({
	text,
	width,
	borderRadius,
	color,
	type,
	onDelete,
	onArchive,
}) {
	return (
		<button
			type={type}
			onClick={onDelete || onArchive}
			style={{
				background: 'transparent',
				width,
				outline: 'none',
				cursor: 'pointer',
				border: '2px solid black',
				borderRadius,
				color,
				fontWeight: '600',
				textAlign: 'center',
				padding: '0.7rem',
			}}
		>
			{text}
		</button>
	)
}

export default Button
