import React, { Component } from 'react';
import { Table, Button, Panel } from 'react-bootstrap';
import { removeFromCart } from '../_actions';
import { connect } from 'react-redux';
import { ProductPage} from './products.page1';


const styles = {
    footer: {
        fontWeight: 'bold'
    }
}


const ShoppingCart = (props) => {

    // render() {
    return (
        <div>
            {/* // <Panel header="Shopping Cart"> */}
            <Table fill>
                <tbody>
                    {props.cart.map(product =>
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td className="text-right">${product.price}</td>
                            <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => props.removeFromCart(product)}></Button></td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" style={styles.footer}>
                            Total: ${props.cart.reduce((sum, product) => sum + product.price, 0)}
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart(cart) {
            dispatch(removeFromCart(cart));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

