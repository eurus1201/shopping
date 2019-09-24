import React,{useState} from 'react';
import { connect } from "react-redux";
import { ProductPage} from "../_pages";
import ShoppingCart from '../_pages/shoppingCart'
import { Navbar , Row, Col } from "react-bootstrap";



const MainPage = ({user}) => {



    return <div>
        <Navbar inverse staticTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">welcome</a>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>

        <div>
            <Row>
                <Col sm={8}>
                    <ProductPage />
                </Col>
                <Col sm={4}>
                    <ShoppingCart />
                </Col>
            </Row>
        </div>
    </div>

}

const mapStateToProps = state => {
    const {user} = state.authentication;
    return { user };
};
const ConnectedMainPage = connect(mapStateToProps)(MainPage);

export {ConnectedMainPage as MainPage};