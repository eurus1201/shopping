import React, { Component } from "react";
import { Button , Col,Row } from 'react-bootstrap';
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
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
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
            <Row>
                <Col sm={8}>
                    <div style={styles.products}>
                        {products && products.map(product =>
                            <div className="thumbnail" style={styles.product} key={product.id}>
                                <img src={product.images[0]} alt={product.name} />
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