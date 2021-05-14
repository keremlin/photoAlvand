import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import styles from './admin.module.css';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  boxShadow:{
    
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop:100,
    maxHeight:'450px',
    borderTop:"1px lightgray solid",
    borderBottom:"1px gray solid",
    boxShadow:"10px,10px"
  },
  
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
  },
  
}));

export default function PermanentDrawerRight() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />    
      <div className={classes.boxShadow}>
      <Drawer
        
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar}>
        <div className={styles.cardTitle}>بارگزاری فایل</div>
        </div>
        <Divider />
        <List>
          {['بارگزاری عکس', 'مدیریت عکس', 'مدیریت فروش', 'مدیریت سایت'].map((text, index) => (
              <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText
                      disableTypography
                      primary={text}
                  />
              </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['کاربران', 'گزارش مالی', 'راهنما'].map((text, index) => (
              <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText
                      disableTypography
                      primary={text}
                  />
              </ListItem>
          ))}
        </List>
      </Drawer>
      </div> 
    </div>
  );
}
