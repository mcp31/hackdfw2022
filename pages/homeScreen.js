import styles from '../styles/Home.module.css'
import AddTransactionModal from './Components/AddTransactionModal'
import Bucket from './Components/Bucket'
import { useState, useEffect } from 'react';

const daysLeft = 15;
const percentageAmount = "100px";

function ProgressBar(props) {
    return (
        <div className={styles.progressBarBackground}>
            <div className={styles.progressBarPercentage} style={{width: props.width}}></div>
        </div>
    )
}

function TransactionCard(props) {
    return (
        <div className={styles.transactionCard}>
            <div className={styles.transactionCardCategoryColor} style={{backgroundColor: props.categoryColor}}></div>
        </div>
    )
}

export default function HomeScreen() {
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
                <ProgressBar width={daysLeft}></ProgressBar>
                <h3>13 Days</h3>
            </div>
            <div>
                <h1 className={styles.sectionHeader}>
                    Budget
                </h1>
                <ProgressBar width={daysLeft}></ProgressBar>
                <h3>$156 spent of $760</h3>

            </div>
            <div>
                <h1 className={styles.sectionHeader}>
                    Your Buckets
                </h1>
                <h3>
                    List of Buckets
                    </h3>
                    <div className={styles.bucketList}>
                        <Bucket className={styles.bucket}/>
                        <Bucket className={styles.bucket}/>
                        <Bucket className={styles.bucket}/>
                    </div>

            </div>
            <div>
                <div className={styles.transactions}>
                <h1 className={styles.sectionHeader}>
                    Transactions
                </h1>
                <AddTransactionModal/>
                </div>
                <h3>
                    List of Transactions
                </h3>

                <TransactionCard categoryColor="#FF8996"></TransactionCard>
                <TransactionCard categoryColor="#82B9CF"></TransactionCard>
            </div>
        </div>
        
        

    )
}