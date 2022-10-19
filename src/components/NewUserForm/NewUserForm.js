import React, { useState } from 'react';

// import AgeInput from '../AgeInput/AgeInput';
import Button from '../UI/Button/Button';
// import UsernameInput from '../UsernameInput/UsernameInput';
import styles from './NewUserForm.module.css';

const NewUserForm = props => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const submitHandler = e => {
		e.preventDefault();
		if (enteredName === '' || enteredAge === '') {
			props.onShowModal()
            return
		}

        if (enteredAge < 0) {
            props.onShowModalWithZero()
            return
        }

		const userData = {
			key: Math.random(),
			username: enteredName,
			age: enteredAge,
		};

		props.onAddUser(userData);
		setEnteredName('');
		setEnteredAge('');
	};

	const nameChangeHandler = e => {
		setEnteredName(e.target.value);
	};

	const ageChangeHandler = e => {
		setEnteredAge(e.target.value);
	};

	// return (
	// 	<form onSubmit={submitHandler}>
	// 		<UsernameInput value={enteredName} onChange={nameChangeHandler} />
	// 		<AgeInput value={enteredAge} onChange={ageChangeHandler} />
	// 		<Button />
	// 	</form>
	// );

	return (
		<form onSubmit={submitHandler} className={styles.form}>
			<label className={styles.label}>Username</label>
			<input value={enteredName} onChange={nameChangeHandler} className={styles.input}></input>
			<label className={styles.label}>Age (Years)</label>
			<input value={enteredAge} onChange={ageChangeHandler} className={styles.input}></input>
			<Button text={'Add User'}/>
		</form>
	);
};

export default NewUserForm;
