import API from "../libs/api";
import { IRegister } from "../type";



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
