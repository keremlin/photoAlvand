import { Grow } from '@material-ui/core';
import { connect } from 'react-redux';
import { Trans } from 'react-i18next';
function H3UIT(props) {
    let checked = true;
    return (
        <Grow
            in={checked}
            key={props.language}
            {...(checked ? { timeout: 700 } : {})}>
            <span>
                <Trans>{props.children}</Trans>
            </span>
        </Grow>
    )
}
export default connect((state) => state.language)(H3UIT);