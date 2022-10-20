import React from 'react';
import styles from './styles/App.module.scss';

import keep from './assets/keep.png';
import mongodb from './assets/mongodb.png';
import react from './assets/react.png';
import sass from './assets/sass.png';
import typescript from './assets/typescript.png';

const DUMMY_NOTES = [
	{
		title: 'Note Title 1',
		body: '1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nam qui odit atque dolorum nemo adipisci, modi a ducimus dolor!'
	},
	{
		title: 'Note Title 2',
		body: '2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nam qui odit atque dolorum nemo adipisci, modi a ducimus dolor!'
	},
	{
		title: 'Note Title 3',
		body: '3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nam qui odit atque dolorum nemo adipisci, modi a ducimus dolor!'
	}
];

function App() {
	return (
		<div className={styles.App}>
			<div className={styles.stack}>
				<img className={styles.stack_icon} src={react} alt="" />
				{' + '}
				<img className={styles.stack_icon} src={typescript} alt="" />
				{' + '}
				<img className={styles.stack_icon} src={sass} alt="" />
				{' + '}
				<img className={styles.stack_icon} src={mongodb} alt="" />
				{' = '}
				<img className={styles.stack_icon} src={keep} alt="" />
			</div>
			<main>
				<form className={styles.form}>
					<input className={styles.form_title} placeholder="Title" />
					<input className={styles.form_body} placeholder="Take a note..." />
				</form>
				<section className={styles.notes}>
					{DUMMY_NOTES.map((note) => {
						return (
							<div className={styles.notes_card}>
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
