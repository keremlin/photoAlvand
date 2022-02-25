import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "./loading.module.css";
import SquareLoader from "react-spinners/SquareLoader";
import { css } from "@emotion/react";
export default function Loading(props) {
    return (
        <>
            {(props.show ?
                <div className={styles.loadingMinHeight}>
                    <div className={styles.LoadingCenterClass}>
                        <SquareLoader css={override} color="rgba(108, 117, 125, 0.871)"/>
                        <p className={styles.LoadingText}></p>
                        <p className={styles.LoadingText}>Please wait</p>
                    </div>
                </div>
                
                : <></>)}
        </>
    );
}
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  color:green;
`;