
import CarouselUI from './../crouselUI/carouselUI';
import CardUIWrapper from './../cardUI/cardUIwrapper'
import GalleryUI from './../galleryUI/galleryUI';
import H3UI from './../h3UI/h3UI';
import { Component } from 'react';
import http from './../../http-common';
import authHeader from "./../../services/auth-header";
import configurationService from "./../../services/configurationService";
import Grows from './../effects/Grows';
import { connect } from 'react-redux';
import H3UIT from '../h3UI/H3UIT';

class Home extends Component {
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
            this.setState({config:response.data});
            this.setState({isLoaded:true});
            this.getCarouselUI(response.data);
        })
        .catch((err)=>{
            console.log(err);
        });
        
   }
   getCarouselUI(configs){
    let ips=[];
    if (this.state.isLoaded){
        configurationService.create(configs)
          .forEach(item => {
           ips.push(item.picture);
        });
         http.post('/file/fileInfos',JSON.stringify(ips), { headers: authHeader()})
                .then(response => {
                    this.setState({listOfPaths:response.data})
                    this.setState({isPathLoaded:true});
                    console.log(this.state.listOfPaths);
                }).catch((err) => {
                    console.log(err);
                });
    }
   }
  render() {
    let checked=true;
    return (
      <>
        <section>
          <div className="row">
            <div className="col-sm-12 vh-55 col-xs-12 m-0 p-0">
              <CarouselUI listOfPaths={this.state.listOfPaths} isPathLoaded={this.state.isPathLoaded} isLoaded={this.state.isPathLoaded} config={configurationService.create(this.state.config)}></CarouselUI>
            </div>
          </div>
        </section>

        <section>
          <div className="row bg-light pt-3 pb-3">
            <div className="col-sm-12 col-xs-12 ">
              <Grows></Grows>
            </div>
          </div>
          <div className="row pt-5 pb-2">
            <div className="col-sm-12 col-xs-12 ">
              
                  <H3UIT>Categories</H3UIT>
              
            </div>
            <CardUIWrapper></CardUIWrapper>
          </div>
        </section>
        <section>
          <div className="row pt-5 pb-5 bg-light">
            <div className="col-sm-12 col-xs-12">
              <H3UIT>selections</H3UIT>
              <GalleryUI></GalleryUI>
            </div>
            <div className="col-sm-12 col-xs-12"></div>
          </div>
        </section>
      </>
    )
  }
}
export default connect((state)=>state.language)(Home);