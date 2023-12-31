import SignInForm from "../../components/sign-in-form/SignInForm";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

import { AuthContainer } from "./authentication.styles";

const Authentication = () => {
    return (
        <AuthContainer>
            <SignInForm />
            <SignUpForm />
        </AuthContainer>
    );
};

export default Authentication;
