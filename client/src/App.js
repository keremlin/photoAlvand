import React from 'react';
import './App.css';
import './font.css';
import CarouselUI from './components/crouselUI/carouselUI';
import CardUI from './components/cardUI/cardUI';
import GalleryUI from './components/galleryUI/galleryUI';
import Header from './components/header/header';
import H3UI from './components/h3UI/h3UI';
import Footer from './components/Footer/footer';

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
                <EcoIcon style={{ fontSize: "5vw" }}></EcoIcon>کیفیت بالا
              </span>
                <span class="pl-5">
                  <CameraRollIcon style={{fontSize: "5vw"  }}></CameraRollIcon> قیمت مناسب
              </span>
                <span class="pl-5">
                  <CameraEnhanceIcon style={{ fontSize: "5vw"  }}></CameraEnhanceIcon> عکس سفارشی
              </span>
                <span class="pl-5">
                  <AddShoppingCartIcon style={{ fontSize: "5vw" , fill: "black" }}></AddShoppingCartIcon>  تحویل سریع
              </span>
              </span>
            </div>
          </div>
          <div class="row pt-5 pb-2">
            <div class="col-sm-12 col-xs-12 ">
              <H3UI>دسته بندی محتوا</H3UI>
            </div>
            <div class="col-sm-2  col-xs-12  col-centered pb-3">
              <CardUI></CardUI>
            </div>
            <div class="col-sm-2  col-xs-12  col-centered pb-3">
              <CardUI></CardUI>
            </div>
            <div class="col-sm-2  col-xs-12 mr-3 col-centered pb-3">
              <CardUI></CardUI>
            </div>
            <div class="col-sm-2  col-xs-12 mr-3 col-centered pb-3">
              <CardUI></CardUI>
            </div>
            <div class="col-sm-2  col-xs-12 mr-3 col-centered pb-3">
              <CardUI></CardUI>
            </div>
          </div>
        </section>

        <section>
          <div className="row pt-5 pb-5 bg-light">
            <div className="col-sm-12 col-xs-12">
            <H3UI>مجموعه های منتخب</H3UI>
              <GalleryUI></GalleryUI>
            </div>
            <div class="col-sm-12 col-xs-12"></div>
          </div>

        </section>

      
      <footer>
        <Footer></Footer>
      </footer>
      </div>
    </div>
  );
}

export default App;
