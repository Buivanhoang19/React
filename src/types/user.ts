export interface User{
    id:string;
    fullname:string;
    email:string;
    password:string;
}
export type UserLogin = Pick<User,'email'|'password'>
export type UserRegister = Pick<User,'fullname'|'email'|'password'>