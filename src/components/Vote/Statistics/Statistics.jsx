import styles from './Statistics.module.css';

const Statistics = options => {
  return (
    <>
      <ul className={styles.statisticsList}>
        <li className={styles.statisticsItem}>
          Good:{options.good}
        </li>
        <li className={styles.statisticsItem}>
          Neutral:{options.neutral}
        </li>
        <li className={styles.statisticsItem}>
          Bad:{options.bad}
        </li>
        <li className={styles.statisticsItem}>
          Total:{options.total}
        </li>
        <li className={styles.statisticsItem}>
          Positive feedback:
          {options.positivePercentage}%
        </li>
      </ul>
    </>
  );
};

export default Statistics;
