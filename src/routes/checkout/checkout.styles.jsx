import styled from "styled-components";

export const CheckoutContainer = styled.div`
    width: 95%;
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
    font-size: 18px;
    font-weight: 700;
    width: 100%;

    @media screen and (max-width: 1124px) {
    }
`;

export const CallToActionToShop = styled.span`
    font-weight: bold;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        color: hsl(221, 85%, 55%);
    }
`;

export const CallToActionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 5px;
    justify-content: space-around;
    font-family: "Montserrat", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serif;

    font-size: 12px;
`;

export const CallToActionSignIn = styled.span`
    font-weight: bold;

    cursor: pointer;
    &:hover {
        text-decoration: underline;
        color: hsl(221, 85%, 55%);
    }
`;

export const CallToActionHome = styled.span`
    font-weight: bold;

    cursor: pointer;
    &:hover {
        text-decoration: underline;
        color: hsl(221, 85%, 55%);
    }
`;

export const CheckoutCTA = styled.div`
    border-top: 1px solid black;
    font-size: 0.7rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    justify-content: flex-start;
    padding-bottom: 1rem;

    @media screen and (width <= 500px) {
        align-items: center;
    }
`;

export const CheckoutTitle = styled.span`
    padding-top: 8px;
    display: flex;
    justify-content: flex-start;
    gap: 0.3rem;
    font-weight: bold;
    cursor: pointer;
    padding-bottom: 1rem;
`;

export const CheckoutTotalItems = styled.span`
    color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
`;

export const CheckoutArrow = styled.span`
    font-size: 1rem;
`;

export const CheckoutWrapper = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;

    @media screen and (width <= 768px) {
        flex-direction: column;
    }
`;

export const CheckoutItemDetails = styled.div`
    width: 65%;

    @media screen and (width <= 768px) {
        width: 100%
    }
`;

export const CheckoutCartDetails = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: #e2e8f0;
    height: 50vh;
    width: 25%;
    border: 1px solid #e2e8f0;
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);

    @media screen and (width <= 768px) {
        margin: 0 auto;
        width: 90%;
        height: 25vh;
        text-align: center;
    }
`;

export const Summary = styled.span`
color: #64748b;
    font-size: 14px;
    font-family: var(--ff-serif);
    letter-spacing: 1px;
    width: 100%;
    border-bottom: 1px solid lightgray;


`;

export const Empty = styled.span`
text-align: center;
    color: #94a3b8;
`;
