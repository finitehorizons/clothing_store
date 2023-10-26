import styled from "styled-components";
import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
} from "../button-component/button.styles";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 17rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    box-shadow: 0 0 10px -3px rgba(0, 0,0 ,0.5);
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
        margin-top: auto;
        line-height: 1.5rem;
        
    }
`;

export const EmptyMessage = styled.span`
    font-family: var(--ff-serif-F);
    font-size: 18px;
    margin: 85px auto;
`;

export const CartItems = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const CartTotal = styled.div`
    font-family: var(--ff-serif);
    display: flex;
    justify-content: space-between;
    padding-block: 1rem;
    font-weight: bold;

    span {
        font-weight: normal;
    }
`
