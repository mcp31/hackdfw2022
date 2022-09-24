import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';

const daysLeft = 15;
const percentageAmount = "100px";

function ProgressBar(props) {

    const width = props.width / props.totalWidth;

    return (
        <div className={styles.progressBarBackground}>
            <div className={styles.progressBarPercentage} style={{width: width}}></div>
        </div>
    )
}

function TransactionCard(props) {
    return (
        <div className={styles.transactionCard}>
            
        </div>
    )
}

export default function HomeScreen() {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
      
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, [screenSize])

    return (
        <div>
            <div>
                <h1>
                    Blueberry Logo
                </h1>
            </div>
            <div>
                <h1 className={styles.sectionHeader}>
                    Time Remaining
                </h1>
                <ProgressBar width={daysLeft} totalWidth={screenSize.dynamicWidth}></ProgressBar>
            </div>
            <div>
                <h1 className={styles.sectionHeader}>
                    Budget
                </h1>
                <ProgressBar width={daysLeft} totalWidth={screenSize.dynamicWidth}></ProgressBar>
            </div>
            <div>
                <h1 className={styles.sectionHeader}>
                    Your Buckets
                </h1>
                <h3>
                    List of Buckets
                </h3>
            </div>
            <div>
                <h1 className={styles.sectionHeader}>
                    Transactions
                </h1>
                <h3>
                    List of Transactions
                </h3>
                <TransactionCard></TransactionCard>
            </div>
        </div>
        
        

    )
}