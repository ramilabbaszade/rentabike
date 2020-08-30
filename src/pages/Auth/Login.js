import React from 'react'
import image1 from '../../assets/illustrations/undraw_sign_in_e6hj.svg'
import './Auth.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="auth container">
            <div className="auth-page">
                <div className="auth-page__vector">
                    <img src={image1} alt="" />
                </div>
                <div className="auth-page__login">
                    <h1>Log In</h1>
                    <form className="login-form">
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                    <div className="form-bottom">
                        <p>OR</p>
                        <button className="btn-secondary">
                            <Link to="/register">
                                Register
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
