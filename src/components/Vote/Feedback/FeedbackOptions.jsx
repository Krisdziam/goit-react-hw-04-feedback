import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={styles.feedbackBtn}
          name={option}
          key={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}

      {/*  
      <button className={styles.feedbackBtn} type="button" onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button className={styles.feedbackBtn} type="button" onClick={() => onLeaveFeedback("bad")}>Bad</button> */}
    </>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  leaveVote: PropTypes.func,
  options: PropTypes.array,
};
