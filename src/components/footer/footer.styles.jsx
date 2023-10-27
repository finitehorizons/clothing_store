import styled from "styled-components";

export const FooterBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    padding-top: 30px;
    min-height: 2vh;
    background-color: hsl(222, 50%, 5%);
    margin-top: 20vh;

    @media screen and (width <= 400px) {
        margin-top: 0vh;
    }
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`;

export const BaseSpan = styled.span`
    color: hsl(222, 50%, 98%);
    font-size: 0.9rem;
    z-index: 1;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
        color: hsl(222, 50%, 60%);
    }
`;

export const BaseText = styled.span`
    color: hsl(222, 50%, 95%);
    font-family: var(--ff-serif);
    font-size: 0.75rem;
    grid-area: 2 / 1 / 2 /4;
    letter-spacing: 1px;
    margin-bottom: 1rem;
`;
