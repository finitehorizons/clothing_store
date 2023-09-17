import styled from "styled-components";

export const CheckoutContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;
export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;
    &:last-child {
        width: 8%;
    }
`;

export const Total = styled.span`
    margin-top: 30px;
    margin-left: 0 auto;
    margin-right: auto;
    font-size: 36px;
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
    font-family: "Cascadia Code", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
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
