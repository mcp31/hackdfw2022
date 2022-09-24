import React, {useState} from "react";
import styles from '../../styles/Bucket.module.css';

export default function Bucket(props) {

    const [modal, setModal] = useState(false);

    const [name, setName] =useState({
      input: `${props.name}`,
      value: `${props.name}`,
    });

    const [amount, setAmount] =useState({
      input: `${props.amount}`,
      value: `${props.amount}`,
    });

    const handleNameChange = event => {
      setName({...name, input: event.target.value});};

    const handleAmountChange = event => {
      setAmount({...amount, input: event.target.value});};

    const updateBucket = () => {
        setModal(!modal);
        setName({...name, value: name.input});
        setAmount({...amount, value: amount.input});
    }

    
    const toggleModal = () => {
      setModal(!modal);
    }

    const progressBar ={
        marginLeft: '10px',
        position: 'relative',
        transform: 'rotatex(180deg)',
        transformOrigin: 'top',
        backgroundColor: `${props.percentage}` === '100' ? 'red' :
        `${props.percentage}` > '75' ? 'orange' :
        `${props.percentage}` > '50' ? 'yellow' :
        'green',
        zIndex: '-1',
        width: '80px',
        height: `${props.percentage}px`,
        marginBottom: `-${props.percentage}px`,
    }

    return (
        <>
                <div className={styles.bucket}>
                    {props.name}:{ props.percentage}%
                    <button className={styles.modalButton} onClick={toggleModal}></button>
                    <div style={progressBar}></div>
                </div>
                {modal && (
                <div className={styles.modal}>
                    <div className={styles.overlay}></div>
                <div className={styles.modalContent}>
                    <div className={styles.title}> <h2>Edit Bucket</h2></div>
                    <div>
                        Name:
                    </div>
                    <div>
                         <input
                            type="text"
                            id="input"
                            name="input"
                            onChange={handleNameChange}
                            value={name.input}
                        />
                    </div>
                    <div>
                        Amount:
                    </div>
                    <div>
                      <input
                          type="text"
                          id="input"
                          name="input"
                          onChange={handleAmountChange}
                          value={amount.input}
                          />
                    </div>  
                    <div className={styles.buttons}>
                        <button className={styles.cancel} onClick={toggleModal}>Cancel</button>
                        <button className={styles.update} onClick={updateBucket}>Update</button>
                    </div>
                </div>
            </div>
            )}
        </>
    );

}