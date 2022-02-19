import styles from './h3UI.module.css';
import { Grow } from '@material-ui/core';
import { connect } from 'react-redux';
import { Trans } from 'react-i18next';
import H3UI from './h3UI';
function H3UIT(props) {
    let checked = true;
    return (
        <Grow
            in={checked}
            key={props.language}
            {...(checked ? { timeout: 700 } : {})}>
            <div>
                <H3UI>
                    <Trans>{props.children}</Trans>
                </H3UI>
            </div>
        </Grow>
    )
}
export default connect((state) => state.language)(H3UIT);