export interface Ireq  {
    id: number,
    name:string,
    image:string,
    spec:{
        ram:string,
        storage:string,
        kamera:string,
    }
}

export interface IBestSell {
    name: string,
    price:number,
    image:string,
    rating:number
}

export interface ILogin {
    email:string,
    password:string
}

export interface IRegister {
    name:string,
    email:string,
    password:string
}

export interface ICheckout {
    firstName:string,
    province:string,
    city:string,
    district:string,
    address:string,
    phoneNumber:string,
    email:string,
}