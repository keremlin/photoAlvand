import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import './font.css';
import CarouselUI from './crouselUI/carouselUI';
import CardUI from './cardUI/cardUI';
import GalleryUI from './galleryUI/galleryUI';
import Header from './header/header';
import babataher from './img/babataher.jpg';
import sofal from './img/sofal2.jpg';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import CameraIcon from '@material-ui/icons/Camera';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import EcoIcon from '@material-ui/icons/Eco';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container-fluid">
        <section>
          <div class="row">
            <div class="col-sm-12 vh-55 col-xs-12 m-0 p-0"><CarouselUI></CarouselUI></div>
          </div>
        </section>

        <section>
        <div class="row bg-light pt-3 pb-3">
          <div class="col-sm-12 col-xs-12 ">
            <span>
              
              <span class="pl-5">
                <EcoIcon style={{ fontSize: 60 }}></EcoIcon>کیفیت بالا
              </span>
              <span class="pl-5">
               <CameraRollIcon style={{ fontSize: 60 }}></CameraRollIcon> قیمت مناسب
              </span>
              <span class="pl-5">
               <CameraEnhanceIcon style={{ fontSize: 60 }}></CameraEnhanceIcon> عکس سفارشی
              </span>
              <span class="pl-5">
               <AddShoppingCartIcon style={{ fontSize: 60,fill: "black" }}></AddShoppingCartIcon>  تحویل سریع
              </span>
              
            </span>
          </div>
          <div class="col-sm-12 col-xs-12">
            <h1 class="p-4">دسته بندی محتوی</h1>
          </div>
            <div class="col-sm-2  col-xs-12 m-0  col-centered">
              <CardUI></CardUI>
              </div>
            <div class="col-sm-2  col-xs-12  col-centered">
              <CardUI></CardUI>
              </div>
            <div class="col-sm-2  col-xs-12 mr-3 col-centered">
              <CardUI></CardUI>
              </div>
            <div class="col-sm-2  col-xs-12 mr-3 col-centered">
              <CardUI></CardUI>
              </div>
            <div class="col-sm-2  col-xs-12 mr-3 col-centered">
              <CardUI></CardUI>
              </div>
          </div>
        </section>

        <section>
          <div className="row mt-2 pl-2 pr-2">
            <div className="col-sm-12 col-sm-12">
              <GalleryUI></GalleryUI>
            </div>
          </div>

        </section>

      </div>
      <footer>
        <div class="row footerUI pt-5">
          <div class="col-sm-12 col-xs-12 minHeight200 bg-dark">
            <div class="row">
              <div class="col-sm-3">لینکهای مفید</div>
              <div class="col-sm-3">درباره ما</div>
              <div class="col-sm-3">شیکه های اجمتماعی</div>
              <div class="col-sm-3"></div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-xs-12">
                Copyright 2020 PhotoAlvand
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
