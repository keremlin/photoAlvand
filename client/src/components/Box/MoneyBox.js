import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PersianItemText from './PersianItemText';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import CreditCardIcon from '@material-ui/icons/CreditCard';

export default function MoneyBox(props) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',margin:'auto' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CreditCardIcon/>
          </Avatar>
        </ListItemAvatar>
        <PersianItemText primary="مبلغ قابل پرداخت" secondary={props.sum}/>
        </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccessAlarmIcon />
          </Avatar>
        </ListItemAvatar>
        <PersianItemText primary="زمان آماده سازی" secondary="۱۲ روزکاری"></PersianItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalShippingIcon />
          </Avatar>
        </ListItemAvatar>
        <PersianItemText primary="طریقه ی تحویل" secondary="فایل - ایمیل"></PersianItemText>
      </ListItem>
    </List>
  );
}