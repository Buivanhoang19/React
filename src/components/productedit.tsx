import React, { useEffect, useState } from 'react'
import { IProduct, IproductLite } from '../types/product'
import {validateObj} from '../validate/product'
import Header from './header'
import Footer from './footer'
import { useNavigate, useParams } from 'react-router-dom'
import { UpdateProduct, getAllProducts, getProductByID } from '../services/product'
type Props = {
    products:IProduct[],
    setProduct:(data:IProduct[])=>void
}
const ProductEdit = (props: Props) => {
    const [name,setName]=useState<string>('')
    const [image,setImage]=useState<string>('')
    const [price,setPrice]=useState<number>()
    const [message,setMessage]=useState<string>('')
    const {id}:any = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
         (async()=>{
            try {
            const product = await getProductByID(id)  
            setName(product.name)
            setImage(product.image)
            setPrice(product.price)              
            } catch (error) {
                console.log(`looix`);
                
            }
         })()
    },[])
    const handleSubmit = async(e:any)=>{
        e.preventDefault();
        const dataproduct = await UpdateProduct(id,{name,image,price} as IproductLite)
        setMessage(`Cập nhật sản phẩm ${dataproduct.name} thành công`)
        const newproduct = props.products.map((product:IProduct)=>(product.id===id)?dataproduct:product)
        props.setProduct(newproduct)
        setTimeout(()=>{
            navigate('/products')
        },2000)        
    }
  return (
    <>
    <Header/>
        <h1>Cập nhật mới sản phẩm</h1>
        {message}
        <form onSubmit={handleSubmit}>
            <input onChange={(e:any)=>{setName(e.target.value)}} type='text' placeholder='Tên sản phẩm' defaultValue={name}/>
            <input onChange={(e:any)=>{setImage(e.target.value)}} type='text' placeholder='Ảnh sản phẩm' defaultValue={image}/>
            <input onChange={(e:any)=>{setPrice(e.target.value)}} type='number' placeholder='Giá tiền' defaultValue={price}/>
            <button type='submit'>Cập nhật sản phẩm</button>
        </form>
        <Footer/>
    </>
  )
}

export default ProductEdit