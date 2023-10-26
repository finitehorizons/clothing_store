import styled from "styled-components";

export const ProductCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 22rem;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    padding-bottom: 2rem;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.9);
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.5);

    img {
        width: 100%;
        min-height: 95%;
        height: 95%;
        object-fit: cover;
        margin-bottom: 5px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        transition: opacity 150ms linear;
    }
    button {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        font-size: 0.8rem;
        letter-spacing: 1px;
        top: 220px;
        display: none;
    }
    &:hover {
        img {
            opacity: 0.8;
        }
        button {
            opacity: 0.85;
            display: flex;
        }

        @media screen and (max-width: 768px) {
            button {
                font-size: 10px;
                width: 90%;
            }
        }
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 10%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 0.8rem;
    font-weight: bold;
    font-family: var(--ff-sans);

    @media screen and (max-width: 990px) {
        /* flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        font-size: 0.75rem;
        height: 5%; */
        flex-direction: column;
        gap: 0.1rem;
        font-size: 0.65rem;
        font-family: var(--ff-sans);
        height: 5%;
        padding: 1rem 0.5rem;
    }
`;

export const Name = styled.span`
    display: flex;
    width: 99%;

    @media screen and (width <= 960px) {
        width: 100%;
        justify-content: center;
        text-align: center;
    }
`;

export const Price = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (width <= 990px) {
        width: 100%;
    }
`;
