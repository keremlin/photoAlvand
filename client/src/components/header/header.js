import React from 'react';
import { setLanguage } from '../../actions/language';
import './header.css';
import ico from './dc.svg';
import {connect} from 'react-redux';
import { logout } from "./../../actions/auth";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import i18next from 'i18next';
import HUIT from '../h3UI/HUIT';
import http from './../../http-common';
import { useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import {
    Navbar,
    FormControl,
    Form,
    Button,
    Nav,
    NavDropdown,
} from 'react-bootstrap';
function Header(props) {
    const { dispatch } = props;
    const [lang, setLang] = useState("FA");
    const [listOfCategories,setCategories]=useState([" "]);
    const [loaded,setLoaded]=useState(false);
    useEffect(() => {
        console.log("*^^^^^^^^^^^^^^**********^^^^^^^^^^^");
            http.get('/category/getAllCategories')
                .then((response) => {
                    setCategories(response.data);
                    setLoaded(true);
                })
                .catch((err) => {
                    console.log(err);
                });
    },[loaded]);
    const changeLanguage = () => {
        let currentLang = '';

        if (i18next.language.startsWith('fa'))
            currentLang = 'en';
        else if (i18next.language.startsWith('en'))
            currentLang = 'fa';
        else
            currentLang='en';

        dispatch(setLanguage());
        i18next.changeLanguage(currentLang, (err, t) => {
            t(currentLang);
            setLang(currentLang.toUpperCase());
            console.log(i18next.languages);
        });
    }
    
    function logOut(target) {
        target.preventDefault();
        props.dispatch(logout());
    };
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="bg-dark font-menu">
                <div className="Space">

                </div>
                <Navbar.Brand href="#home">
                    <img src={ico} width="50" height="50" className="d-inline-block align-top" alt="Events Panel"></img>
                    <span>فتوالوند</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <div className="Space"></div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav variant="pills">
                        <Nav.Link><Link className='react-router-link' to="/"><HomeIcon fontSize="small" /><HUIT>home</HUIT></Link> </Nav.Link>
                        <Nav.Link><Link  className='react-router-link' to="/profile"><ShoppingBasketIcon fontSize="small" /><HUIT>cart</HUIT></Link> </Nav.Link>
                        {!props.isLoggedIn ?
                            <Nav.Link className="nav-link" href="/login"><VpnKeyIcon fontSize="small" /><HUIT>login</HUIT></Nav.Link> :
                            <Nav.Link className="nav-link" href="/logout" onClick={logOut}><LockOpenIcon fontSize="small" /> <HUIT>logout</HUIT></Nav.Link>
                        }
                        <NavDropdown title={i18next.t('gallery')} id="collasible-nav-dropdown">
                            {(loaded===true ? listOfCategories.map((item, index) => (
                                (typeof item !== "undefined" && item !== null?<NavDropdown.Item href={"/search/"+item.id} key={index}>{item.name}</NavDropdown.Item>:<></>)
                            )) : <></>)}
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link href="/categories"><HUIT>collections</HUIT></Nav.Link>
                        {props.isAdmin ?
                            <Nav.Link><Link  className='react-router-link' to="/admin"><SettingsApplicationsIcon fontSize="small" /> <HUIT>admin</HUIT> </Link> </Nav.Link> : <></>}

                        <Form inline>
                            <FormControl type="text" placeholder={i18next.t('searchImage')} className="mr-sm-2" />
                            <Button variant="outline-info"><HUIT>search</HUIT></Button>
                        </Form>
                        <Nav.Link  onClick={changeLanguage}><span className='App'>{lang}</span> <KeyboardHideIcon/>  </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
<Outlet/>

        </>
        );
}
function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    const { language } = state.language;
    const isAdmin = (state.auth.user && state.auth.user.roles ? state.auth.user.roles.includes('ROLE_ADMIN') : false);
    return {
        isLoggedIn,
        message,
        isAdmin
    };
}
  
  export default connect(mapStateToProps)(Header);
  