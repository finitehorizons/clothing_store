import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import PaymentForm from "../../components/payment-form/PaymentForm";

import {
    selectCartTotal,
    selectCartItems,
} from "../../store/cart/cart.selector";

import {
    Container,
    CheckoutContainer,
    Total,
    CallToActionToShop,
    CallToActionSignIn,
    CallToActionContainer,
    CallToActionHome,
    CheckoutCTA,
    CheckoutTitle,
    CheckoutTotalItems,
    CheckoutArrow,
    CheckoutCartDetails,
    CheckoutWrapper,
    CheckoutItemDetails,
    Summary,
    Empty,
} from "./checkout.styles";

import { RiArrowGoBackFill } from "react-icons/ri";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    const navigate = useNavigate();

    const onNavigateShopHandler = () => navigate("/shop");
    const onNavigateSignInHandler = () => navigate("/auth");
    const onNavigateHomeHandler = () => navigate("/");

    const totalItemsInCart = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
    );

    return (
        <CheckoutContainer>
            <CheckoutCTA>
                <CheckoutTitle onClick={onNavigateShopHandler}>
                    <CheckoutArrow>
                        <RiArrowGoBackFill></RiArrowGoBackFill>
                    </CheckoutArrow>
                    Continue Shopping
                </CheckoutTitle>
                <CheckoutTotalItems>
                    You have {totalItemsInCart} items in your cart.{" "}
                </CheckoutTotalItems>
            </CheckoutCTA>

            {cartItems.length > 0 ? (
                <CheckoutWrapper>
                    <CheckoutItemDetails>
                        {cartItems.map((cartItem) => (
                            <CheckoutItem
                                cartItem={cartItem}
                                key={cartItem.id}
                            />
                        ))}
                    </CheckoutItemDetails>
                    <Container>
                        <CheckoutCartDetails>
                            {cartItems.length > 0 ? (
                                <>
                                    <Summary>Order Summary</Summary>{" "}
                                    <Total>Total: ${cartTotal}</Total>
                                </>
                            ) : (
                                <>
                                    <Empty>Your cart is empty</Empty>
                                    <CallToActionContainer>
                                        <CallToActionToShop
                                            onClick={onNavigateShopHandler}>
                                            Shop
                                        </CallToActionToShop>
                                        <CallToActionSignIn
                                            onClick={onNavigateSignInHandler}>
                                            Sign in
                                        </CallToActionSignIn>
                                        <CallToActionHome
                                            onClick={onNavigateHomeHandler}>
                                            Home
                                        </CallToActionHome>
                                    </CallToActionContainer>
                                </>
                            )}
                        </CheckoutCartDetails>
                        <PaymentForm />
                    </Container>
                </CheckoutWrapper>
            ) : <div></div>}
        </CheckoutContainer>
    );
};

export default Checkout;
