import React from 'react'
import NotesList from './NotesList'
import NotesInput from './NotesInput'
import Navbar from './Navbar' // Pastikan Navbar diimport
import { getInitialData } from '../../utils'

class NotesApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			notes: getInitialData(),
			searchKeyword: '', // Tambahkan state untuk kata kunci pencarian
		}

		this.onDeleteHandler = this.onDeleteHandler.bind(this)
		this.onAddHandler = this.onAddHandler.bind(this)
		this.onArchiveHandler = this.onArchiveHandler.bind(this)
		this.onSearchChange = this.onSearchChange.bind(this) // Binding function
	}

	onDeleteHandler(id) {
		const notes = this.state.notes.filter((note) => note.id !== id)
		this.setState({ notes })
	}

	onAddHandler({ title, body }) {
		this.setState((prevState) => {
			return {
				notes: [
					...prevState.notes,
					{
						id: Date.now(),
						title,
						body,
						createdAt: new Date().toISOString(),
						archived: false,
					},
				],
			}
		})
	}

	onArchiveHandler(id) {
		const notes = this.state.notes.map((note) => {
			if (note.id === id) {
				return { ...note, archived: !note.archived }
			}
			return note
		})
		this.setState({ notes })
	}

	onSearchChange(keyword) {
		this.setState({ searchKeyword: keyword }) // Update state untuk kata kunci pencarian
	}

	render() {
		const { notes, searchKeyword } = this.state

		// Filter catatan berdasarkan kata kunci pencarian
		const filteredNotes = notes.filter((note) =>
			note.title.toLowerCase().includes(searchKeyword.toLowerCase())
		)
		const activeNotes = filteredNotes.filter((note) => !note.archived)
		const archivedNotes = filteredNotes.filter((note) => note.archived)

		return (
			<div className="notes-app">
				<Navbar onSearchChange={this.onSearchChange} />
				<hr />
				<NotesInput addNote={this.onAddHandler} />
				<h1 style={{ margin: '1rem 0 1.5rem', fontWeight: '600' }}>
					Active Notes
				</h1>
				{activeNotes.length === 0 ? (
					<h3 style={{ fontWeight: '600' }}>No active notes available.</h3>
				) : (
					<NotesList
						notes={activeNotes}
						onDelete={this.onDeleteHandler}
						onArchive={this.onArchiveHandler}
					/>
				)}

				<h1 style={{ margin: '2rem 0 1.5rem', fontWeight: '600' }}>
					Archived Notes
				</h1>
				{archivedNotes.length === 0 ? (
					<h3 style={{ fontWeight: '600' }}>No archived notes available.</h3>
				) : (
					<NotesList
						notes={archivedNotes}
						onDelete={this.onDeleteHandler}
						onArchive={this.onArchiveHandler}
					/>
				)}
			</div>
		)
	}
}

export default NotesApp
