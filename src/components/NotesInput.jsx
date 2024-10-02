/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Button from './Button'
import Input from './Input'

class NotesInput extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			body: '',
		}

		this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
		this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
	}

	onTitleChangeEventHandler(e) {
		const title = e.target.value
		if (title.length <= 50) {
			this.setState(() => ({
				title,
			}))
		}
	}

	onBodyChangeEventHandler(e) {
		this.setState(() => {
			return {
				body: e.target.value,
			}
		})
	}

	onSubmitEventHandler(e) {
		e.preventDefault()

		const newNote = {
			title: this.state.title,
			body: this.state.body,
		}

		this.props.addNote(newNote)

		this.setState({ title: '', body: '' }, () => {
			console.log('Title:', this.state.title)
			console.log('Body:', this.state.body)
		})
	}

	render() {
		const remainingCharacters = 50 - this.state.title.length

		return (
			<div className="add-container">
				<h2>Add Notes</h2>
				<form action="" onSubmit={this.onSubmitEventHandler}>
					<p style={{ color: remainingCharacters == 0 ? 'red' : 'black' }}>
						{remainingCharacters} characters remaining
					</p>
					<Input
						text="Title..."
						width="380px"
						height="40px"
						value={this.state.title}
						onChange={this.onTitleChangeEventHandler}
					/>

					<textarea
						placeholder="Write your notes..."
						style={{
							width: '380px',
							height: '200px',
							border: '2px solid',
							borderRadius: '10px',
							padding: '1rem',
							backgroundColor: 'transparent',
						}}
						value={this.state.body}
						onChange={this.onBodyChangeEventHandler}
					></textarea>
					<Button type="submit" text="Add" width="380px" borderRadius="10px" />
				</form>
			</div>
		)
	}
}

export default NotesInput
