import "../styles/styles.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MytextInput } from "../components";

export const RegisterFormikPage = () => {
  const initialValues = {
    firstName: "",
    email: "",
    password1: "",
    password2: "",
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password1: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password2")], "Must be equal to password2"),
    password2: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password1")], "Must be equal to password1"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div>
      <h1>RegisterFormikPage</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          values;
        }}
        validationSchema={SignupSchema}
        onReset={()=>{

        }}

      >
        {(_props) => (
          <Form>
            <MytextInput
              label={"First Name"}
              name={"firstName"}
              type={"text"}
            ></MytextInput>

            <MytextInput
              label={"Email"}
              name={"email"}
              type={"email"}
            ></MytextInput>

            <MytextInput
              label={"Password"}
              name={"password1"}
              type={"password"}
            ></MytextInput>

            <MytextInput
              label={"Repeat Password"}
              name={"password2"}
              type={"password"}
            ></MytextInput>

            <button type="reset" onClick={_props.handleReset}>Reset Form</button>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
