import SignInForm from "../../components/sign-in-form/SignInForm";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

import { AuthContainer, DemoWrapper } from "./authentication.styles";

const Demo = () => {
    return (
    <DemoWrapper>
        <h2>Demo Account</h2>
        <p>Email: demo@demo.com</p>
        <p>Password: 12341234</p>

    </DemoWrapper>
    )
}
const Authentication = () => {
    return (
        <>
        <AuthContainer>
            <SignInForm />
            <SignUpForm />
        </AuthContainer>
            <Demo />

        </>
    );
};

export default Authentication;
