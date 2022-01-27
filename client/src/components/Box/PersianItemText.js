import * as React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

export default function PersianItemText(props){
    return(
        <ListItemText primary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline',fontFamily:'Yekan',fontWeight:'bold' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {props.primary}  
              </Typography>
            </React.Fragment>
          } secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline',fontFamily:'Yekan' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {props.secondary}
              </Typography>
            </React.Fragment>
          } sx={{textAlign:'right'}} />
    )
}