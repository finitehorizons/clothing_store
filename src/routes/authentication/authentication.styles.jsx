import styled from "styled-components";

export const AuthContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    justify-content: space-between;
    max-width: 900px;
    margin: 10vh auto;
    min-height: 65vh;

    @media (max-width: 960px) {
        padding-inline: 2rem;
        grid-template-columns: 1fr;
        gap: 3rem;
        align-items: center;
        justify-content: center;
        padding-bottom: 0px;
        margin-top: 3rem;
        width: 100%;
        min-height: 90vh;
    }
`;
