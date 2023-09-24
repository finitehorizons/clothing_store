import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    padding-top: 20px;
    
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 10px;
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
    cursor: pointer;
    color: hsl(222, 50%, 10%);

    &:hover {
        color: hsl(222, 50%, 50%); 
    }
`;
