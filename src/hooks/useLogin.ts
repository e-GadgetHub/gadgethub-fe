import API from "../libs/api";
import { ILogin } from "../type";

export default function useLogin(){
    async function login(params: ILogin) {
        try {
            const response = await API.post("/login", params);
            localStorage.setItem("GeHu", response.data.token);
            window.location.href = '/';
        } catch ( error ) {
            console.log(error)
        }
    }
    
    return {
        login
    }
}