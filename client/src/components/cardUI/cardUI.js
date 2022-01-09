import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useEffect, useState } from 'react';
import http from './../../http-common';
import authHeader from "./../../services/auth-header";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    flexGrow: 1,
    padding: theme.spacing(1),
    margin: "auto"

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    fontFamily:
      'Yekan'
    ,
    fontSize: '20px', color: 'black'
  },
  desc: {
    fontFamily:
      'Yekan'
    ,
    fontSize: '15px', color: 'gray'
  }
}));

export default function CardUI(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [category, setCategory] = useState({ category: { name: 'جدید', description: 'جدید' }, randomeImagePath: '' });
  const [isLoaded, setIsLoaded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (!isLoaded && props && props.categoryId)
      http.get('/category/withRandomPictureAndFindById/' + props.categoryId,
        { headers: authHeader() })
        .then((response) => {
          if (response.data != null) {
            setCategory(response.data);
            setIsLoaded(true);
          }
        }).catch(function (err) {
          console.log(err);
        });
  }
  );
  return (
    <>
      {isLoaded ? (
        <Link to={"/search/" + category.category.id} >
          <Card className={classes.root} style={{ width: '250px' }} >

            <CardMedia
              className={classes.media}
              image={category.randomeImagePath}
              title={category.category.name}
            />
            <CardContent>
              <Typography className={clsx(classes.title)} variant="body2" color="textSecondary" component="p">
                {category.category.name}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography className={clsx(classes.desc)} paragraph>{category.category.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Link>
      ) : <></>}
    </>
  );
}