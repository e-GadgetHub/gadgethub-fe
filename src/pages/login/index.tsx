import React from "react";
import { FormLogin } from "./component/FormLogin";

const Component: React.FC = () => {
    return (
        <>
            <FormLogin />
        </>
    );
};

const Login = React.memo(Component);
export default Login;
