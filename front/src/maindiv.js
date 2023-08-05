import styles from './maindiv.module.css';

const Maindiv = () => {
    return (
      <div className={styles.maindiv}>
        <h1 className='h1'>Your Result</h1>
        <div className={styles.circle} >
          <div className={styles.div76}>76</div>
          <div className={styles.of100}>of 100</div>
        </div>
        <h2 className={styles.h2}>Great</h2>
        <p className={styles.p}>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    );
  }

  export default Maindiv;