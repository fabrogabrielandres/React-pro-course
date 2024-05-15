import React from "react";
import "../styles/styles.css";

export const FormikBasicPage = () => {
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate >
        <label htmlFor="firstName"></label>
        <input type="text" name="firstName"></input>
        <span>firstName is required</span>

        <label htmlFor="lastName"></label>
        <input type="text" name="lastName"></input>
        <span>lastName is required</span>

        <label htmlFor="email"> email Adress</label>
        <input type="email" name="email"></input>
        <span>email is required</span>
        <span>check for an valid format</span>
        
        
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
