import React from "react";
import {useForm } from "react-hook-form";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";

const ProfileEdit = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur",
    });
    const onSubmit = (data, e) => {
        alert(JSON.stringify(data));
        e.target.reset();
    };
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)} className='form-edit-profile'>
                <h1>Edit profile</h1>
                <Input
                    register={register({ required: true })}
                    id='username'
                    name='username'
                    label='Username'
                    element='input'
                    defaultValue="Tom"
                    type='text'
                    placeholder='Your name'
                    errors={errors.username && "(min 3, max 20 character must use)"}
                />
                <Input
                    register={register({ required: true })}
                    element='input'
                    id='email'
                    defaultValue="admin@gmail.com"
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='Email'
                    errors={errors.email && "Please type a valid email"}
                />
                <Input
                    register={register({ required: true })}
                    element='input'
                    id='password'
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='Password'
                    errors={errors.password && "Please type a valid password"}
                />
                <Button inverse type='submit'>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ProfileEdit;
