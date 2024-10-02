/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { showFormattedDate } from '../../utils'

function NotesItemBody({ title, createdAt, body }) {
	return (
		<div className="notes-body">
			<h3 className="card-item__title">{title}</h3>
			<span className="card-item__date">{showFormattedDate(createdAt)}</span>
			<p className="card-item__text">{body}</p>
		</div>
	)
}

export default NotesItemBody
