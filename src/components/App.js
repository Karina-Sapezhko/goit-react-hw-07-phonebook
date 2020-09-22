import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Layout from './layout/Layout';
import styles from './App.module.css';
import Notification from './notification/Notification';
import fadeStartListStales from '../animationStyles/logo.module.css';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import { filterContacts } from '../redux/contacts/contacts-actions';
import { Spinner } from './spinner/Spinner';
import {
  getItemsSelector,
  getLoadingSelector,
} from '../redux/contacts/contacts-selectors';

function App() {
  const [showFilter, setShowFilter] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const items = getItemsSelector(state);
  const loading = getLoadingSelector(state);

  useEffect(() => {
    dispatch(fetchContacts());
    if (items.length > 1) {
      setShowFilter(true);
    }
  }, []);

  useEffect(() => {
    if (items.length <= 1) {
      setShowFilter(false);
      dispatch(filterContacts(''));
    }
  }, [items]);

  return (
    <Layout>
      <Notification />

      <div className={styles.box}>
        <ContactForm />
        <div className={styles.BoxSpinner}>{loading && <Spinner />}</div>
        <h2 className={styles.boxTitle}>Contacts</h2>
        <Filter showFilter={showFilter} />

        <CSSTransition
          in={true}
          appear={true}
          classNames={fadeStartListStales}
          timeout={250}
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
      </div>
    </Layout>
  );
}

export default App;
