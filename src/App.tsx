import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Product from './components/product'
import { useEffect, useState } from 'react'
import { IProduct } from './types/product'
import ProductEdit from './components/productedit'
import { getAllProducts } from './services/product'
import Login from './components/login'
import Register from './components/register'

function App() {
  const [products,setProduct]=useState<IProduct[]>([])
  const getProduct =async ()=>{
   try {
      const dataproducts = await getAllProducts();
      setProduct(dataproducts)
   } catch (error) {
    
   }
  }
  useEffect(()=>{getProduct()},[])
  return (
   <>
       <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/login' Component={Login}/>
          <Route path='/register' Component={Register}/>
          <Route path='/products' element={<Product products={products} setProduct = {setProduct}/>}/>
          {/* <Route path='/products/edit/:id' element={<ProductEdit products={products} setProduct = {setProduct}/>}/> */}
          <Route path='/products/edit/:id' element={<ProductEdit products={products} setProduct = {setProduct}/>}/>
       </Routes>
   </>
  )
}

export default App
