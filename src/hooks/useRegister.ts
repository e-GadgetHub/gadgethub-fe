import API from "../libs/api";

export interface IRegister {
    username: string;
    email: string;
    password: string;
}

export default function useRegister() {
    async function register(data: IRegister) {
        try {
            const response = await API.post("/register", data);
            localStorage.setItem("GeHu", response.data.token);
            window.location.href = "/";
        } catch (error) {
            console.log(error);
        }
    }

    return {
        register,
    };
}
