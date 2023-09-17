import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import {
    HeaderBlock,
    CheckoutContainer,
    CheckoutHeader,
    Total,
} from "./checkout.styles";

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>Description</HeaderBlock>
                <HeaderBlock>Quantity</HeaderBlock>
                <HeaderBlock>Price</HeaderBlock>
                <HeaderBlock>Remove</HeaderBlock>
            </CheckoutHeader>

            {cartItems.map((cartItem) => (
                <CheckoutItem cartItem={cartItem} key={cartItem.id} />
            ))}
            {cartItems.length > 0 ? (
                <Total>Total: ${cartTotal}</Total>
            ) : (
                <Total>Your cart is empty</Total>
            )}
        </CheckoutContainer>
    );
};

export default Checkout;
