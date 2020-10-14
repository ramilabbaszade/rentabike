import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import Button from "../../shared/components/FormElements/Button";
import FileInput from "../../shared/components/FormElements/FileInput";
import Input from "../../shared/components/FormElements/Input";
import { USER } from '../../data'
import cities from '../../az.json'

import './ProfileEdit.css'

const ProfileEdit = () => {
    useEffect(() => {
        document.title = 'Hesab bilgilərini dəyiş - velorent.az'
    }, [])


    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur",
    });
    const onSubmit = (data, e) => {
        alert(JSON.stringify(data));
        e.target.reset();
    };
    return (
        <div className='profile-edit container'>
            <h1>Edit profile</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='form-edit-profile'>
                <div className="form-edit-profile__inputs">
                    <Input
                        register={register}
                        id='username'
                        name='username'
                        label='Username'
                        element='input'
                        defaultValue={USER.name}
                        type='text'
                        placeholder='Your name'
                        errors={errors.username && "(min 3, max 20 character must use)"}
                    />
                    <Input
                        register={register}
                        id='bio'
                        name='bio'
                        onChange={(e) => e.target.value}
                        label='Bio'
                        defaultValue={USER.bio}
                        errors={errors.bio && "(bio yes)"}
                    />
                    <Input
                        element='select'
                        name='city'
                        register={register}
                        label='City'
                        defaultValue={USER.city}
                        errors={errors.city && "City is required"}>
                        {cities.map((item, i) => {
                            return <option key={i} value={item.city}> {item.city} </option>;
                        })}
                    </Input>
                    <Input
                        register={register}
                        element='input'
                        id='email'
                        defaultValue={USER.email}
                        label='Email'
                        name='email'
                        type='email'
                        placeholder='Email'
                        errors={errors.email && "Please type a valid email"}
                    />
                    <Input
                        register={register}
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
                </div>
                <FileInput
                    name="avatar"
                    id="avatar"
                    label="Profili dəyiş"
                    register={register()}
                />
            </form>
        </div>
    );
};

export default ProfileEdit;
