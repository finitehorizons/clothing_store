import "./directory-styles.scss";
import CategoryItem from "../category-item/CategoryItem.jsx";

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem
                    key={category.id}
                    imageUrl={category.imageUrl}
                    title={category.title}
                />
            ))}
        </div>
    );
};

export default Directory;
