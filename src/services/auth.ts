import axionInstance from "../config/axioscnf";
import { UserLogin, UserRegister } from "../types/user";

export const LoginService = async (userform:UserLogin)=>{
    try {
    const {data} = await axionInstance.post('auth/login',userform)
    return data
} catch (error) {
   console.log(error);        
}
}
export const RegisterUser = async (userform:UserRegister)=>{
    try {
    const {data} = await axionInstance.post('auth/register',userform)
    return data
} catch (error) {
   return error       
}
}