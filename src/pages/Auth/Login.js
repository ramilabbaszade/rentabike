import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from '../../shared/components/FormElements/Input'

import image1 from "../../assets/icons/login-bike.jpg";
import Button from "../../shared/components/FormElements/Button";
import "./Auth.css";
import { AuthContext } from "../../shared/context/AuthContext";

const Login = () => {
    useEffect(() => {
        document.title = "Giriş - veloorent.com"
    }, [])


    const {logInAuth} = useContext(AuthContext)

    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur'
    });
    const onSubmit = (data, e) => {
        console.log(JSON.stringify(data));
        e.target.reset();
        logInAuth()
    };
    return (
        <div className='auth'>
            <div className='auth-page'>
                <div className='auth-page__vector'>
                    <img src={image1} alt='login' />
                </div>
                <div className='auth-page__login'>
                    <h1>Giriş</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='form-login'>
                        <Input
                            register={register({ required: true })}
                            element="input"
                            id='email'
                            label="Email"
                            name='email'
                            type='email'
                            placeholder='Email'
                            errors={errors.email && "Emaili düzgün daxil edin"}
                        />
                        <Input
                            register={register({ required: true })}
                            element="input"
                            id='password'
                            label="Şifrə"
                            name='password'
                            type='password'
                            placeholder='Şifrəni daxil edin'
                            errors={errors.password && "Şifrəni düzgün daxil edin"}
                        />
                        <Link to='/restore-account'>
                            <small>
                                Şifrəni unutdun?
                            </small>
                        </Link>
                        <Button type='submit'>Daxil ol</Button>
                    </form>

                    <div className='form-bottom'>
                        <p>ya da</p>
                        <Button inverse to="/register">
                            Qeydiyyatdan keç
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
