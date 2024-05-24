import "../styles/styles.css";
import { FormikErrors, useFormik } from "formik";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ email, firstName, lastName }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!firstName) {
      errors.firstName = "Required";
    } else if (firstName.length >= 15) {
      errors.firstName = "firstame must be 15 charter or less";
    }

    if (!lastName) {
      errors.lastName = "Required";
    } else if (lastName.length >= 15) {
      errors.firstName = "lastName must be 15 charter or less";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email addres";
    }
    return errors
  };

  const { handleChange, handleSubmit, values,  errors, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit(values ) {
      console.log(values);
    },
    validate
  });

  const { email, firstName, lastName } = values;

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">firstName</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={firstName}
        ></input>
        {touched.firstName && errors.firstName && <span>{JSON.stringify(errors.lastName)}</span> }

        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={lastName}
        ></input>
        {touched.lastName && errors.lastName && <span>{JSON.stringify(errors.lastName)}</span>}

        <label htmlFor="email"> email Adress</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={email}
        ></input>
        {touched.email && errors.email && <span>{JSON.stringify(errors.email)}</span>}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
