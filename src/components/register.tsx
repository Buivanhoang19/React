import React, { useState } from 'react'
import { RegisterUser } from '../services/auth'
import { UserRegister } from '../types/user'
import { Navigate, useNavigate } from 'react-router-dom'

type Props = {}

const Register = (props: Props) => {
    const [name,setName] = useState<string>()
    const [email,setEmail] = useState<string>()
    const [password,setPassword] = useState<string>()
    const [message,setMessage] = useState<string>()
    const navigate = useNavigate()
    const handleSubmit= async (e:any)=>{
        e.preventDefault()
        const user = await RegisterUser({fullname:name,email:email,password:password} as UserRegister)
        // console.log(user);
        if (user.status){
            setMessage('Đăng ký thành công')
            setTimeout(()=>{
                navigate('/login')
            },3000)
        }     
        else {
            setMessage(user.message)
        }   
    }
  return (
    <div>
        <h1>Đăng ký tài khoản</h1>
        {message}
    <form onSubmit={handleSubmit}>
        <input onChange={(e:any)=>{setName(e.target.value)}} type='text' placeholder='Họ tên'/>
        <input onChange={(e:any)=>{setEmail(e.target.value)}} type='email' placeholder='Email'/>
        <input onChange={(e:any)=>{setPassword(e.target.value)}} type='password' placeholder='Mật khẩu'/>
        <button type='submit'>Đăng ký</button>
    </form>
    </div>
  )
}

export default Register