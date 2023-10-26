import DirectoryItem from "../directory-item/DirectoryItem.jsx";

import { DirectoryContainer } from "./directory-styles.jsx";

const categories = [
    {
        id: 1,
        title: "hats",
        imageUrl:
            "https://i.ibb.co/D5102LZ/Fabio-alves-MNzy-XXfnn-Cg-unsplash.jpg",
        route: "shop/hats",
    },
    {
        id: 2,
        title: "jackets",
        imageUrl:
            "https://i.ibb.co/34g6pYj/Dami-adebayo-k6a-Qzm-Ib-R1s-unsplash.jpg",
        route: "shop/jackets",
    },
    {
        id: 3,
        title: "shoes",
        imageUrl:
            "https://i.ibb.co/hmS6qsD/Jordan-whitfield-cfutb-Z4-Kt2k-unsplash.jpg",
        route: "shop/sneakers",
    },
    {
        id: 4,
        title: "womens",
        imageUrl: "https://i.ibb.co/PQY1Nmz/Female-street.jpg",
        route: "shop/womens",
    },
    {
        id: 5,
        title: "mens",
        imageUrl:
            "https://i.ibb.co/GvqRG7c/gregory-hayes-h5cd51-KXm-RQ-unsplash-1.jpg",
        route: "shop/mens",
    },
];

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;

