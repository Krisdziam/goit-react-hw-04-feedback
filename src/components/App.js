import React, { Component } from 'react';
import FeedbackOptions from './Vote/Feedback/FeedbackOptions';
import Statistics from './Vote/Statistics/Statistics';
import Section from './Vote/Section/Section';
import Notification from './Vote/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotal() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositivvePercentage() {
    const total = this.countTotal();
    if (!total) {
      return 0;
    }

    const result = (this.state.good / total) * 100;

    return Number(result.toFixed(2));
  }
  onLeaveFeedback = e => {
    const btn = e.target.name;
    this.setState(prevState => ({
      [btn]: prevState[btn] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    const positiveFeedback =
      this.countPositivvePercentage();
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
