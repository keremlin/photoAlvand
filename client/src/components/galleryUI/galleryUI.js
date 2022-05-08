import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { useState, useEffect } from 'react';
import http from './../../http-common';
import authHeader from "./../../services/auth-header";
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function GalleryUI(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    let categoryUrl='/category/getRandomCategory/12';
    if( props.url!==undefined && props.url!=="")
      categoryUrl=props.url;
    if (!isLoaded)
      http.get(categoryUrl,
        { headers: authHeader() })
        .then((response) => {
          if (response.data != null) {
            setCategory(response.data);
            setIsLoaded(true);
          }
        }).catch(function (err) {
          setIsLoaded(false);
          console.log(err);
        });

  }, [category,isLoaded]);
  let colsNumber = 5;
  if (window.innerWidth < 479)
    colsNumber = 2;
  else
    colsNumber = 4;
  return (

    <ImageList variant="masonry" cols={colsNumber} gap={2} >
      {
        (isLoaded ?
          category.map((item, key) => (typeof item !== "undefined" && item !== null?
            <Link key={key} to={"/search/" + item.category.id}>
              <ImageListItem >
                <img
                  srcSet={`${item.randomeImagePath}?w=248&fit=crop&auto=format 1x,
                ${item.randomeImagePath}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.category.name}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{
                    fontFamily: 'Yekan',
                  }}
                  title={item.category.name}
                  subtitle={item.category.description}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.category.name}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Link>
          :<></>))
          :<span className="marginAuto"><CircularProgress color="secondary"/> سعی در برقراری ارتباط</span>)
      }
    </ImageList>
  );
}

