import { ButtonsContainer, SignInContainer } from "./sign-in-form-styles";

import { useState } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button-component/Button";
import FormInput from "../form-input/FormInput";

import {
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { useDispatch } from "react-redux";

import { googleSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            console.log("Unable to sign in user: ", error);
        }
    };

    return (
        <SignInContainer>
            <form onSubmit={handleSubmit}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <FormInput
                    label="Enter email"
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={handleInputChange}
                />
                <FormInput
                    label="Enter password"
                    type="password"
                    name="password"
                    value={password}
                    required
                    onChange={handleInputChange}
                />
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={signInWithGoogle}>
                        Google sign in
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;
