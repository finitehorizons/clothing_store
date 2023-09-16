import DirectoryItem from "../directory-item/DirectoryItem.jsx";

import { DirectoryContainer } from "./directory-styles.jsx";

const Directory = ({ categories }) => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
