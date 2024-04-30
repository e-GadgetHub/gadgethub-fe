import { ICheckout } from '../type';
import API from '../libs/api';

export const useCheckout = () => {

    async function checkout(data: ICheckout) {
        try {
            const response = await API.post("/checkout", data);
            console.log(response.data)
            console.log(data)
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
  return {
    checkout
  }
}
