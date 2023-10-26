import {
    CartItemContainer,
    ItemDetails,
    Name,
    PriceDetails,
    Quantity,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
    const { imageUrl, name, quantity } = cartItem;
    const total = cartItem.price * cartItem.quantity;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <PriceDetails>
                    <Quantity>
                        qty: <span>{quantity}</span>
                    </Quantity>

                    <span>${total}</span>
                </PriceDetails>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
