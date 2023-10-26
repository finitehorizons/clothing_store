import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h2`
    font-size: 2.2rem;
    margin-bottom: 25px;
    padding-bottom: 1rem;
    letter-spacing: 0.5rem;
    font-family: var(--ff-serif);
    font-weight: 700;
    text-align: center;

    /* &:before {
        content: "shop / ";
        font-family: var(--ff-serif-F);
        font-weight: bold;
        color: hsl(255 0 0 / 25);
    } */
`;

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    padding: 0 20px;
    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const TitleLink = styled(Link)`
    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.5);
    }
`;
