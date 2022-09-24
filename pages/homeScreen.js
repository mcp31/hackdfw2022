import styles from '../styles/Home.module.css'
import AddTransactionModal from './Components/AddTransactionModal'
import Bucket from './Components/Bucket'

export default function HomeScreen() {
    return (
        <div>
            <div>
                <h1>
                    Blueberry Logo
                </h1>
            </div>
            <div>
                <h1 className={styles.timeRemainingTitle}>
                    Time Remaining
                </h1>
                <div className={styles.progressBar}></div>
            </div>
            <div>
                <h1>
                    Budget
                </h1>
                <h3>
                    Progress Bar
                </h3>
            </div>
            <div>
                <h1>
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
                <h1>
                    Transactions
                </h1>
                <h3>
                <AddTransactionModal/>
                    List of Transactions
                </h3>
            </div>
        </div>
        
        

    )
}