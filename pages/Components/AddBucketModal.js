import React, {useState} from "react";
import styles from '../../styles/Bucket.module.css';


class NameForm extends React.Component{
    constructor(props) {
      super(props);
      this.state = {value: "Desired Name"};
  
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
      this.state = {value: 'Desired Budget'};
  
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
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


export default function AddBucketModal(props) {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        <>
                <div>
                    <button className={styles.addBucketButton} onClick={toggleModal}>
                        <div className={styles.addBucket}>
                          <text>+</text>
                        </div>
                    </button>
                </div>
                {modal && (
                <div className={styles.modal}>
                    <div className={styles.overlay}></div>
                <div className={styles.modalContent}>
                    <div className={styles.title}> <h2>Add Bucket</h2></div>
                    <div>
                        Name:
                    </div>
                    <div>
                        <NameForm name={props.name}/>
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