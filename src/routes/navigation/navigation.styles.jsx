import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 100px;
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    padding-top: 20px;
    padding-inline: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid black;
    box-shadow: 0 0 8px -2px rgba(0, 0, 0, 0.5);

    @media screen and (width <= 400px) {
        padding-inline: 5px;
    }
`;

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    width: 90px;
`;

export const NavLinks = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    color: hsl(222, 50%, 10%);
    transition: all 250ms ease-in-out;

    &:hover {
        text-decoration: underline;
        color: hsl(222, 50%, 50%);
    }

    &:active {
        transform: translate(1px) translateY(-2px);
    }

    @media screen and (width <= 470px) {
        font-size: 0.7rem;
        padding: 10px 10px;
        letter-spacing: 1px;
        font-weight: bold;
    }
`;
