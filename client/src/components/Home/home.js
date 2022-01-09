
import CarouselUI from './../crouselUI/carouselUI';
import CardUIWrapper from './../cardUI/cardUIwrapper'
import GalleryUI from './../galleryUI/galleryUI';
import H3UI from './../h3UI/h3UI';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import EcoIcon from '@material-ui/icons/Eco';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Component } from 'react';
import http from './../../http-common';
import authHeader from "./../../services/auth-header";
import configurationService from "./../../services/configurationService";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      isLoaded:false,
      isPathLoaded:false,
      config:[],
      carousel:null,
      listOfPaths:[],
    };
  }

  componentDidMount() {
    http.post('/configuration/getAllConfiguratin',{headers:authHeader()})
        .then((response)=>{
            console.log(response.data);
            this.setState({config:response.data});
            this.setState({isLoaded:true});
            this.getCarouselUI(response.data);
        })
        .catch((err)=>{
            console.log(err);
        });
        
   }
   getCarouselUI(configs){
     console.log("Starting getting path-----------------------");
    let listOfPath=[];
    let ips=[];
    if (this.state.isLoaded){
      console.log("Starting getting path2-----------------------");
        configurationService.create(configs)
          .forEach(item => {
           ips.push(item.picture);
        });
        console.log("Starting getting path3-----------------------"+ips);
         http.post('/file/fileInfos',JSON.stringify(ips), { headers: authHeader()})
                .then(response => {
                    this.setState({listOfPaths:response.data})
                    this.setState({isPathLoaded:true});
                    console.log(response.data);
                }).catch((err) => {
                    console.log(err);
                    console.log("err");
                });
    }
   }
  render() {
    return (
      <>
        <section>
          <div className="row">
            <div className="col-sm-12 vh-55 col-xs-12 m-0 p-0">
              <CarouselUI listOfPaths={this.state.listOfPaths} isLoaded={this.state.isPathLoaded} config={configurationService.create(this.state.config)}></CarouselUI>
            </div>
          </div>
        </section>

        <section>
          <div className="row bg-light pt-3 pb-3">
            <div className="col-sm-12 col-xs-12 ">
              <span>
                <span className="pl-5">
                  <EcoIcon style={{ fontSize: "5vw" }}></EcoIcon>کیفیت بالا
                </span>
                <span className="pl-5">
                  <CameraRollIcon style={{ fontSize: "5vw" }}></CameraRollIcon> قیمت مناسب
                </span>
                <span className="pl-5">
                  <CameraEnhanceIcon style={{ fontSize: "5vw" }}></CameraEnhanceIcon> عکس سفارشی
                </span>
                <span className="pl-5">
                  <AddShoppingCartIcon style={{ fontSize: "5vw", fill: "black" }}></AddShoppingCartIcon>  تحویل سریع
                </span>
              </span>
            </div>
          </div>
          <div className="row pt-5 pb-2">
            <div className="col-sm-12 col-xs-12 ">
              <H3UI>دسته بندی محتوا</H3UI>
            </div>
            <CardUIWrapper></CardUIWrapper>
          </div>
        </section>

        <section>
          <div className="row pt-5 pb-5 bg-light">
            <div className="col-sm-12 col-xs-12">
              <H3UI>مجموعه های منتخب</H3UI>
              <GalleryUI></GalleryUI>
            </div>
            <div className="col-sm-12 col-xs-12"></div>
          </div>
        </section>
      </>
    )
  }
}