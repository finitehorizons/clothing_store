import styled from "styled-components";

export const ProductCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    img {
        width: 100%;
        height: 95%;
        object-fit: cover;
        margin-bottom: 5px;
    }
    button {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
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
                font-size: 14px;
                width: 100%;
            }
        }
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    @media screen and (max-width: 990px) {
        font-size: 14px;
        height: 10%;
    }
`;

export const Name = styled.span`
    display: flex;
    width: 99%;
`;

export const Price = styled.span`
    display: flex;
    width: 30%;
    justify-content: flex-end;
`;
