import React, {useEffect} from 'react'

import { useForm } from "react-hook-form";
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import './ForgotPassword.css'

const ForgotPassword = () => {
  useEffect(()=>{
      document.title="Şifrəni sıfırla"

  },[])

    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur'
    });
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    };
    return (
        <div className="forgotPassword-page container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register({ required: true })}
                    element="input"
                    id='email'
                    label="Email yaz"
                    name='email'
                    type='email'
                    placeholder='Email'
                    errors={errors.email && "Please type a valid email"}
                />
                <Button size='small'>
                    Göndər
                </Button>
            </form>
        </div>
    )
}

export default ForgotPassword
