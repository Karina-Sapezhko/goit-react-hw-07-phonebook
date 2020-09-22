import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactForm.module.css';
import { notificationAction } from '../../redux/contacts/contacts-actions';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getItemsSelector } from '../../redux/contacts/contacts-selectors';

const nameInputId = uuidv4();
const numberInputId = uuidv4();

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const items = getItemsSelector(state);

  const handleSubmitForm = event => {
    event.preventDefault();

    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    const findName = items.find(el => el.name === contact.name);

    if (findName) {
      return dispatch(notificationAction('Contact already exists!'));
    } else if (isNaN(contact.number)) {
      return dispatch(
        notificationAction(
          'In the section of numbers you can specify only numbers!',
        ),
      );
    }

    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitForm}>
      <div className={styles.group}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
          id={nameInputId}
          required
        />
        <span className={styles.bar}></span>
        <label htmlFor={nameInputId}>Name</label>
      </div>
      <div className={styles.group}>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={({ target: { value } }) => setNumber(value)}
          id={numberInputId}
          required
        />
        <span className={styles.bar}></span>
        <label htmlFor={numberInputId}>Number</label>
      </div>

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
