import React from 'react';
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
import { useState } from 'react';
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
    const [lang, setLang] = useState("FA");
    const changeLang = () => {
        let currentLang = '';

        if (i18next.language.startsWith('fa'))
            currentLang = 'en';
        else if (i18next.language.startsWith('en'))
            currentLang = 'fa';

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
                        <Nav.Link><Link className='react-router-link' to="/"><HomeIcon fontSize="small" /> صفحه اصلی </Link> </Nav.Link>
                        <Nav.Link><Link  className='react-router-link' to="/profile"><ShoppingBasketIcon fontSize="small" /> سبد خرید </Link> </Nav.Link>
                        {!props.isLoggedIn ?
                            <Nav.Link className="nav-link" href="/login"><VpnKeyIcon fontSize="small" />ورود</Nav.Link> :
                            <Nav.Link className="nav-link" href="/logout" onClick={logOut}><LockOpenIcon fontSize="small" /> خروج</Nav.Link>
                        }
                        <NavDropdown title="گالری" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">لیگ برتر</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">لیگ دسته یک</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">جام جهانی</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">جام ملت های آسیا</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">جام ملت های آسیا</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">جام ملت های آسیا</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features2">گالری ها</Nav.Link>
                        {props.isAdmin ?
                            <Nav.Link><Link  className='react-router-link' to="/admin"><SettingsApplicationsIcon fontSize="small" /> ادمین </Link> </Nav.Link> : <></>}

                        <Form inline>
                            <FormControl type="text" placeholder="جستجو عکس" className="mr-sm-2" />
                            <Button variant="outline-info">جستجو</Button>
                        </Form>
                        <Nav.Link  onClick={changeLang}><span className='App'>{lang}</span> <KeyboardHideIcon/>  </Nav.Link>
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
    const isAdmin = (state.auth.user && state.auth.user.roles ? state.auth.user.roles.includes('ROLE_ADMIN') : false);
    return {
        isLoggedIn,
        message,
        isAdmin
    };
}
  
  export default connect(mapStateToProps)(Header);
  