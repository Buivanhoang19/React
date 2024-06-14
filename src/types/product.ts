export interface IProduct{
    id:string;
    name:string;
    image:string;
    price:number;
}
export type IproductLite = Pick<IProduct,'name'|'image'|'price'>;