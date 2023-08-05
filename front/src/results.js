import styles from './results.module.css';
import jsonData from './data.json';

const Results = () => {
    return (
      <div className={styles.resultdiv}>

        <h1 className={styles.summary}>Summary</h1>

        <div className={styles.resultlist}>
        {jsonData.map((item, index) => (
          <div key={index} alt={item.category}>
            <img src={item.icon} alt={item.category + " icon"}/>
            <p className={styles.categoryp}> {item.category}</p>
            <p className={styles.scorep}><span> {item.score} </span> / 100 </p>
               
          </div>
        ))}       
        </div>
        <button type="submit">Continue</button>
      </div>);
}

  export default Results;