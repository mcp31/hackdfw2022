import styles from '../styles/Home.module.css'
import bucketStyles from '../styles/Bucket.module.css'
import AddTransactionModal from './Components/AddTransactionModal'
import Bucket from './Components/Bucket'
import React, { useState } from 'react';
import AddBucketModal from './Components/AddBucketModal';
import ProgressBar from './Components/ProgressBar';

const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const timeRemaining = daysInMonth(month, year) - day;
const timePercentage = 100 - (timeRemaining / daysInMonth(month, year) * 100);

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function TransactionCard(props) {
    return (
        <div className={styles.transactionCard}>
            <div className={styles.transactionCardCategoryColor} style={{backgroundColor: props.categoryColor}}></div>
        </div>
    )
}

export default function HomeScreen() {

    const [input, setInput] = useState();

    const [amountSpent, setAmountSpent] = useState(100);

    const [budget, setBudget] = useState(0);

    const [modal, setModal] = useState(false);

    const handleChange = event => {
        setInput(event.target.value);
    };

    const toggleModal = () => {
        setModal(!modal);
    }
    const updateBudget = () => {
        setModal(!modal);
        setBudget(input);
    }

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
                    <ProgressBar percentage={timePercentage}/>
                </h1>

                <h3>{timeRemaining} days left!</h3>
            </div>
            <div>
                <div>
                    <div className={styles.changeBudgetDiv}>
                        <h1 className={styles.sectionHeader}>
                            Budget
                        </h1>
                        <button className={styles.changeBudgetButton} onClick={toggleModal}> Edit Budget </button>
                    </div>
                    {modal && (
                    <div className={bucketStyles.modal}>
                        <div className={bucketStyles.overlay}></div>
                        <div className={bucketStyles.modalContent}>
                            <div className={bucketStyles.title}> <h3>Edit Budget</h3></div>
                            <div>
                                Amount:
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="input"
                                    name="input"
                                    onChange={handleChange}
                                    value={input}
                                />
                            </div>  
                            <div className={bucketStyles.buttons}>
                                <button className={bucketStyles.cancel} onClick={toggleModal}>Cancel</button>
                                <button className={bucketStyles.update} onClick={updateBudget}>Update</button>
                            </div>
                        </div>

                    </div>)}
                    <ProgressBar percentage={(amountSpent/budget)*100}/>
                </div>
                <h3>${amountSpent} spent of ${budget}</h3>

            </div>
            <div>
                <h1 className={styles.sectionHeader}>
                    Your Buckets
                </h1>
                <h3>
                    List of Buckets
                    </h3>
                    <div className={styles.bucketList}>
                        <Bucket className={styles.bucket} name={"Rent"} amount={"1200"} percentage={"20"}/>
                        <Bucket className={styles.bucket} name={"Car"} amount={"200"} percentage={"60"}/>
                        <Bucket className={styles.bucket} name={"Food"} amount={"100"} percentage={"30"}/>
                        <Bucket className={styles.bucket} name={"Gas"} amount={"350"} percentage={"100"}/>
                        <Bucket className={styles.bucket} name={"Other"} amount={"1000"} percentage={"85"}/>
                        <AddBucketModal/>
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