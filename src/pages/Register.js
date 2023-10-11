import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")

    const navigate=useNavigate()

    const handleRegister=()=>{

    }

  return (
    <>
        <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header text-center">
                                <h4>Registration Form</h4>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-group mt-2">
                                        <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} id="name" placeholder="Enter your name" />
                                    </div><div class="form-group mt-2">
                                        <input type="email" class="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />
                                    </div>
                                    <div class="form-group mt-2">
                                        <input type="password" class="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" />
                                    </div>
                                    <div class="form-group mt-2">
                                        <input type="tel" class="form-control" id="mobile" value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Enter your mobile number" />
                                    </div>
                                    <div class="form-group mt-2">
                                        <input type="text" class="form-control" id="address" value={address} onChange={e => setAddress(e.target.value)} placeholder="Enter your address" />
                                    </div>
                                  
                                    <button type="submit" onClick={handleRegister} class="btn btn-primary btn-block mt-2 me-2">Register</button>
                                    <button type="submit" onClick={() => navigate("/login")} class="btn btn-primary btn-block mt-2">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Register