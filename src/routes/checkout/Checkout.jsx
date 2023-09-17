import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import {
    HeaderBlock,
    CheckoutContainer,
    CheckoutHeader,
    Total,
    CallToActionToShop,
    CallToActionSignIn,
    AreYouLost,
    CallToActionContainer,
    CallToActionHome,
} from "./checkout.styles";

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const onNavigateShopHandler = () => navigate("/shop");
    const onNavigateSignInHandler = () => navigate("/auth");
    const onNavigateHomeHandler = () => navigate("/");

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>Product</HeaderBlock>
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
                <>
                    <Total>Your cart is empty</Total>
                    <CallToActionContainer>
                        <AreYouLost>Are you lost?</AreYouLost>
                        <CallToActionToShop onClick={onNavigateShopHandler}>
                            Shop
                        </CallToActionToShop>
                        <CallToActionSignIn onClick={onNavigateSignInHandler}>
                            Sign in
                        </CallToActionSignIn>
                        <CallToActionHome onClick={onNavigateHomeHandler}>
                            Home
                        </CallToActionHome>
                    </CallToActionContainer>
                </>
            )}
        </CheckoutContainer>
    );
};

export default Checkout;
