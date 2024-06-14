import React, { useState } from 'react'
import { LoginService } from '../services/auth'

type Props = {}

const Login = (props: Props) => {
    const [email,setEmail] =useState<string>('')
    const [password,setPassword] =useState<string>('')
    const [message,setMessage] = useState<string>('')
    const handleLogin = async (e:any)=>{
        e.preventDefault()
        const {status,user,token,message} = await LoginService({email,password})
        if (status){
            localStorage.setItem('user',JSON.stringify({user:user,token:token}))            
        }
        setMessage(message)
    }
  return (
    <div>
        <h1>Login</h1>
        {message}
        <form onSubmit={handleLogin}>
            <input onChange={(e:any)=>{setEmail(e.target.value)}} type='text' placeholder='Email'/>
            <input onChange={(e:any)=>{setPassword(e.target.value)}} type='password' placeholder='Mật khẩu'/>
            <button type='submit'>Đăng nhập</button>
        </form>
    </div>
  )
}

export default Login