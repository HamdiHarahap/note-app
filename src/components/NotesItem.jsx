/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'
import NotesItemBody from './NotesItemBody'

function NotesItem({
	title,
	createdAt,
	body,
	onDelete,
	onArchive,
	id,
	archived,
}) {
	return (
		<div className="notes-container">
			<div className="notes-item">
				<NotesItemBody title={title} createdAt={createdAt} body={body} />
			</div>
			<div className="btn-container">
				<Button
					text="Delete"
					width="100%"
					borderRadius="0 0 0 10px"
					color="#D91656"
					id={id}
					onDelete={() => onDelete(id)}
				/>
				<Button
					text={archived ? 'Unarchive' : 'Archive'}
					width="100%"
					borderRadius="0 0 10px 0"
					color="#FABC3F"
					onArchive={() => onArchive(id)}
				/>
			</div>
		</div>
	)
}

export default NotesItem
