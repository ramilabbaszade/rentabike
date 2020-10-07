import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from '../../shared/components/FormElements/Input'

import image1 from "../../assets/icons/login-bike.jpg";
import Button from "../../shared/components/FormElements/Button";
import "./Auth.css";
import { AuthContext } from "../../shared/context/auth-context";

const Login = () => {
    const auth = useContext(AuthContext)

    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur'
    });
    const onSubmit = (data, e) => {
        console.log(JSON.stringify(data));
        e.target.reset();
        auth.login()
    };
    return (
        <div className='auth'>
            <div className='auth-page'>
                <div className='auth-page__vector'>
                    <img src={image1} alt='login' />
                </div>
                <div className='auth-page__login'>
                    <h1>Log In</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='form-login'>
                        <Input
                            register={register({ required: true })}
                            element="input"
                            id='email'
                            label="Email"
                            name='email'
                            type='email'
                            placeholder='Email'
                            errors={errors.email && "Please type a valid email"}
                        />
                        <Input
                            register={register({ required: true })}
                            element="input"
                            id='password'
                            label="Password"
                            name='password'
                            type='password'
                            placeholder='Password'
                            errors={errors.password && "Please type a valid password"}
                        />
                        <Link to='/'>
                            <small>
                                Forgot password?
                            </small>
                        </Link>
                        <Button inverse type='submit'>Login</Button>
                    </form>

                    <div className='form-bottom'>
                        <p>OR</p>
                        <Button to="/register">
                            Switch to SignUp
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
