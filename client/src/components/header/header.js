import React from 'react';
import './header.css';
import ico from './dc.svg';
import {
    Navbar,
    InputGroup,
    FormControl,
    Form,
    Button,
    Nav,
    NavDropdown,
} from 'react-bootstrap';
export default function Header() {
    return (
        <>

            <Navbar collapseOnSelect expand="lg" variant="dark" className="bg-dark">
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
                        <Nav.Link href="#features">صفحه اصلی</Nav.Link>
                        <Nav.Link href="#pricing">کیف پول</Nav.Link>
                        <Nav.Link href="#features1">ورود</Nav.Link>
                        <NavDropdown title="گالری" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">لیگ برتر</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">لیگ دسته یک</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">جام جهانی</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    
                        
                        <Nav.Link href="#features2">آخرین گالری ها</Nav.Link>
                        <Nav.Link href="#features3">لیگ برتر </Nav.Link>
                        <Nav.Link href="#features4"> جام حذفی</Nav.Link>
                        <Nav.Link href="#features5"> جام جهانی</Nav.Link>
                        <Nav.Link href="#features6"> جام ملت های آسیا</Nav.Link>
                        <Form inline>
      <FormControl type="text" placeholder="جستجو عکس" className="mr-sm-2" />
      <Button variant="outline-info">جستجو</Button>
    </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>);
}