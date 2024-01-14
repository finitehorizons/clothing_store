import styled from "styled-components";

export const SignUpContainer = styled.div`
    
    width: 100%;
    min-height: 500px;
    height: 500px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding-inline: 1rem;
    padding-block: 1rem;
    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 1);

    h2 {
        margin: 10px 0;
        font-size: 1rem;
    }

    span {
        font-size: .8rem;
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
    flex-direction: column;
    margin: 0 auto;
    width: 70%;

    @media screen and (width <= 500px) {
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
    }
`;
