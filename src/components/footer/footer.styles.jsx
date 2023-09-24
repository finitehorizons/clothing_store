import styled from "styled-components";

export const FooterBody = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    padding-top: 30px;
    padding-bottom: 50px;
    justify-content: space-around;
    height: 20vh;
    background-color: hsl(222, 50%, 5%);
    margin-top: 20vh;
`;

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`;

export const BaseSpan = styled.span`
    color: hsl(222, 50%, 98%);
    font-size: 18px;
    z-index: 1;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
        color: hsl(222, 50%, 60%);
    }
`;

export const BaseText = styled.span`
    color: hsl(222, 50%, 95%);
    font-family: Oswald, sans-serif;
    font-size: 14px;
    position: absolute;
    padding-top: 15vh;
    margin-bottom: 15px;

    text-align: center;
    letter-spacing: 1px;

    @media screen and (max-height: 950px) {
        padding-top: 130px;
    }
`;
