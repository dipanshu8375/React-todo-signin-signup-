import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Form() {

  const history = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: ""
  })
  console.log(input);



  const getData = (e) => {
    const { value, name } = e.target;
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
    const getUser = localStorage.getItem("mydata");
    console.log(getUser);



    const { email, password } = input;
    if (email == "") {
      alert("Email is required")
    } else if (!email.includes("@")) {
      alert("Email is not in correct format")
    } else if (password == "") {
      alert("Password is required")
    } else if (password.length < 5) {
      alert("Password should be greater than 5")
    } else {
      if (getUser && getUser.length) {
        const userData = JSON.parse(getUser);
        const userLogin = userData.filter((el, index) => {
          return el.email === email && el.password === password;
        })
        if (userLogin.length === 0) {
          alert("Invalid details")
        } else {
          console.log("User Login successfully")
          history("/todo")
        }
      }

    }
  }



  return (
    <div>
      <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://media.istockphoto.com/id/96360852/photo/to-do-list.jpg?s=1024x1024&w=is&k=20&c=NTqx0VJvowKqzHZcvzdKRbg8qEEqzSm967ofUYAAMnI="
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1" >Todo App</h4>
                      </div>
                      <form>
                        <p className="mb-4">Please Sign In to your account</p>
                        <div className="mb-4">
                          <input
                            type="email" name="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Email" onChange={getData}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password" name="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password" onChange={getData}
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }} onClick={addData}
                          >
                            Log in
                          </button>
                          <a className="text-gray-500" href="#!">Forgot password?</a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <NavLink to="/"
                            type="button"
                            className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Sign Up
                          </NavLink>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}
                  >
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">

                      <p className=" my-6 text-xl font-semibold">
                        “Each day I will accomplish one thing on my to list.”
                      </p>
                      <p className=" my-6 text-xl font-semibold">
                        “Sometimes our stop-doing list needs to be bigger than our to-do list.”
                      </p>
                      <p className=" my-6 text-xl font-semibold">
                        “Subtracting from your list of priorities is as important as adding to it.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Form;
