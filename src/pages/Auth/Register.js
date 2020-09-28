import React from "react";
import { useForm } from "react-hook-form";
import Input from '../../shared/components/FormElements/Input'

import image1 from "../../assets/illustrations/undraw_fill_forms_yltj.svg";
import Button from "../../shared/components/FormElements/Button";
import "./Auth.css";

const Login = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur'
    });
    const onSubmit = (data, e) => {
        alert(JSON.stringify(data));
        e.target.reset();
    };
    return (
        <div className='auth container'>
            <div className='auth-page'>
                <div className='auth-page__vector'>
                    <img src={image1} alt='login' />
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

export default Login;
