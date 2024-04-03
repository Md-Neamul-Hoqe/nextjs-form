'use client'

import InputField from '@/components/input';
import InputLabel from '@/components/label';
import { Form, useForm } from 'react-hook-form';

export default function FormAside() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const formDataSubmit = data => {
        console.log('data on the form: ', data);

        return alert(`Hello ${data.name}`)
    }

    return (
        <form className='flex flex-col gap-5 card-body' onSubmit={handleSubmit(formDataSubmit)}>
            <div className="form-control">
                <InputLabel label="Name" />
                <InputField type='text' register={register} errors={errors} placeholder='Your name...' name='name' />
            </div>
            <div className="form-control">
                <InputLabel label='Email' />
                <InputField register={register} errors={errors} name='email' type='email' options={{ required: true }} placeholder='yourname@provider.com' />
            </div>
            <div className="form-control">
                <InputLabel label='Phone' />
                <InputField register={register} errors={errors} name='phone' type='tel' placeholder='+880 17XXX XX XX' />
            </div>
            <div className='flex justify-end'>
                <button className='btn' type='submit'>Submit now</button>
            </div>
        </form>
    );
}