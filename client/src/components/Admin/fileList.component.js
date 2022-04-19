import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItem:{
    border:'1px gray solid',
    borderRadius:'4px',
    backgroundColor:'lightgray',
  },large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function CheckboxListSecondary(props) {
  const classes = useStyles();
  //const [checked, setChecked] = React.useState([1]);
  const [selected , setSelected]=React.useState(-1);

  const handleClick=(index,id)=>()=>{
    setSelected(index);
    props.onIndexChange(index,id);
  }
  const handleDelete=(id)=>()=>{
    props.onDeleteFileClicked(id);
  }

  return (
    <List dense className={classes.root}>
      {props.list.map((value, index) => {
        const labelId = `checkbox-list-secondary-label-${index}`;
        return (
          <div key={index} className={selected === index ? classes.listItem : null} onClick={handleClick(index, value.id)} >
            <ListItem button>
              <ListItemAvatar>
                <Avatar
                  className={classes.large}
                  alt={`Avatar n°${index + 1}`}
                  src={value.url}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={value.name} />

              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={handleDelete(value.id)}>
                  <DeleteIcon  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </div>
        );
      })}
    </List>
  );
}
