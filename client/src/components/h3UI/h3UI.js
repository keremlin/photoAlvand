import styles from './h3UI.module.css';
export default function H3UI(props){
    return(
        <div className={styles.linkBackground}>
            <a href="" className={styles.middle}>{props.children}</a>
        </div>
        )
}