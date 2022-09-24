import React, {useState} from "react";
import styles from '../../styles/Bucket.module.css';


class NameForm extends React.Component{
    constructor(props) {
      super(props);
      this.state = {value: `${props.name}`};
  
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
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


export default function Bucket(props) {

    const [modal, setModal] = useState(false);

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

    const toggleModal = () => {
        setModal(!modal);
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
                        <button className={styles.update} onClick={toggleModal}>Update</button>
                    </div>
                </div>

            </div>
            )}
        </>
    );

}