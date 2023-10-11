import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../axios/allApis'
import Swal from 'sweetalert2'



const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const body = {
                email,
                password
            }
            console.log(body);
            const response = await login(body)
            console.log(response.data);
            const payload = response.data
            if (response.data.success) {
                Swal.fire({
                    title: 'Success !',
                    text: 'Login Successful',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
                console.log("payload", payload);
                //dispatch action to update global state 
                // dispatch(loginData(payload))
                localStorage.setItem("user", JSON.stringify(payload))
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            } else {
                Swal.fire({
                    title: 'Failed !',
                    text: 'Login Failed',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header text-center">
                                <h4>Login Form</h4>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-group mt-2">
                                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="email" placeholder="Enter your email" />
                                    </div> <div className="form-group mt-2">
                                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="password" placeholder="Enter your password" />
                                    </div>
                                    <button type="submit" onClick={handleLogin} className="btn btn-primary btn-block mt-2 me-2">Login</button>
                                    <button onClick={() => { navigate("/register") }} className="btn btn-primary btn-block mt-2">Go to Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login