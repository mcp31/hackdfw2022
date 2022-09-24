import styles from '../styles/Home.module.css'
import bucketStyles from '../styles/Bucket.module.css'
import AddTransactionModal from './Components/AddTransactionModal'
import Bucket from './Components/Bucket'
import React, { useState, useEffect } from 'react';
import AddBucketModal from './Components/AddBucketModal';
import ProgressBar from './Components/ProgressBar';
import { findBudget } from './utils/findBudget';

var TodoBudget = require('todo_budget');

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

    /// Api Calls
    let apiInstance = new TodoBudget.DefaultApi();
    let id = 13;

    // useEffect(() => {
    //     if(user != undefined){
    //         // setAmountSpent(user.buckets[0].amount);
    //         // setBudget(user.buckets[0].total);
    //         console.log(2);
    //     }
    //     console.log(1);
    // }, [user]);
    


    // console.log('Buckets : ' + user.id);

    const [user, setUser] = useState(new TodoBudget.User());
    const [input, setInput] = useState();
    const [budget, setBudget] = useState(0);
    const [amountSpent, setAmountSpent] = useState(100);
    const [modal, setModal] = useState(false);


    // try{
    //     await apiInstance.findUserByID(id, (error, data, response) => {
    //         if (error) {
    //             console.error(error);
    //         } else {
    //             // console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    //             // console.log(data.id);
    //         }
    //         setUser(data);
    //     });
    // } catch (err) {
    //     console.log(err);
    // }

    

    useEffect(() => {
        var testing = apiInstance.findUserByID(id, (error, data, response) => {
            // console.log(data, response);
            setUser(data);
        });
        // const fetchData = async () => {
        //     try{
        //         const usersTest = await apiInstance.findUserByID(id, (error, data, response) => {});
        //         setUser(usersTest.data);
        //         console.log("UserTests" + usersTest.data);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }
        // fetchData();
    }, []);

    console.log(user.id);
    console.log(user.id);
    console.log("Testing" + JSON.stringify(user));

    const handleChange = event => {
        setInput(event.target.value);
    
        console.log('value is:', event.target.value)
    };

    

    /// Functional
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
                    <ProgressBar percentage={100 - (amountSpent/budget)*100}/>
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
                        <Bucket className={styles.bucket} name={"Rent"} percentage={"20"}/>
                        <Bucket className={styles.bucket} name={"Car"} percentage={"60"}/>
                        <Bucket className={styles.bucket} name={"Food"} percentage={"30"}/>
                        <Bucket className={styles.bucket} name={"Gas"} percentage={"100"}/>
                        <Bucket className={styles.bucket} name={"Other"} percentage={"85"}/>
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