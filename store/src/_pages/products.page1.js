import React, { Component } from "react";
import { Button, Col, Row, Navbar } from 'react-bootstrap';
import { connect } from "react-redux";
import { getproducts, addToCart } from "../_actions";
import { withRouter } from "react-router-dom";
import ShoppingCart from "./shoppingCart"

const styles = {
    products: {
        display: 'flex',
        alignItems: 'stretch',
        flexWrap: 'wrap',
    },
    product: {
        width: '20vw',
    
        margin: 10
    },
    images: {
        width: '16vw',
        height: '15vw',
        padding: '1vw',
        alignItems: 'center',
        margin: 'auto', 
        display: 'flex',
        justifyContent: 'center',
    
    }
};


class ProductPage extends Component {

    componentDidMount() {

        this.props.dispatch(getproducts());
    }

    render() {
        const {
            products,
            request
        } = this.props;
        
        return (
            request ? 'loading ...' :
            <div>
         
            <Row>
                <Col sm={8}>
                    <div style={styles.products}>
                        {products && products.map(product =>
                            <div className="thumbnail" style={styles.product} key={product.id}>
                                <div style={styles.images}>
                                    {product.images.length > 0 ? (<img src={product.images[0].src} alt={product.name} style={styles.images} />) : ('')}
                                </div>
                                <div className="caption">
                                    <h4>{product.name}</h4>
                                    <p>
                                        <Button bsStyle="primary" onClick={() => this.props.addToCart(product)} role="button" e>${product.price} </Button>
                                    </p>
                                </div>
                            </div>
                        )}

                    </div>
                    </Col>
                    <Col sm={4}>
                        <div>
                        <ShoppingCart />
                        </div>
                    </Col>

            </Row>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        request: state.products.request
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart(product) {
            dispatch(addToCart(product));
        },

        dispatch
    }
}




const ConnectedProductsPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPage));
export { ConnectedProductsPage as ProductPage }