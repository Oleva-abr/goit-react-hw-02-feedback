import React from 'react';

import PropTypes from 'prop-types';

// import './FeedbackOptions.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className="feedbackButtons">
    <button type="button" name="good" onClick={() => onLeaveFeedback} />
    <button type="button" name="neutral" onClick={onLeaveFeedback} />
    <button type="button" name="bad" onClick={onLeaveFeedback} />
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
