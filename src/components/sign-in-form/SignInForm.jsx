import "../sign-up-form/sign-up-form-styles.scss";
import { useState } from "react";
import Button from "../button-component/Button";
import FormInput from "../form-input/FormInput";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
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
        try {
            await signInWithGooglePopup().then((userCredentials) => {
                const user = userCredentials.user;
                createUserDocumentFromAuth(user);
            });
            resetFormFields();
        } catch (error) {}
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password).then(
                (userCredentials) => {
                    const user = userCredentials.user;
                }
            );
            resetFormFields();
        } catch (error) {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="sign-up-container">
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
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        buttonType="google"
                        onClick={signInWithGoogle}>
                        Google sign in
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
