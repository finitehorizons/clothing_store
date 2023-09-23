import styled from "styled-components";

export const CheckoutContainer = styled.div`
    width: 70%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media screen and (max-width: 1124px) {
        width: 95%;
        font-size: 0.8rem;
        background-color: hsl(222, 50%, 96%);
    }
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    font-weight: bold;
`;
export const HeaderBlock = styled.div`
    @media screen and (max-width: 790px) {
        display: none;
        &:last-child {
            width: 12%;
        }
    }
`;

export const Total = styled.span`
    
    margin: 0 0 0 auto;
    font-size: 36px;
    font-weight: 600;
    padding: 30px 0;

    @media screen and (max-width: 1124px) {
        font-size: 24px;
        margin: 20px auto;
    }
`;

export const CallToActionToShop = styled.span`
    margin-top: 40px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        color: hsl(221, 85%, 55%);
    }
`;

export const CallToActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Montserrat", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serif;
    padding: 30px 0;
    font-size: 18px;
    margin-top: 20%;
`;

export const CallToActionSignIn = styled.span`
    font-weight: bold;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        color: hsl(221, 85%, 55%);
    }
`;

export const CallToActionHome = styled.span`
    font-weight: bold;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        color: hsl(221, 85%, 55%);
    }
`;

export const AreYouLost = styled.span`
    margin-bottom: 10%;
    font-size: 24px;
    font-weight: bold;
    text-decoration: underline;
`;
