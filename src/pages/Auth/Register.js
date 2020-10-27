import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from '../../shared/components/FormElements/Input'
import Button from "../../shared/components/FormElements/Button";
import image1 from "../../assets/icons/register-bike.jpg";

import { AuthContext } from '../../shared/context/auth-context'

import "./Auth.css";

const Register = () => {
    useEffect(() => {
        document.title = "Qeydiyyat - velorent.az"
    }, [])


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
                        <h1>Qeydiyyat</h1>
                        <Input
                            register={register({ required: true, maxLength: 20, minLength: 3 })}
                            element="input"
                            id='userName'
                            label="İstifadəçi adı"
                            name='userName'
                            type='text'
                            placeholder="İstifadəçi adını daxil edin"
                            errors={errors.userName && "Adı düzgün daxil edin (min 3, max 20 xarakter olmalıdır)"}
                        />
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
                        <Button type='submit'>Təsdiqlə</Button>
                    </form>

                    <div className='form-bottom'>
                        <p>ya da</p>
                        <Button inverse to="/login">
                            Giriş et
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
