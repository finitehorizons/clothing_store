import { Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { CartContext } from "../../contexts/CartContext";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
    NavigationContainer,
    NavLinks,
    LogoContainer,
    NavLink,
} from "./navigation.styles";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);

    const navigate = useNavigate();
    const handleSignOut = () => {
        signOutUser();
        navigate("/");
    };

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={handleSignOut}>
                            {" "}
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">SIGN IN</NavLink>
                    )}
                    <CartIcon />
                    {isCartOpen && <CartDropdown />}
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </>
    );
};

export default Navigation;
