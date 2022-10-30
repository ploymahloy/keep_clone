import { ChangeEvent, useState } from 'react';

import Note from './components/Note.jsx';
import styles from './styles/App.module.scss';
import keep from './assets/keep.png';

const DUMMY_NOTES = [
	{
		id: 952,
		title: 'Note Title 1',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore, recusandae perferendis ab tenetur ducimus ea maiores! Consectetur ipsam harum, officiis eius quisquam mollitia reiciendis, asperiores, similique dolorem placeat ut.'
	},
	{
		id: 2421,
		title: 'Note Title 2',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio harum praesentium mollitia animi veritatis aut perspiciatis voluptate quod nostrum minima distinctio repellat asperiores impedit saepe deserunt quia doloribus sed.'
	},
	{
		id: 6289,
		title: 'Note Title 3',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum et exercitationem rerum eligendi reprehenderit adipisci corporis. Ea fugiat voluptatibus ad suscipit eius. Ut expedita sint amet quo ad necessitatibus.'
	},
	{
		id: 5421,
		title: 'Note Title 4',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio harum praesentium mollitia animi veritatis aut perspiciatis voluptate quod nostrum minima distinctio repellat asperiores impedit saepe deserunt quia doloribus sed.'
	},
	{
		id: 629,
		title: 'Note Title 5',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum et exercitationem rerum eligendi reprehenderit adipisci corporis. Ea fugiat voluptatibus ad suscipit eius. Ut expedita sint amet quo ad necessitatibus.'
	},
	{
		id: 113,
		title: 'Note Title 6',
		body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur distinctio odit facere molestiae neque vero harum minus qui voluptatem. Enim, modi excepturi? Adipisci assumenda nisi provident consequuntur officia praesentium magnam!'
	}
];

function App() {
  const [notes, setNotes] = useState(DUMMY_NOTES);
  const [isOpen, setIsOpen] = useState(false);
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

	const handleNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleNewBody = (e: ChangeEvent<HTMLInputElement>) => {
		setBody(e.target.value);
	};

	const handleFormSubmit = (e: ChangeEvent<HTMLInputElement>) => {
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

	const formSubmitHandler = (e: any) => {
		handleFormSubmit(e);
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
				<form className={styles.form}>
					<input
						className={styles.form_title}
						placeholder="Title"
            onChange={handleNewTitle}
						onKeyPress={formKeyPressHandler}
						value={title}
					/>
					<input
						className={styles.form_body}
						placeholder="Take a note..."
						onBlur={formSubmitHandler}
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
