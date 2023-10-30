import { SignUpContainer, ButtonsContainer } from "./sign-up-form-styles";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../store/user/user.action";

import FormInput from "../form-input/FormInput";
import Button from "../button-component/Button";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
        } catch (error) {
            error.code === "auth/email-already-in-use"
                ? alert("Email already in use")
                : alert(error.message);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    return (
        <SignUpContainer>
            <form onSubmit={handleSubmit}>
                <h2>Don't have an account?</h2>
                <span>Sign up with your email and password</span>
                <FormInput
                    label="Username"
                    required
                    onChange={handleChange}
                    name="displayName"
                    type="text"
                    value={displayName}
                />
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label="Enter Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <ButtonsContainer>
                    <Button type="submit">Sign Up</Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    );
};

export default SignUpForm;
