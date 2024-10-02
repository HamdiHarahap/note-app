/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import NotesItem from './NotesItem'

function NotesList({ notes, onDelete, onArchive }) {
	return (
		<div className="notes-list">
			{notes.map((note) => (
				<NotesItem
					key={note.id}
					{...note}
					onDelete={onDelete}
					onArchive={onArchive}
				/>
			))}
		</div>
	)
}

export default NotesList
