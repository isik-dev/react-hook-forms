import React from "react";
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
    firstName: string,
    lastName: string
}

type IFormInputs = {
    name: string;
    showAge: boolean,
    age: number;
}

type HandleSubmitFormValues = {
    firstName: string,
    lastName: string,
    email: string
}

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const UseFormComponent = () => {
    {/* // #### register ####
        
        const { register, handleSubmit } = useForm({

    });
    const onSubmit = (data: any) => alert(JSON.stringify(data));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName', { required: true })} placeholder='First name' />
            <input {...register('lastName', { minLength: 2 })} placeholder="Last name" />

            <select {...register('category')}>
                <option value="">Select...</option>
                <option value="A">Category A</option>
                <option value="B">Category B</option>
            </select>

            <input {...register("checkbox")} type="checkbox" value="A" />
            <input {...register("checkbox")} type="checkbox" value="B" />
            <input {...register("checkbox")} type="checkbox" value="C" />

            <input {...register("radio")} type="radio" value="A" />
            <input {...register("radio")} type="radio" value="B"/>
            <input {...register("radio")} type="radio" value="C"/>

            <input type="submit" />
        </form>        
    ) */}



    {/*  // #### formState ###
        
        const { register, handleSubmit, formState: { errors, isDirty, isSubmitting, isSubmitSuccessful, touchedFields, submitCount, isValid } } = useForm({
        mode: 'onChange',
        defaultValues: {
            firstName: "",
            lastName: ""
        }
    })
    const onSubmit = () => {};


    console.log(isValid, 'isValid');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true })} placeholder="First name" />
            <input {...register("lastName", { required: true })} placeholder="Last name" />
            <input type="submit" />
        </form>
    ) */}

    {/* // #### watch ####
        
    const { register, handleSubmit, watch, formState: {errors} } = useForm<IFormInputs>();
    const watchShowAge = watch('showAge', false);
    const watchAllFields = watch();
    const watchFields = watch(['showAge', 'age'])

    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => console.log(value, name, type))
        return () => subscription.unsubscribe();
    },[]);

    const onSubmit = (data: IFormInputs) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name', { required: true, maxLength: 50 })} />
            <input type="checkbox" {...register('showAge')} />
            {watchShowAge && (<input type='number' {...register('age', {min: 50})} />)}
            <input type="submit" />
        </form>
    ) */}

    const { register, handleSubmit } = useForm();
   
    const onSubmit: SubmitHandler<HandleSubmitFormValues> = async data => {
        await sleep(2000)
        if (data.firstName === 'David') {
            alert(JSON.stringify(data))
        } else {
            alert('There is an error')
        }
    };

    const onError = () => {
        console.log('wrong');
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName')} />
            <input {...register('lastName')} />
            <input type="email" {...register('email')} />

            <input type="submit" />
        </form>
    );

}