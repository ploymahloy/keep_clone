import { ChangeEvent, useState } from 'react';

import Note from './components/Note.jsx';
import styles from './styles/App.module.scss';
import keep from './assets/keep.png';

const DUMMY_NOTES = [
	{
		id: 856,
		title: 'Note Title 1',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		id: 107,
		title: 'Note Title 2',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		id: 952,
		title: 'Note Title 3',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		id: 2421,
		title: 'Note Title 4',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio harum praesentium mollitia animi veritatis aut perspiciatis voluptate quod nostrum minima distinctio repellat asperiores impedit saepe deserunt quia doloribus sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
	},
	{
		id: 6289,
		title: 'Note Title 5',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum et exercitationem rerum eligendi reprehenderit adipisci corporis. Ea fugiat voluptatibus ad suscipit eius.',
	},
	{
		id: 5421,
		title: 'Note Title 6',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio harum praesentium mollitia animi veritatis aut perspiciatis voluptate quod nostrum minima distinctio repellat asperiores impedit saepe deserunt quia doloribus sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio harum praesentium mollitia animi veritatis aut perspiciatis voluptate quod nostrum minima distinctio repellat asperiores impedit saepe deserunt quia doloribus sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio harum praesentium mollitia animi veritatis aut perspiciatis voluptate quod nostrum minima distinctio repellat asperiores impedit saepe deserunt quia doloribus sed.',
	},
	{
		id: 629,
		title: 'Note Title 7',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
	{
		id: 113,
		title: 'Note Title 8',
		body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur distinctio odit facere molestiae neque vero harum minus qui voluptatem. Enim, modi excepturi? Adipisci assumenda nisi provident consequuntur officia praesentium magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio harum praesentium mollitia animi veritatis aut perspiciatis voluptate quod nostrum minima distinctio repellat asperiores impedit saepe deserunt quia doloribus sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio harum praesentium mollitia animi veritatis aut perspiciatis voluptate quod nostrum minima distinctio repellat asperiores impedit saepe deserunt quia doloribus sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio harum praesentium mollitia animi veritatis aut perspiciatis voluptate quod nostrum minima distinctio repellat asperiores impedit saepe deserunt quia doloribus sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio harum praesentium mollitia animi veritatis aut perspiciatis voluptate quod nostrum minima distinctio repellat asperiores impedit saepe deserunt quia doloribus sed.',
	},
];

function App() {
	const [notes, setNotes] = useState(DUMMY_NOTES);
	const [isOpen, setIsOpen] = useState(false);
	const [body, setBody] = useState('');
	const [title, setTitle] = useState('');

	const handleNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleNewBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setBody(e.target.value);
	};

	const handleFormSubmit = (e: any) => {
		e.preventDefault();

		const newNote = {
			id: Math.round(Math.random() * 10000),
			title: title,
			body: body,
		};

		if (title && body) {
			setNotes((DUMMY_NOTES) => {
				return [newNote, ...DUMMY_NOTES];
			});

			setTitle('');
			setBody('');
		}
	};

	const formKeyPressHandler = (e: any) => {
		if (e.key === 'Enter') {
			handleFormSubmit(e);
		} else return;
	};

	const deleteNote = (id: any) => {
		setNotes(notes.filter((note) => note.id !== id));
	};

	return (
		<div className={styles.App}>
			<div className={styles.brand}>
				<img className={styles.brand_icon} src={keep} alt="" />
				{'Persist'}
			</div>
			<main className={styles.main}>
				<form className={styles.form} onBlur={handleFormSubmit}>
					<input
						className={styles.form_title}
						placeholder="Title"
						tabIndex={1}
						onChange={handleNewTitle}
						onKeyPress={formKeyPressHandler}
						value={title}
					/>
					<textarea
						className={styles.form_body}
						placeholder="Take a note..."
						tabIndex={0}
						onChange={handleNewBody}
						onKeyPress={formKeyPressHandler}
						value={body}
					/>
				</form>
				<section className={styles.notes}>
					{notes.map((note, key) => {
						return (
							<Note
								key={key}
								id={note.id}
								title={note.title}
								body={note.body}
								deleteNote={deleteNote}
								onClose={() => setIsOpen(false)}
							/>
						);
					})}
				</section>
			</main>
		</div>
	);
}

export default App;
