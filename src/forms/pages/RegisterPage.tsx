import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/styles.css";
import { useForm } from "../Hooks/useForm";

export const RegisterPage = () => {
  const {
    onChange,
    onSubmit,
    isValidEmail,
    registerForm,
    email,
    name,
    password1,
    password2,
    resetForm,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate className="form" onSubmit={onSubmit}>
        <input
          type="text"
          className={`${name.trim().length <= 0 && "has-error"}`}
          onChange={onChange}
          placeholder="name"
          name="name"
          value={name}
        />
        {name.trim().length <= 0 && (
          <span className="has-error">This fild is required</span>
        )}
        <input
          className={`${!isValidEmail(email) && "has-error"}`}
          onChange={onChange}
          placeholder="email"
          name="email"
          value={email}
        />
        {!isValidEmail(email) && (<span className="has-error">This fild is invalid</span>)}
        <input
          className="input"
          onChange={onChange}
          placeholder="password"
          name="password1"
          value={password1}
        />
        {password1.trim().length <= 0 && (<span className="has-error">This fild is required</span>)}
        {password2 != password1 && (<span className="has-error"> password1 should the same password2 </span>)}
        <input
          className="input"
          onChange={onChange}
          placeholder="repeat password"
          value={password2}
          name="password2"
        />
        {password2.trim().length <= 0 && (<span className="has-error">This fild is required</span>)}
        {password2 != password1 && (<span className="has-error"> password1 should the same password2 </span>)}
        
        <button type="submit">Create</button>
        <button onClick={resetForm}>Reset</button>
      </form>
      <div>{JSON.stringify(registerForm, null, 3)}</div>
    </div>
  );
};
