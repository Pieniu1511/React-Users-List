import React from 'react';

import User from '../User/User';
import styles from './UsersData.module.css'

const UsersData = props => {
	// if (props.items.length === 0) {
	// 	return <p>No users registered</p>;
	// }

	return <ul className={styles.usersList}>
        {props.users.map(user => (
            <User key={user.key} username={user.username} age={user.age} />
        ))}
    </ul>;
};

export default UsersData;
