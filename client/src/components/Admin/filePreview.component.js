import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useState } from 'react';
import styles from './filePreview.module.css';
export default function FilePreview(props) {
    const [isImageLoaded, setImageLoaded] = useState(false);
    return (
        <div className={styles.loadingInCenterWrapper}>
                
            <div  
            style={! isImageLoaded ? {} : { display: 'none' } }
            className={styles.loadingInCenter}>
            <CircularProgress color="inherit"/>
            <p>Loading Picture</p>

            </div>
            <img
                style={isImageLoaded ? {} : { display: 'none' }}
                src={props.src}
                className={"img-fluid " + styles.fadeInImage}
                alt="preview"
                onLoad={() => setImageLoaded(true)}
            />
        </div>
    );
}