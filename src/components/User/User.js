import React from 'react';

import styles from './User.module.css'

const User = props => {
	return (
		<li className={styles.user}>
			<div>
				{props.username} ({props.age} years old)
			</div>
		</li>
	);
};

export default User;
