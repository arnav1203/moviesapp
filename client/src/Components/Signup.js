/**
 * The Signup component in React handles user input for first name, last name, email, and password, and
 * upon form submission, sends a POST request to a server endpoint for user signup.
 * @returns The `Signup` component is being returned. It contains a form for user signup with fields
 * for first name, last name, email, and password. The user can input their information and submit the
 * form to sign up. The form includes validation for required fields. Upon submission, an HTTP POST
 * request is made to 'http://localhost:8000/signup' with the user's information. After the request
 */
import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import logo from './assets/stickman-watching-tv.svg'
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const navigate = useNavigate()

    const [fn, ufn] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
    });

    const changefname = (e) => {
        ufn(prev => {
            return { ...prev, fname: e.target.value }
        })
    };

    const changelname = (e) => {
        ufn(prev => ({ ...prev, lname: e.target.value }))
    };

    const changemail = (e) => {
        ufn(prev => ({ ...prev, email: e.target.value }))
    };

    const changepswd = (e) => {
        ufn(prev => ({ ...prev, password: e.target.value }))
    }

    const submitform = (e) => {
        console.log(`${fn.fname} ${fn.lname}`);
        e.preventDefault();
        axios.post('http://localhost:8000/signup', {
            name: `${fn.fname} ${fn.lname}`,
            email: fn.email,
            password: fn.password,
        })
        navigate('/')
    }


    return (
        <div>
            <Navbar />
            <div className='flex justify-around items-center'>
                <div className='flex justify-center items-center h-screen -m-16'>
                    <form className='backdrop-blur bg-cyan-700/50 p-4 rounded-xl w-96' onSubmit={submitform}>
                        <div className='text-4xl flex justify-center w-full m-2'>Join Us Today!</div>
                        <div className='flex justify-center text-xl text-gray-300 m-2'>Signup now to become a member</div>
                        <div className='flex'>
                            <label className='flex flex-col w-full p-1'>
                                First Name
                                <input type='text' className='w-full rounded-md h-10 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter First Name' onChange={changefname} required />
                            </label>
                            <label className='flex flex-col w-full p-1'>
                                Last Name
                                <input type='text' className='w-full rounded-md h-10 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter Last Name' onChange={changelname} required />
                            </label>
                        </div>
                        <label className='flex flex-col w-full p-1'>
                            Email
                            <input type='email' required className='w-full rounded-md h-10 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter Email' onChange={changemail} />
                        </label>
                        <label className='flex flex-col w-full p-1'>
                            Create new password
                            <input type='password' required className='w-full rounded-md h-10 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Create password' onChange={changepswd} />
                        </label>
                        <div className='flex justify-center'>
                            <button className="relative mt-5 flex justify-center items-center border border-cyan-500 w-48 py-2 text-xl overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-64 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-16 group-hover:ml-8 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <div><span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Signup</span>
                                </div>
                            </button>
                        </div>
                        <div className='flex justify-center p-3'><span>Already a member?</span><a href='/' className='text-indigo-400 hover:underline font-medium' type='submit'>Login Here</a></div>

                    </form>
                </div>
                <div className='w-80'>
                    <img alt='logo' src={logo} className='animate-floaty' />
                </div>
            </div>
        </div>
    )
}
