import React from 'react';
import propTypes from 'prop-types';
class Statistics extends React.Component {
    render() {
        state = {
            good: 0,
            neutral: 0,
            bad: 0,
            positivePercentage: 0,
        };
        return (
            <>
                <h1>Please leave feedback </h1>
                <button
                    type="button"
                    onClick={() => {
                        onLeaveFeedback;
                    }}
                >
                    Good: <span>{good}</span>
                </button>
                <button
                    type="button"
                    onClick={() => {
                        onLeaveFeedback;
                    }}
                >
                    Bad: <span>{bad}</span>
                </button>
                <button
                    type="button"
                    onClick={() => {
                        onLeaveFeedback;
                    }}
                >
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
                <h3>
                    Positive Feedback: <span>{positivePercentage}%</span>
                </h3>
            </>
        );
    }
}
Statistics.propTypes = {
    good: propTypes.number,
    bad: propTypes.number,
    neutral: propTypes.number,
    total: propTypes.number,
    positivePercentage: propTypes.number,
};
export default Statistics;
