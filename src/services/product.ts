import axionInstance from "../config/axioscnf";
import { IproductLite } from "../types/product";

export const getAllProducts = async ()=>{
    try {
    const {data} = await axionInstance.get('api/products');
    return data
} catch (error) {
   console.log(error);
    
}
}
export const getProductByID = async (id:string)=>{
    try {
    const {data} = await axionInstance.get(`api/products/${id}`);
    return data
} catch (error) {
   console.log(error);
}
}
export const addProduct = async (product:IproductLite)=>{
    try {
    const {data} = await axionInstance.post(`api/products`,product);
    return data
} catch (error) {
   console.log(error);
}
}
export const UpdateProduct = async (id:string,product:IproductLite)=>{
    try {
    const {data} = await axionInstance.put(`api/products/${id}`,product);
    return data
} catch (error) {
   console.log(error);
}
}
export const DeleteProduct = async (id:string)=>{
    try {
    const {data} = await axionInstance.delete(`api/products/${id}`);
    return data
} catch (error) {
   console.log(error);
}
}