import styled from "styled-components";

export const AuthContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 900px;
    margin: 90px auto;
    height: 60vh;

    @media (max-width: 960px) {
        font-size: 14px;
        gap: 20px;
        align-items: center;
        flex-direction: column;
        padding-bottom: 100px;
        width: 100%;
    }
`;
