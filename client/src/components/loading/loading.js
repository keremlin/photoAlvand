import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "./loading.module.css";
export default function Loading(props) {
    return (
        <>
            {(props.show ?
                <div className={styles.loadingMinHeight}>
                    <div className={styles.LoadingCenterClass}>
                        <CircularProgress color="secondary" className="styles.LoadingMarginAuto" /> 
                        <p className={styles.LoadingText}>Please wait</p>
                    </div>
                </div>
                
                : <></>)}
        </>
    );
}