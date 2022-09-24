import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeScreen from './homeScreen'
var TodoBudget = require('todo_budget');

// The following property can be used to configure cross-origin resource sharing
// in the HTTP nodes.
// See https://github.com/troygoode/node-cors#configuration-options for
// details on its contents. The following is a basic permissive set of options:

export default function Home() {

    let apiInstance = new TodoBudget.DefaultApi();
    let opts = {
        'limit': 56 // Number | maximum number of results to return
    };
    apiInstance.findUsers(opts, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully. Returned data: ' + data);
            // const userObj = JSON.parse(data);
            console.log(data[0].id);
        }
    });

    return ( 
    < div className = { styles.container } >
      <HomeScreen> </HomeScreen> 
    </div >
    )
}