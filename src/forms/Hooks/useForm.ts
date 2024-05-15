import React, { ChangeEvent, FormEvent, useState } from "react";

export const useForm = <T>(initState:T) => {
  const [registerForm, setRegisterForm] = useState(initState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    setRegisterForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(registerForm);
  }

  const resetForm = ()=>{
    setRegisterForm({...initState})
  }

  const isValidEmail = ( email: string ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

  return {
    registerForm,
    ...registerForm,
    onChange,
    onSubmit,
    resetForm,
    isValidEmail
  };
};
