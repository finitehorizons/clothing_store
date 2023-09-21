import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 75%;
        height: 75%;
        margin-left: 10px;
        margin-bottom: 10px;
    }
`;

export const ImageContainer = styled.div`
    width: 30%;
    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        margin-bottom: 10px;
        padding-right: 10px;
    }
`;

export const BaseSpan = styled.span`
    display: flex;
    align-items: center;
    width: 33%;
    margin-left: 15px;

    @media (max-width: 768px) {
        width: 90%;
        font-size: 20px;

        margin-bottom: 10px;
        font-weight: bold;
    }
`;
 
export const Quantity = styled(BaseSpan)`
    align-items: center;
    display: flex;
`;

export const Arrow = styled.div`
    cursor: pointer;

    &:first-of-type {
        margin-left: 20px;
    }

    @media screen and (max-width: 790px) {
        font-size: 16px;

        &:first-of-type {
            margin-left: 0px;
        }
    }
`;

export const Value = styled.div`
    margin: 0 10px;

    @media screen and (max-width: 790px) {
        font-size: 16px;
        margin: 0 5px;
    }
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;

    @media screen and (max-width: 790px) {
        padding-left: 0;
        font-size: 24px;
        font-weight: bold;
    }
`;
