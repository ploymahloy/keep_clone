import { useState } from 'react';

import styles from './styles/App.module.scss';
import keep from './assets/keep.png';

const DUMMY_NOTES = [
	{
		title: 'Note Title',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore, recusandae perferendis ab tenetur ducimus ea maiores! Consectetur ipsam harum, officiis eius quisquam mollitia reiciendis, asperiores, similique dolorem placeat ut.'
	},
	{
		title: 'Note Title',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio harum praesentium mollitia animi veritatis aut perspiciatis voluptate quod nostrum minima distinctio repellat asperiores impedit saepe deserunt quia doloribus sed.'
	},
	{
		title: 'Note Title',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate harum et exercitationem rerum eligendi reprehenderit adipisci corporis. Ea fugiat voluptatibus ad suscipit eius. Ut expedita sint amet quo ad necessitatibus.'
	},
	{
		title: 'Note Title',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur distinctio odit facere molestiae neque vero harum minus qui voluptatem. Enim, modi excepturi? Adipisci assumenda nisi provident consequuntur officia praesentium magnam!'
    
	},
	{
		title: 'Note Title',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit labore commodi facere magni nobis harum, totam incidunt et quibusdam magnam sed obcaecati dolorum consequatur, corporis nisi aperiam id corrupti! Numquam.'
	},
	{
		title: 'Note Title',
		body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit non numquam distinctio id excepturi perferendis soluta illo a architecto doloribus quos ipsam enim facilis eligendi, magni magnam in exercitationem laudantium?'
	}
];

function App() {
	const [notes, setNotes] = useState(DUMMY_NOTES);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const handleNewTitle = (e: any) => {
		setTitle(e.target.value);
	};

	const handleNewBody = (e: any) => {
		setBody(e.target.value);
	};

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    // setNotes([...DUMMY_NOTES, { title, body }]);
    setNotes((DUMMY_NOTES) => {
			return [{title, body}, ...DUMMY_NOTES];
    });
    
		setTitle('');
		setBody('');
	};

	const formKeyPressHandler = (e: any) => {
		if (e.key === 'Enter') {
			handleFormSubmit(e);
		} else return;
	};

	return (
		<div className={styles.App}>
			<div className={styles.brand}>
				<img className={styles.brand_icon} src={keep} alt="" />
				Persist
			</div>
			<main className={styles.main}>
				<form className={styles.form} onKeyPress={formKeyPressHandler}>
					<input
						className={styles.form_title}
						placeholder="Title"
						onChange={handleNewTitle}
						value={title}
					/>
					<input
						className={styles.form_body}
						placeholder="Take a note..."
						onChange={handleNewBody}
						value={body}
					/>
				</form>
				<section className={styles.notes}>
					{notes.map((note, id) => {
						return (
							<div className={styles.notes_card} key={id}>
								<p className={styles.notes_card_title}>{note.title}</p>
								<p className={styles.notes_card_body}>{note.body}</p>
							</div>
						);
					})}
				</section>
			</main>
		</div>
	);
}

export default App;
