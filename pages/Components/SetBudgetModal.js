import React, {useEffect, useState} from "react";
import Select from "react-select";
import styles from '../../styles/Bucket.module.css';


class BudgetForm extends React.Component{
    constructor(props) {
      super(props);
      this.state = {value: 'Enter Budget'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A budget was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default function SetBudgetModal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        <>
                <div>
                    <button className={styles.changeBudgetButton} onClick={toggleModal}> Edit Budget </button>
                </div>
                {modal && (
                <div className={styles.modal}>
                    <div className={styles.overlay}></div>
                <div className={styles.modalContent}>
                    <div className={styles.title}> <h3>Edit Budget</h3></div>
                    <div>
                        Amount:
                    </div>
                    <div>
                        <BudgetForm/>
                    </div>  

                    <div className={styles.buttons}>
                        <button className={styles.cancel} onClick={toggleModal}>Cancel</button>
                        <button className={styles.update} onClick={toggleModal}>Update</button>
                    </div>
                </div>

            </div>
            )}
        </>
    );

}