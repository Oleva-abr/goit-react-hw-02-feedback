import React from 'react';
import React, { Component } from 'react';
import Section from './components/Section/Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    positivePercentage: 0,
  };
  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};
  onLeaveFeedback = () => {};
  render() {
    <Section title="Please leave feedback"></Section>;
    <Section title="Statistics"></Section>;
  }
}

export default App;
