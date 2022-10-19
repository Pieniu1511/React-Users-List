import React from 'react';

import Button from '../UI/Button/Button';
import styles from './Modal.module.css';

const Modal = props => {
	if (props.show === true) {
		const closeThisModal = () => {
			props.close();
		};


		return (
			<form onSubmit={closeThisModal} className={styles.modalPage} onClick={closeThisModal}>
				<div className={styles.modal} onClick={e => e.stopPropagation()}>
					<div className={styles.modalTitle}>Invalid input</div>
					<div className={styles.modalBody}>
						{/* <p>Please enter a valid name and age (non-empty values).</p> */}
                        {!props.zero && <p>Please enter a valid name and age (non-empty values).</p>} 
                        {props.zero && <p>Please enter a valid age.</p>}
						<Button text={'Okay'} />
					</div>
				</div>
			</form>
		);
	}
};

export default Modal;
