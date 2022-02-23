import * as React from 'react';
import Slide from '@material-ui/core/Slide';
import Loading from '../loading/loading';
import { useState, useEffect } from 'react';

export default function Slider(props) {
  const [triger, SetTriger] = useState(false);
  useEffect(() => {
    if(props.isLoaded)
      setTimeout(() => SetTriger(true), props.timeOut); 
      else
      SetTriger(false);
  });
  return (
    <>
      <Loading show={!triger} />
      <Slide  direction="up" in={triger} timeout={props.sliderTime} mountOnEnter >
        <div>
          {props.children}
        </div>
      </Slide>
    </>
  );
}