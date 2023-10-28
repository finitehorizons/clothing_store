import {
    CheckoutItemContainer,
    Quantity,
    Arrow,
    Value,
    ImageContainer,
    RemoveButton,
    BaseSpan,
    Price,
} from "./checkout-item.styles";

import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

import {
    clearItemFromCart,
    addItemToCart,
    removeItemFromCart,
} from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const { name, price, quantity, imageUrl } = cartItem;
    const cartItems = useSelector(selectCartItems);

    const clearItemHandler = () =>
        dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () =>
        dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>

            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    <AiOutlineMinusCircle />
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    <AiOutlinePlusCircle />
                </Arrow>
            </Quantity>

            <Price>
                <BaseSpan>${price}</BaseSpan>
                <RemoveButton onClick={clearItemHandler}>remove</RemoveButton>
            </Price>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
