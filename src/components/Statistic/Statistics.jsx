import React from 'react';
import propTypes from 'prop-types';
class Statistics extends React.Component {
  render() {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    return (
      <>
        <h1>Please leave feedback </h1>
        <button>
          Good: <span>{good}</span>
        </button>
        <button>
          Bad: <span>{bad}</span>
        </button>
        <button>
          Neutral: <span>{neutral}</span>
        </button>
        <h2>Statistics</h2>
        <h3>
          Good: <span>{good}</span>
        </h3>
        <h3>
          Bad: <span>{bad}</span>
        </h3>
        <h3>
          Neutral: <span>{neutral}</span>
        </h3>
      </>
    );
  }
}

export default Statistics;
