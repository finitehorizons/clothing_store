import React from "react";
import {
    FooterColumn,
    BaseSpan,
    FooterBody,
    BaseText,
} from "../footer/footer.styles";

import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const onNavigateShopHandler = () => navigate("/shop");
    const onNavigateCheckoutHandler = () => navigate("/checkout");
    const onNavigateHomeHandler = () => navigate("/");
    const onNavigateContactHandler = () => navigate("/");

    const onNavigateMensHandler = () => navigate("/shop/mens");
    const onNavigateWomensHandler = () => navigate("/shop/womens");
    const onNavigateHatsHandler = () => navigate("/shop/hats");
    const onNavigateJacketsHandler = () => navigate("/shop/jackets");
    const onNavigateShoesHandler = () => navigate("/shop/sneakers");

    const onNavigateSignInHandler = () => navigate("/auth");
    const onNavigateTermsHandler = () => navigate("/");
    const onNavigateCareersHandler = () => navigate("/");
    const onNavigateLegalHandler = () => navigate("/");

    return (
        <>
            <FooterBody>
                <FooterColumn>
                    <BaseSpan onClick={onNavigateHomeHandler}>Home</BaseSpan>
                    <BaseSpan onClick={onNavigateShopHandler}>Shop</BaseSpan>
                    <BaseSpan onClick={onNavigateContactHandler}>
                        Contact
                    </BaseSpan>
                    <BaseSpan onClick={onNavigateCheckoutHandler}>
                        Cart
                    </BaseSpan>
                </FooterColumn>
                <FooterColumn>
                    <BaseSpan onClick={onNavigateMensHandler}>Mens</BaseSpan>
                    <BaseSpan onClick={onNavigateWomensHandler}>
                        Womens
                    </BaseSpan>
                    <BaseSpan onClick={onNavigateShoesHandler}>
                        Sneakers
                    </BaseSpan>
                    <BaseSpan onClick={onNavigateHatsHandler}>Hats</BaseSpan>
                    <BaseSpan onClick={onNavigateJacketsHandler}>
                        Jackets
                    </BaseSpan>
                </FooterColumn>
                <FooterColumn>
                    <BaseSpan onClick={onNavigateSignInHandler}>
                        Sign In
                    </BaseSpan>
                    <BaseSpan onClick={onNavigateTermsHandler}>Terms</BaseSpan>
                    <BaseSpan onClick={onNavigateLegalHandler}>Legal</BaseSpan>
                    <BaseSpan onClick={onNavigateCareersHandler}>
                        Careers
                    </BaseSpan>
                </FooterColumn>
                <BaseText>
                    &copy; 2023 Zenith Clothing Inc. All Rights Reserved
                </BaseText>
            </FooterBody>
        </>
    );
};

export default Footer;
