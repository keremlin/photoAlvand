import React, { Component } from 'react';
import http from "./../../../http-common";
import authHeader from "./../../../services/auth-header";
import StarsIcon from '@material-ui/icons/Stars';
import Chip from '@material-ui/core/Chip';
import styles from './../admin.module.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modals from './modal.component';

const style = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
          margin: '1.5px'
        },fontFamily: 'Yekan',
    },
    label: { color: 'black', fontFamily: 'Yekan' },
    clickedLabel: { color: 'blue', fontFamily: 'Yekan' },
});

class ShowCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{ name: 'No category yet', ID: -1, description: 'Add new category' }]
            , selectedList: [],
            id:-1,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        this.handleRefresh();
    }
    
    componentDidUpdate(){
        console.log("showCategory.cdu.id=> " + this.props.id);
        if(this.state.id != this.props.id){
            //enable new list
            
            //update the id
            this.setState({
                id:this.props.id,
                selectedList:this.props.list.concat(),
            });
        }

    }
     handleRefresh =async () => {
         console.log("happend! ");
        await http.get('/category/list',
            { headers: authHeader() })
            .then((response) => {
                if (response.data.length > 0)
                    this.setState({ list: response.data })
            }).catch(function (err) {
                console.log(err);
            });
    }
    
    handleDelete = (id) => {
        console.info('You clicked the delete icon.' + id);
        //TODO:handle delete category
    };
    handleClick = (id) => {
        console.info('You clicked the Chip.' + id);
        let temp = this.state.selectedList;
        if (!temp.includes(id)) {
            temp.push(id);
        }
        else {
            const removeIndex = temp.indexOf(id);
            if (removeIndex > -1) {
                temp.splice(removeIndex, 1);
            }
        }
        this.setState({ selectedList: temp });
        this.props.onCategoryListChanged(temp);
    };
    
    render() {
        const { classes } = this.props;
        const classesClicked = classes.clickedLabel;
        const classesNotClicked = classes.label;
        return (
            <div className={styles.chips}>
                <div className={classes.root}>
                
                    {this.state.list.map((item) =>
                <div key={item.id} >
                        <Chip
                            icon={<StarsIcon
                                style={{
                                    color:
                                        (this.state.selectedList.includes(item.id) ? 'blue' : 'gray')
                                }} />}
                            label={item.name}
                            clickable
                            onClick={() => this.handleClick(item.id)}
                            onDelete={() => this.handleDelete(item.id)}
                            classes={{
                                label: (
                                    this.state.selectedList.includes(item.id) ?
                                        classesClicked :
                                        classesNotClicked),
                            }}
                        />
                    </div>
                    )}
                
                </div>
                <Modals onRefresh={this.handleRefresh}></Modals>
            </div>
        );
    };
}
ShowCategory.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(style)(ShowCategory);