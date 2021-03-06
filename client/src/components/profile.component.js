import React, { Component } from "react";
import { Navigate } from 'react-router-dom';
import { connect } from "react-redux";
import authHeader from "../services/auth-header";
import http from './../http-common';
import DenseTable from "./table/DenseTable";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import Popup from './popup/Popup';
import UserBox from './Box/UserBox'
import MoneyBox from "./Box/MoneyBox";
import Slider from './effects/Slider';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      userKart: null,
      show:false,
      checked:false,
      userRules:"",
      sum:0,
      user:null,
    }

  }
  componentDidMount() {
    console.log(this.props);
    if (!this.state.isLoaded)
      this.loadKart();
  }
  calculateSum=(list)=>{
    let sum=0;
    list.forEach((item)=>{sum+= item.formprice});
    return sum;
  }
  showModal=(e)=>{e.preventDefault();this.setState({show:true});}
  handleClose=()=>this.setState({show:false})
  handleSave=()=>this.setState({checked:true,show:false})
  handleCheck=()=>this.setState({checked:!this.state.checked})
  deleteRow = (id) => {
    http.post('/order/deleteOrder',JSON.stringify(id) ,{ headers: authHeader() })    
    .then((data)=>{
      console.log(data);
      this.loadKart();
    })
    .catch((e)=>{
      console.log('cannot delete order');
      console.log(e);
    })
  }
  loadKart() {
      http.get('/order/getUserOrders', { headers: authHeader() })
        .then((response) => {
          console.log(response.data);
          this.setState({ userKart: response.data.files });
          this.setState({ sum: this.calculateSum(response.data.files) });
          this.setState({ userRules: response.data.userRules });
          this.setState({ isLoaded: true });
          this.setState({ user: response.data.user });
        })
        .catch((err => {
          console.log(err);
        }));
  }

  render() {
    const { user: currentUser } = this.props;
    // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    if (!currentUser) {
       return <Navigate replace to="/login" />;
    }

    return (
      <Slider isLoaded={true} timeOut={500} sliderTime={700}>
      <div className="container profile-bg">
         <div className="row">
          <div className="col-sm-12">
            <header className="jumbotron">
          <h1>
            <ShoppingBasketIcon></ShoppingBasketIcon> ?????? ????????
          </h1>

          <p>
            ?????????? ?????????? <strong>{currentUser.username}</strong>
          </p>
        </header>
          </div>
        </div>
        {(this.state.user != null ?
          <div className="row margin-but">
            <div className="col-sm-6">
              <UserBox user={this.state.user} />
            </div>
            <div className="col-sm-6">
              <MoneyBox sum={this.state.sum} />
            </div>
          </div>
          : <></>)}
        <div className="row">
          <div className="col-sm-12">
        <div>
          {(this.state.isLoaded ?
            <DenseTable deleteRow={this.deleteRow} rows={this.state.userKart}></DenseTable>
            :
            <CircularProgress color="secondary" />)}
            <div>
              <Checkbox checked={this.state.checked} 
                onClick={this.handleCheck}
                // onChange={this.handleSave} 
                inputProps={{ 'aria-label': 'controlled' }}/>
                  <span className="underLine" ><a href="/profile" onClick={this.showModal}>???????????? ???? ???????????? ???????? ???? ?? ???????? ????????</a></span>
            </div>
        
            
          <Button variant="contained" endIcon={<ShoppingBasketIcon/>} sx={{fontFamily:'Yekan'}}>
            ????????????&nbsp;&nbsp;
          </Button>
        </div>
        <Popup show={this.state.show} heading={""} body={this.state.userRules}
                    close={"????????????"} save={"???????? ????????"} handleClose={this.handleClose} handleSave={this.handleSave}>
        </Popup>
          </div>
        </div>
      </div>
      </Slider>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);
