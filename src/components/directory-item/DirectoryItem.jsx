import {
    DirectoryItemContainer,
    Body,
    BackgroundImage,
} from "./directory-item.styles";

import { Fragment } from "react";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <Fragment>
            <DirectoryItemContainer>
                <BackgroundImage imageUrl={imageUrl} />
                <Body>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </Body>
            </DirectoryItemContainer>
        </Fragment>
    );
};

export default DirectoryItem;
