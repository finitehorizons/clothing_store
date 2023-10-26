import styled, { css } from "styled-components";

const subColor = "gray";
const mainColor = `hsl(222, 50%, 10%)`;

const shrinkLabelStyles = css`
    top: -14px;
    font-size: 10px;
    color: ${mainColor};
`;

export const FormInputLabel = styled.label`
    color: #{subColor};
    font-size: 12px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
    background: none;
    background-color: hsl(222, 50%, 96%);
    color: ${mainColor};
    font-size: 10px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;
    &:focus {
        outline: none;
    }

    &:focus ~ ${FormInputLabel} {
        ${shrinkLabelStyles}
    }
`;

export const Group = styled.div`
    position: relative;
    margin: 35px 0;
    input[type="password"] {
        letter-spacing: 0.3em;
    }
    @media (max-width: 960px) {
        margin: 30px 0;
    }
`;
