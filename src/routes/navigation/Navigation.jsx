import { Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { useContext } from "react";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
    NavigationContainer,
    NavLinks,
    LogoContainer,
    NavLink,
} from "./navigation.styles";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
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
