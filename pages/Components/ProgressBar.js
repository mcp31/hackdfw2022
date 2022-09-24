import React from "react";
import styles from '../../styles/Home.module.css'

export default function ProgressBar(props) {

    const progressBar={
            backgroundColor: "#1A545B",
            height: "2rem",
            borderRadius: "10px",
            width: `${props.percentage}%`
    }
    return (
        <>
        <div className={styles.progressBarBackground}>
            <div style={progressBar}></div>
        </div>
        </>
    );
}