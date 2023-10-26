import styled from "styled-components";

export const CartItemContainer = styled.div`
    img {
        object-fit: cover;
        width: 40%;
        aspect-ratio: 1/1;
    }
    width: 95%;
    display: flex;
    height: 80px;
    margin-bottom: 1rem;
    border: 2px solid rgba(0, 0, 0, 0.9);
    border-radius: 3px;
    box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.1);
`;

export const ItemDetails = styled.div`
    width: 100%;
    font-family: var(--ff-serif);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-inline: 5px;
    font-size: 0.75rem;
`;

export const Name = styled.span`
    padding-left: .25rem;
    padding-bottom: .5rem;
    font-size: 0.75rem;
`;

export const PriceDetails = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .75rem;
    padding: .5rem .25rem;
    font-weight: 700;
`;

export const Quantity = styled.span`
    font-size: .5rem;
    text-transform: uppercase;
    font-weight: 400;

    span:nth-child(1) {
        font-size: .75rem;
    }
`
