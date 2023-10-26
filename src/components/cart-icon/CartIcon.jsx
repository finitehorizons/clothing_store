import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon-styles";

import { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
    selectIsCartOpen,
    selectCartCount,
} from "../../store/cart/cart.selector";

import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    };

    const cartIconRef = useRef(null);

    // Add a click event listener to close the cart when clicking outside
    useEffect(() => {
        const closeCartOnOutsideClick = (e) => {
            if (isCartOpen && cartIconRef.current) {
                const cartIconElement = cartIconRef.current;
                const cartDropdownElement = document.querySelector('[data-component="cart-dropdown"]');

                if (
                    !cartIconElement.contains(e.target) &&
                    !cartDropdownElement?.contains(e.target)
                ) {
                    dispatch(setIsCartOpen(false));
                }
            }
        };

        if (isCartOpen) {
            document.addEventListener("click", closeCartOnOutsideClick);
        }

        return () => {
            document.removeEventListener("click", closeCartOnOutsideClick);
        };
    }, [isCartOpen, dispatch]);
    return (
        <CartIconContainer ref={cartIconRef} onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
