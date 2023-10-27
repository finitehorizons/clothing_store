import styled from "styled-components";

export const SignInContainer = styled.div`
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding-inline: 1rem;
    align-items: center;
    padding-block: 1rem;
    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 1);
    max-height: 50vh;
    min-height: 500px;

    form {
        width: 100%;
    }

    h2 {
        font-size: 1rem;
    }

    span {
        font-size: 0.8rem;
    }
    @media screen and (width <= 960px) {
        min-height: 300px;
        max-height: 100%;
        min-width: 375px;
        max-width: 600px;
        margin: 0 auto;
        margin-top: 1rem;
        border: none;
        border-radius: 0;
        box-shadow: none;
    }
    @media screen and (width <= 400px) {
        width: 90%;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
    width: 70%;
    padding-top: 1rem;
    gap: 0.5rem;

    @media screen and (width <= 400px) {
        width: 80%;
        margin: 0 auto;
    }
`;
