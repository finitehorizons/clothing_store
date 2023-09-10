import "../sign-up-form/sign-up-form-styles.scss";
import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultformFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultformFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            

            console.log(user);
        } catch (error) {
            console.log(error);
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
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="displayName">Display Name</label>
                <input
                    required
                    onChange={handleChange}
                    name="displayName"
                    type="text"
                    placeholder="Enter your display name"
                    value={displayName}
                />
                <label htmlFor="email">Email</label>
                <input
                    required
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                />
                <label htmlFor="password">Password</label>
                <input
                    required
                    onChange={handleChange}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Must be at least 8 characters long"
                    value={password}
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                />
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
