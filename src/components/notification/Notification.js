import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Notification.module.css';
import fadeNotificationStyles from '../../animationStyles/fadeNotification.module.css';
import { CSSTransition } from 'react-transition-group';
import { notificationAction } from '../../redux/contacts/contacts-actions';
import { getErrorsSelector } from '../../redux/contacts/contacts-selectors';

const Notification = () => {
  const [show, setShow] = useState(false);

  const state = useSelector(state => state);
  const errors = getErrorsSelector(state);
  const dispatch = useDispatch();

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      dispatch(notificationAction(''));
      setShow(false);
    }, 2000);
  }, [errors]);

  return (
    <>
      {errors && (
        <CSSTransition
          in={show}
          classNames={fadeNotificationStyles}
          timeout={250}
          unmountOnExit
        >
          <div className={styles.notification}>{errors}</div>
        </CSSTransition>
      )}
    </>
  );
};

export default Notification;
