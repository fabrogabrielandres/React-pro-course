import "../styles/styles.css";
import {  useFormik } from "formik";
import * as Yup from 'yup';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}


export const FormikYupPage = () => {

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });
    
  const {  handleSubmit, errors, touched,  getFieldProps, handleBlur,handleChange , values } = useFormik<FormValues>({
    initialValues: {
      firstName: "aa",
      lastName: "bb",
      email: "bb",
    },
    onSubmit(values ) {
      console.log(values);
    },
    validationSchema: SignupSchema 
  });


  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">firstName</label>
        <input
          type="text"
        //   {...getFieldProps("firstName")}
        // if i used {...getFieldProps(rr) i do not need use the next funtions value / onblur / onchange} 
        value={values.firstName}
        onBlur =  {handleBlur("firstName")}
        onChange={handleChange("firstName")}
        
        ></input>
        {touched.firstName && errors.firstName && <span>{JSON.stringify(errors.lastName)}</span> }

        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          {...getFieldProps("lastName")}
        ></input>
        {touched.lastName && errors.lastName && <span>{JSON.stringify(errors.lastName)}</span>}

        <label htmlFor="email"> email Adress</label>
        <input
          type="email"
          {...getFieldProps("email")}
        ></input>
        {touched.email && errors.email && <span>{JSON.stringify(errors.email)}</span>}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
