import React from 'react'
import vector1 from '../../assets/illustrations/undraw_fill_forms_yltj.svg'
import './Auth.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="auth container">
            <div className="auth-page">
                <div className="auth-page__vector">
                    <img src={vector1} alt="" />
                </div>
                <div className="auth-page__login">
                    <h1>Sign Up</h1>
                    <form className="login-form">
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button type="submit">Sign Up</button>
                    </form>
                    <div className="form-bottom">
                        <p>OR</p>
                        <button className="btn-secondary">
                            <Link to="/login">
                                Login
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
