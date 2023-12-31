import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    padding: 0 20px;

    @media screen and (max-width: 785px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const CategoryTitle = styled.h2`
    font-size: 32px;
    margin-bottom: 25px;
    letter-spacing: .5rem;
    text-align: center;
    font-family: var(--ff-serif);

`;

