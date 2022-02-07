import React, { Component } from 'react';
import { connect } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import './font.css'; 
import Header from './components/header/header';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import Login from "./components/login.component";
import Register from "./components/register.component";

import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/Admin/board-admin.component";
import SiteManagement from "./components/Admin/siteManagement.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import Picture from './components/picture/picture.component';
import { history } from './helpers/history';
import Search from './components/search/search.component';


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
       <BrowserRouter>
        <div className="App">
          <Header currentUser={currentUser} showModeratorBoard={showModeratorBoard} showAdminBoard={showAdminBoard}></Header>
          <div className="container-fluid">
     
      
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/register" element={<Register/>} />
              <Route exact path="/profile" element={<Profile/>} />
              <Route path="/user" element={<BoardUser/>} />
              <Route path="/mod" element={<BoardModerator/>} />
              <Route path="/admin" element={<BoardAdmin/>} />
              <Route path="/siteManagement" element={<SiteManagement/>} />
              <Route path="/picture/:pictureId" element={<Picture/>} />
              <Route path="/search/:categoryId" element={<Search/>}/>
             
           </Routes>
     

            <footer>
              <Footer></Footer>
            </footer>
          </div>
        </div>
        </BrowserRouter>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(App);
