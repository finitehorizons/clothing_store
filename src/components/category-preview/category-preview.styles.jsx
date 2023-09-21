import styled from "styled-components";

export const Title = styled.h2`
    font-size: 28px;
    margin-bottom: 25px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
`;

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    @media screen and (max-width: 960px){
        grid-template-columns: repeat(2, 1fr);
    }
`;  

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;
