import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { useState, useEffect } from 'react';
import http from './../../http-common';
import authHeader from "./../../services/auth-header";
import { Link } from 'react-router-dom';

export default function GalleryUI() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    if (!isLoaded)
      http.get('/category/getRandomCategory/12',
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
          category.map((item, key) => (
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
          ))
          : 'خطا در ارتباط')
      }
    </ImageList>
  );
}

