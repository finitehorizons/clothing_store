import styled from "styled-components";

export const AuthContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 900px;
    margin: 90px auto;

    @media (max-width: 960px) {
        gap: 50px;
        margin: 0 auto;
        align-items: center;
        flex-direction: column;
        width: 50%;
    }
`;
