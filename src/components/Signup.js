import React, { useState } from 'react'
import { NavLink } from "react-router-dom";


function Signup() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })
    console.log(input)

    const getData = (e) => {
        // console.log(e.target.value)
        const { value, name } = e.target;
        // console.log(value,name)
        setInput(() => {
            return {
                ...input,
                [name]: value
            }
        })
    }
    const [data, setData] = useState([]);
    const addData = (e) => {
        e.preventDefault();
        const { name, email, password } = input;
        if (name == "") {
            alert("Name is required")
        } else if (email == "") {
            alert("Email is required")
        } else if (!email.includes("@")) {
            alert("Email is not in correct format")
        }else if (password == ""){
            alert("Password is required")
        }else if (password.length < 5){
            alert("Password should be greater than 5")
        }else{
            console.log("Data added successfully")
            localStorage.setItem('mydata', JSON.stringify([...data, input]))
        }
    }


return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <i className="fa-regular fa-rectangle-list"></i>
                    <h1 className="mx-2" >Todo</h1>
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="name" name="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Your Name</label>
                                <input type="name" name="name" id="name" onChange={getData} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required="" />
                            </div>
                            <div>
                                <label htmlFor="email" name="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Email</label>
                                <input type="email" name="email" id="email" onChange={getData} placeholder="Enter Your Email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" name="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" autoComplete="off" >Password</label>
                                <input type="password" name="password" onChange={getData} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button  type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }} onClick={addData} >Create an account</button>
                            <div className="last d-flex justify-content-between">
                            <p >Already have an account </p>
                            <p ><NavLink to="/Signin" type="button"
                      className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light">Sign In</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
}

export default Signup;
