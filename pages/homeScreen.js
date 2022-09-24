import styles from '../styles/Home.module.css'
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
            </div>
            <div>
                <h1 className={styles.sectionHeader}>
                    Budget
                </h1>
                <ProgressBar width={daysLeft}></ProgressBar>
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
                <TransactionCard categoryColor="#FF8996"></TransactionCard>
                <TransactionCard categoryColor="#82B9CF"></TransactionCard>
            </div>
        </div>
        
        

    )
}