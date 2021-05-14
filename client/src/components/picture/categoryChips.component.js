import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
          margin: '1.5px'
        },fontFamily: 'Yekan',
    },
    label: { color: 'black', fontFamily: 'Yekan' },
    clickedLabel: { color: 'white', fontFamily: 'Yekan' },
    chips:{direction:'ltr'},
}));

export default function CategoryChips(props) {
  const classes = useStyles();
const cat=(props.categories?props.categories:[1]);
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.chips}>
      <div className={classes.root}>
        {cat.map((item,index)=>
          <Chip
          key={index}
        label={item.name}
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<SearchIcon/>}
        classes={{
            label:
                    classes.clickedLabel
        }}
      />
        )}
      </div>
    </div>
  );
}
