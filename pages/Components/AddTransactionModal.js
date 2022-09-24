import React, {useEffect, useState} from "react";
import Select from "react-select";
import styles from '../../styles/Bucket.module.css';


class NameForm extends React.Component{
    constructor(props) {
      super(props);
      this.state = {value: 'Rent'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
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


  class AmountForm extends React.Component{
    constructor(props) {
      super(props);
      this.state = {value: '$400'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An amount was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input className={styles.textBox} type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className={styles.textBox} type="submit" value="Submit" />
        </form>
      );
    }
  }

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];


export default function AddTransactionModal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }
    const [selectedOption, setSelectedOption] = useState(null);
    useEffect(() => {
        alert("Bucket selected: " + selectedOption.value);
    }, [selectedOption])
    return (
        <>
                <div>
                    <button className={styles.addTransactionButton} onClick={toggleModal}> + </button>
                </div>
                {modal && (
                <div className={styles.modal}>
                    <div className={styles.overlay}></div>
                <div className={styles.modalContent}>
                    <div className={styles.title}> <h3>Add Transaction</h3></div>
                    <div>
                        Bucket:
                    </div>
                    <div>
                    <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    maxMenuHeight={200}
                    />
                    </div>
                    <div>
                        Amount:
                    </div>
                    <div>
                        <AmountForm/>
                    </div>  

                    <div className={styles.buttons}>
                        <button className={styles.cancel} onClick={toggleModal}>Cancel</button>
                        <button className={styles.update} onClick={toggleModal}>Add</button>
                    </div>
                </div>

            </div>
            )}
        </>
    );

}