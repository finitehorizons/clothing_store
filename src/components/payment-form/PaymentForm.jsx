import {
    CardElement,
    useStripe,
    useElements,
    // AddressElement,
} from "@stripe/react-stripe-js";

import { BUTTON_TYPE_CLASSES } from "../button-component/Button";

import { useState } from "react";
import { useSelector } from "react-redux/";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
    StripeContainer,
    ElementContainer,
    PaymentButton,
} from "./payment-form-styles";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch(
            "/.netlify/functions/create-payment-intent",
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount: amount * 100 }),
            }
        ).then((res) => {
            return res.json();
        });

        const {
            paymentIntent: { client_secret },
        } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : "Guest",
                },
            },
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            console.log(paymentResult.error);
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert("Payment successful");
            }
        }
    };

    return (
        <>
            {amount > 0 ? (
                <StripeContainer>
                    <ElementContainer onSubmit={paymentHandler}>
                        <h2>Payment Information</h2>
                        <CardElement />
                        {/* <AddressElement options={{ mode: "shipping" }} /> */}
                        {/* <PaymentElement clientSecret={{ CLIENT_SECRET }} /> */}
                        <PaymentButton
                            isLoading={isProcessingPayment}
                            buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay now
                        </PaymentButton>
                    </ElementContainer>
                </StripeContainer>
            ) : (
                <div></div>
            )}
        </>
    );
};

export default PaymentForm;
