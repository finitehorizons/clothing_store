import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    padding: 15px 15px;
    font-size: 1rem;
    align-items: center;
    width: 100%;

    @media screen and (width <= 500px) {
        flex-direction: column;
        gap: 0.75rem;
        text-align: center;
    }
`;

export const ImageContainer = styled.div`
    box-shadow: none;
    display: flex;
    border: 2px solid rgba(0, 0, 0, 0.9);
    transition: box-shadow 200ms ease;
    /* outline: 2px solid black; */
    border-radius: 7px;

    img {
        width: 75px;
        height: 75px;
        border-radius: 5px;
        object-fit: cover;
        aspect-ratio: 1;
    }

    @media screen and (width <= 500px) {
        img {
            width: 150px;
            height: 150px;
            padding: 0;
            margin: 0;
        }
    }

    &:hover {
    }
`;

export const BaseSpan = styled.span`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    width: 33%;

    @media screen and (width <= 500px) {
        width: 100%;
        justify-content: center;
        gap: 0.5rem;
        padding: 0;
        margin: 0;
    }
`;

export const Quantity = styled(BaseSpan)`
    align-items: center;
    justify-content: start;
    display: flex;
    font-size: 16px;

    @media screen and (width <=500px) {
        justify-content: center;
    }
`;

export const Arrow = styled.div`
    cursor: pointer;
`;

export const Value = styled.div`
    padding: 0.25rem 1rem;
    background-color: #e2e8f0;
    margin: 0 2px;

    @media screen and (width <= 500px) {
        margin: 0;
        padding: 0 0.25rem;
    }
`;

export const RemoveButton = styled.div`
    font-size: 8px;
    color: #64748b;
    text-transform: uppercase;
    text-decoration: underline;
    cursor: pointer;
`;

export const Price = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1rem;
`;

