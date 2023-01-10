import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

import NavBar from "./components/NavBar";

function App() {

    let imgWidth;
    imgWidth = {
        width: "100%"
    };

    return (
        <div className="App">

            {/* 네비게이션 바 */}
            <Navbar bg="dark" variant="dark">
                <Container>

                    {/* 로고 이미지 삽입 */}
                    <Navbar.Brand href="/">LOGO</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav className="me-auto">
                            
                            {/* 회사 소개 */}
                            <Nav.Link href="about">About</Nav.Link>
                            
                            {/* 제품 이미지 */}
                            <Nav.Link href="wayToCome">Way to come</Nav.Link>
                            <NavDropdown title="product" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/product/1">product-1</NavDropdown.Item>
                                <NavDropdown.Item href="/product/2">product-2</NavDropdown.Item>
                                <NavDropdown.Item href="/product/3">product-3</NavDropdown.Item>
                                {/*<NavDropdown.Divider />*/}
                            </NavDropdown>
                        </Nav>
                    </Nav>

                </Container>
            </Navbar>


            {/* Route 보이는 부분 */}
            <Container>
                <Routes>
                    <Route path="/" element={<h1>main</h1>}></Route>
                    <Route path="/about" element={<h1>about</h1>}></Route>
                    <Route path="/wayToCome" element={<h1>way to come</h1>}></Route>
                    <Route path="/product/1" element={<img style={imgWidth} src={'/images/product-1.jpg'} alt={'product1'}/>}></Route>
                    <Route path="/product/2" element={<img style={imgWidth} src={'/images/product-2.jpg'} alt={'product2'}/>}></Route>
                    <Route path="/product/3" element={<img style={imgWidth} src={'/images/product-3.jpg'} alt={'product3'}/>}></Route>
                </Routes>
            </Container>

        </div>
    );
}

export default App;
