import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import "./checkout.styles.scss";

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">Description</div>
                <div className="header-block">Quantity</div>
                <div className="header-block">Price</div>
                <div className="header-block">Remove</div>
            </div>

            {cartItems.map((cartItem) => (
                <CheckoutItem cartItem={cartItem} key={cartItem.id} />
            ))}

            <span className="total">Total: ${cartTotal}</span>
        </div>
    );
};

export default Checkout;
