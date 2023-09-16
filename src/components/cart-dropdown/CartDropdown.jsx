import Button from "../button-component/Button";
import "./cart-dropdown.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/CartItem";
import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    };
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <EmptyMessage>
                        <p>Your cart is empty</p>
                    </EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
