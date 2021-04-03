import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <>
    <p>{message}</p>
  </>
);

Notification.PropTypes = {
  message: propTypes.string.isRequired,
};
export default Notification;
