import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification';
import Section from './components/Section';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return totalFeedback ? (good / totalFeedback) * 100 : 0;
  };

  const addFeedback = (options) => {
    switch (options) {
      case 'good':
        setGood((s) => s + 1);
        break;
      case 'neutral':
        setNeutral((s) => s + 1);
        break;
      case 'bad':
        setBad((s) => s + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={addFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={
              Math.round(countPositiveFeedbackPercentage() * 100) / 100
            }
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

export default App;
