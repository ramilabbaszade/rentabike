import React, { useContext} from "react";
import { useForm } from "react-hook-form";
import Input from '../../shared/components/FormElements/Input'
import Button from "../../shared/components/FormElements/Button";
import image1 from "../../assets/icons/register-bike.jpg";

import {AuthContext} from '../../shared/context/auth-context'

import "./Auth.css";

const Register = () => {
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
                    <img src={image1} alt='register' />
                </div>
                <div className='auth-page__login'>
                    <form onSubmit={handleSubmit(onSubmit)} className='form-login form-control'>
                        <h1>Sign Up</h1>
                        <Input
                            register={register({ required: true, maxLength: 20, minLength: 3 })}
                            element="input"
                            id='userName'
                            label="Username"
                            name='userName'
                            type='text'
                            placeholder="Your name"
                            errors={errors.userName && "(min 3, max 20 character must use)"}
                        />
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
                        <Button inverse type='submit'>Register</Button>
                    </form>

                    <div className='form-bottom'>
                        <p>OR</p>
                        <Button to="/login">
                            Switch to Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
