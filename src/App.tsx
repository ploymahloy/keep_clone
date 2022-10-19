import React from 'react';
import styles from './styles/App.module.scss';

import keep from './assets/keep.png';
import mongodb from './assets/mongodb.png';
import react from './assets/react.png';
import sass from './assets/sass.png';
import typescript from './assets/typescript.png';

function App() {
  return (
		<div className={styles.App}>
			<div className={styles.stack}>
				<img className={styles.stack_icon} src={react} />
				{' + '}
				<img className={styles.stack_icon} src={typescript} />
				{' + '}
				<img className={styles.stack_icon} src={sass} />
				{' + '}
				<img className={styles.stack_icon} src={mongodb} />
				{' = '}
				<img className={styles.stack_icon} src={keep} />
      </div>
      <form className={styles.form}>
        <input className={styles.form_title} placeholder="Title" />
        <input className={styles.form_body} placeholder="Take a note..." />
      </form>
		</div>
	);
}

export default App;
