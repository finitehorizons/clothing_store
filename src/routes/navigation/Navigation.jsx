import { Outlet, useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Zenith.svg";

import { useDispatch, useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutStart } from "../../store/user/user.action";

import {
    NavigationContainer,
    NavLinks,
    LogoContainer,
    NavLink,
} from "./navigation.styles";

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const navigate = useNavigate();

    const signOutUser = () => {
        dispatch(signOutStart());
        navigate("/");
    };

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>

                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            {" "}
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">SIGN IN</NavLink>
                    )}
                    <NavLink to="/checkout">CHECKOUT</NavLink>
                    <CartIcon />
                    {isCartOpen && <CartDropdown />}
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </>
    );
};

export default Navigation;
