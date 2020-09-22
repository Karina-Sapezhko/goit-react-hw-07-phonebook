import React from 'react';
import { CSSTransition } from 'react-transition-group';
import fadeFilterStyles from '../../animationStyles/Filter.module.css';
import StylesInput from '../contactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import {
  getFilterSelector,
  getItemsSelector,
} from '../../redux/contacts/contacts-selectors';

const Filter = ({ showFilter }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const items = getItemsSelector(state);
  const filter = getFilterSelector(state);

  const handleFilterChange = event =>
    dispatch(filterContacts(event.currentTarget.value));

  return (
    <CSSTransition
      in={showFilter || items.length > 1}
      appear={showFilter}
      timeout={500}
      classNames={fadeFilterStyles}
      unmountOnExit
    >
      <div className={StylesInput.group}>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
          required
        />
        <span className={StylesInput.bar}></span>
        <label>Find contacts by name</label>
      </div>
    </CSSTransition>
  );
};

export default Filter;
