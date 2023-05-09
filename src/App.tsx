import { ChangeEvent, FormEvent, useState } from 'react';

import { Note } from './components/Note.jsx';
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
	const [_isOpen, setIsOpen] = useState(false);
	const [body, setBody] = useState('');
	const [title, setTitle] = useState('');

	const handleNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleNewBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setBody(e.target.value);
	};

	const handleFormSubmit = (e: FormEvent) => {
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

  const deleteNote = (id: number) => {
    // console.log(id);
		setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (newNote: any) => {
    const noteIndex = notes.findIndex((note) => note.id === newNote.id);
    notes.splice(noteIndex, 1, newNote);
    const updatedNotes = [...notes]
    setNotes(updatedNotes); 
  }
  
  const updateNotes = (updateType: string, value: string, id: Number) => {
    const theNote = notes.find((note) => note.id === id);

    switch (updateType) {
      case "body":
        const updatedBody = {
          ...theNote,
          body: value
        }
        updateNote(updatedBody);
        break;
      case "title": 
        const updatedTitle = {
          ...theNote,
          title: value
        }
        updateNote(updatedTitle);
        break;
      default:
          throw new Error(`Unknown update type. ${updateType} is not recognized.`);
    }
    // setNotes(notes.filter((note) => note.id === updatedNote.id ? updatedNote : note));
  }

  const editBody = (daBody: string, id: Number) => (updateNotes("body", daBody, id));
  const editTitle = (daTitle: string, id: Number) => (updateNotes("title", daTitle, id));

  const onDebugThaMassaDeboog = () => {
    console.table(notes);
  }

  // console.log('App');
  // console.table(notes);

	return (
    <div className={styles.App}>
      <button onClick={onDebugThaMassaDeboog}>massaDebooger</button>
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
						value={title}
					/>
					<textarea
						className={styles.form_body}
						placeholder="Take a note..."
						tabIndex={0}
						onChange={handleNewBody}
						value={body}
					/>
				</form>
				<section className={styles.notes}>
					{notes.map((note, key) => {
						return (
							<Note
								key={key}
								id={note.id}
								body={note.body}
                onEditBody={editBody}
								title={note.title}
                onEditTitle={editTitle}
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
