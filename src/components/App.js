import React, { useState } from 'react';
import FeedbackOptions from './Vote/Feedback/FeedbackOptions';
import Statistics from './Vote/Statistics/Statistics';
import Section from './Vote/Section/Section';
import Notification from './Vote/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const countTotal = () => {
    const result = good + neutral + bad;
    return result;
  };

  const countPositivvePercentage = () => {
    const total = countTotal();
    if (!total) {
      return 0;
    }
    const result = (good / total) * 100;
    return Number(result.toFixed(2));
  };

  const onLeaveFeedback = e => {
    const propertyName = e.target.name;

    switch (propertyName) {
      case 'good':
        return setGood(prev => prev + 1);
      case 'neutral':
        return setNeutral(prev => prev + 1);
      case 'bad':
        return setBad(prev => prev + 1);
      default:
        return;
    }
  };

 

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotal() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={countPositivvePercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

