import { styled } from "styled-components";
import { BaseButton } from '../button-component/button.styles'

export const StripeContainer = styled.div`
    padding: 1rem 1rem;
    flex-direction: column;
    min-width: 50%;

    text-align: center;

    h2 {
        font-family: var(--ff-serif);
        letter-spacing: 1.5px;
    }

    @media screen and (width <= 768px) { 

    }
`;

export const ElementContainer = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 2rem;

`;

export const PaymentButton = styled(BaseButton)`
    width: 35%;
    margin-top: 2rem;
    margin-left: auto;

`