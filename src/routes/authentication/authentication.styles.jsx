import styled from "styled-components";

export const AuthContainer = styled.div`
    display: flex;
    gap: 6rem;
    justify-content: center;
    max-width: 900px;
    margin: 50px auto;
    height: 65vh;

    @media (max-width: 960px) {
        gap: 1rem;
        align-items: center;
        flex-direction: column;
        padding-bottom: 0px;
        margin-top: 8rem;
        width: 100%;
        height: 90vh;
    }
`;
