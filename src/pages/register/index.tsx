import React from "react";
import { FormRegister } from "./component/FormRegister";

const Component: React.FC = () => {
    return (
        <>
            <FormRegister />
        </>
    );
};

const Register = React.memo(Component);
export default Register;
