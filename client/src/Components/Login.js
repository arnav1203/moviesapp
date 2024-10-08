import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import logo from './assets/stickman-watching-tv.svg'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();

    const [details, udetails] = useState({
        email: '',
        password: '',
    })

    const uemail = (e) => {
        udetails(prev => {
            return {
                ...prev,
                email: e.target.value
            }
        })
    }

    const upswd = (e) => {
        udetails(prev => {
            return {
                ...prev,
                password: e.target.value
            }
        })
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/login', {
            email: details.email,
            password: details.password
        })
            .then(res => {
                if (res.data === "Failed") {
                    alert("Wrong Password")

                }
                else if (res.data === "User not found") {
                    alert("User Not Found")
                }
                else {
                    navigate('/home')
                }
            })
    }

    return (
        <div>
            <Navbar />
            <div className='flex justify-around items-center'>
                <div className='h-screen flex justify-center items-center -mt-16'>
                    <form className='backdrop-blur bg-cyan-700/50 p-4 rounded-xl w-96' onSubmit={submit}>
                        <div className='text-4xl flex justify-center w-full m-2'>Welcome Back!</div>
                        <div className='flex justify-center text-xl text-gray-300 m-2'>Login to access your account</div>
                        <label className='flex flex-col w-full p-1' >
                            <p className='text-xl flex justify-start text-white'>Email:</p>
                            <input type='text' className='w-full rounded-md h-12 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter Email' onChange={uemail} />
                        </label>
                        <label className='flex flex-col w-full p-1'>
                            <p className='text-xl flex justify-start text-white'>Password:</p>
                            <input type='password' className='w-full rounded-md h-12 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter password' onChange={upswd} />
                        </label>
                        <div className='flex justify-center'>
                            <button className="relative mt-5 flex justify-center items-center border border-cyan-500 w-48 py-2 text-xl overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-64 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-16 group-hover:ml-8 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <div><span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Login</span>
                                </div>
                            </button>
                        </div>
                        <div className='flex justify-center p-3'><span>Not a member?</span><a href='/Signup' className='text-indigo-400 hover:underline font-medium'>Signup Here</a></div>
                    </form>
                </div>
                <div className='w-80'>
                    <img alt='logo' src={logo} className='animate-floaty' />
                </div>
            </div>
        </div>
    )
}
