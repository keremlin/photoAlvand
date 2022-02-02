import * as React from 'react';

import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import EcoIcon from '@material-ui/icons/Eco';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const icon = (

  <span>
    <span className="pl-5">
      <EcoIcon style={{ fontSize: "3vw" }}></EcoIcon>کیفیت بالا
    </span>
    <span className="pl-5">
      <CameraRollIcon style={{ fontSize: "3vw" }}></CameraRollIcon> قیمت مناسب
    </span>
    <span className="pl-5">
      <CameraEnhanceIcon style={{ fontSize: "3vw" }}></CameraEnhanceIcon> عکس سفارشی
    </span>
    <span className="pl-5">
      <AddShoppingCartIcon style={{ fontSize: "3vw", fill: "black" }}></AddShoppingCartIcon>  تحویل سریع
    </span>
  </span>

);

export default function Grows() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => true);
  };
setTimeout(handleChange,2000) 
  return (
    <Grow
      in={checked}
      style={{ transformOrigin: '0 0 0' }}
      {...(checked ? { timeout: 1000 } : {})}
    >
      {icon}
    </Grow>
  //   <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
  //   {icon}
  // </Slide>
  );
}
