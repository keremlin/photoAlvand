import * as React from 'react';
import HUIT from '../h3UI/HUIT';
import Grow from '@material-ui/core/Grow';
import EcoIcon from '@material-ui/icons/Eco';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const icon = (

  <span>
    <span className="pl-5">
      <EcoIcon style={{ fontSize: "3vw" }}></EcoIcon><HUIT>bestQuality</HUIT>
    </span>
    <span className="pl-5">
      <CameraRollIcon style={{ fontSize: "3vw" }}></CameraRollIcon> <HUIT>goodPrice</HUIT>
    </span>
    <span className="pl-5">
      <CameraEnhanceIcon style={{ fontSize: "3vw" }}></CameraEnhanceIcon> <HUIT>orderedPicture</HUIT>
    </span>
    <span className="pl-5">
      <AddShoppingCartIcon style={{ fontSize: "3vw", fill: "black" }}></AddShoppingCartIcon>  <HUIT>expressPrepration</HUIT>
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
