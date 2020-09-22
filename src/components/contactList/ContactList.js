import React from 'react';
import styles from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import fadeListStyles from '../../animationStyles/list.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getFilterContactsSelector } from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const filterContacts = getFilterContactsSelector(state);

  return (
    <>
      <TransitionGroup component="ul">
        {filterContacts.map(({ id, name, number }) => (
          <CSSTransition key={id} classNames={fadeListStyles} timeout={250}>
            <li className={styles.item}>
              <p className={styles.itemText}>
                {name}: {number}
              </p>

              <button
                className={styles.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default ContactList;
