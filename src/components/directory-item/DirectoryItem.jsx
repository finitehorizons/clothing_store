import { useNavigate } from "react-router-dom";

import {
    DirectoryItemContainer,
    Body,
    BackgroundImage,
} from "./directory-item.styles";

import { Fragment } from "react";

const DirectoryItem = ({ category }) => {
    const { imageurl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <Fragment>
            <DirectoryItemContainer onClick={onNavigateHandler}>
                <BackgroundImage imageurl={imageurl} />
                <Body>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </Body>
            </DirectoryItemContainer>
        </Fragment>
    );
};

export default DirectoryItem;
