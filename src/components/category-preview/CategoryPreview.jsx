import {
    Preview,
    CategoryPreviewContainer,
    Title,
} from "./category-preview.styles";

import { Link } from "react-router-dom";

import ProductCard from "../product-card/ProductCard";

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <Title className="title">
                <Link to={title}>{title.toUpperCase()}</Link>
            </Title>
            <Preview>
                {products
                    .filter((_, index) => index < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
