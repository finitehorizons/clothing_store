import styled from "styled-components";

export const DirectoryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 5rem;
    margin-top: 5rem;

    @media screen and (width <= 768px) {
        padding: 0 2rem;
    }
`;
