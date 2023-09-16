import { Outlet } from "react-router-dom";
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
                        <NavLink as="span" onClick={signOutUser}>
                            {" "}
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">SIGN IN</NavLink>
                    )}
                    <CartIcon />
                    {isCartOpen && <CartDropdown />}
                </NavLinks>
                {/* <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/contact">
                        CONTACT
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>
                            {" "}
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className="nav-link" to="/auth">
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div> */}
            </NavigationContainer>
            <Outlet />
        </>
    );
};

export default Navigation;
