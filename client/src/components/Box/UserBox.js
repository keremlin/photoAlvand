import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import PersianItemText from './PersianItemText';

export default function UserBox(props) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',margin:'auto' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <PersianItemText primary="مشخصات" secondary={props.user.firstName + ' '+ props.user.lastName}/>
        </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <PersianItemText primary="تماس" secondary={props.user.phone}></PersianItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <PersianItemText primary="آدرس" secondary={props.user.email}></PersianItemText>
      </ListItem>
    </List>
  );
}