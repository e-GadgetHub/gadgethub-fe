import { useForm } from "react-hook-form";

const useValidateForm = () => {
    return useForm({
        reValidateMode: "onBlur",
        mode: "onBlur",
        shouldUnregister: true,
    });
};

export default useValidateForm;
