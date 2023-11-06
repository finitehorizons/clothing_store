import styled from "styled-components";
import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 1px;
    padding: 0 35px 0 35px;
    font-size: 12px;
    /* font-weight: 700; */
    background-color: black;
    color: white;
    text-transform: capitalize;
    font-family: var(--ff-sans);

    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 200ms ease-in-out, background-color 200ms ease-in-out;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    &:active {
        transform: translateX(1px) translateY(-1px);
    }

    @media screen and (width <= 400px) {
        padding: 0 15px;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;
    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
    width: 30px;
    height: 30px;
`;
