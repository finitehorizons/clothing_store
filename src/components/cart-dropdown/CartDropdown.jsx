import Button from "../button-component/Button";
import "./cart-dropdown.styles.jsx";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/CartItem";
import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage,
    CartTotal,
} from "./cart-dropdown.styles.jsx";
import {
    selectCartItems,
    selectCartTotal,
} from "../../store/cart/cart.selector";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    };
    return (
        <CartDropdownContainer data-component="cart-dropdown">
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
            <CartTotal>
                <span>Total:</span> ${cartTotal}
            </CartTotal>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
