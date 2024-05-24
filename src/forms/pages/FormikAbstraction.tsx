import "../styles/styles.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MyCheckBoxInput, MySelectInput, MytextInput } from "../components";




export const FormikAbstraction = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    jobType: Yup.string().notOneOf(["it-jr"],"this option it is not available")
                         .required("you should select one choice"),
    terms: Yup.boolean().required("Required")
              .oneOf([true], "You should accept")
                          
  });

  return (
    <div>
      <h1>Formik FormikComponent </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "bb@asdf.co",
          jobType:"",
          terms: false,
        }}
        onSubmit={(values) => {
          console.log(values);
          values;
        }}
        validationSchema={SignupSchema}
      >
        {(_props) => (
          <Form>
            {/* <label htmlFor="firstName">First Name</label>
            <Field type="string" name={"firstName"} placeholder="firstName" />
            <ErrorMessage name="firstName" component={"span"} /> */}

            <MytextInput name="firstName" label="firstName" type="text" placeholder="firstNameeee"/>
            
            <MytextInput name="lastName" label="lastName" placeholder="lastName" type="text"/>

            <MytextInput name="email" label="email" placeholder="email" type="email"/>

          
           {/* <label htmlFor="jobType">jobType</label>
            <Field as="select" name={"jobType"} placeholder="jobType">
              <option value=""></option>
              <option value="developer">developer</option>
              <option value="designer" >designer</option>
              <option value="it-senior">it-senior</option>
              <option value="it-jr"    >it-jr</option>
            </Field>
            <ErrorMessage name="jobType" component={"span"} /> */}

            <MySelectInput label="jobType" name={"jobType"} >
              <option value=""></option>
              <option value="developer">developer</option>
              <option value="designer" >designer</option>
              <option value="it-senior">it-senior</option>
              <option value="it-jr"    >it-jr</option>
            </MySelectInput>



            {/* <label> terms<Field type="checkbox" name={"terms"} /></label>
            <ErrorMessage name="terms" component={"span"} /> */}
            <MyCheckBoxInput label={"terms"} name={"terms"}/>

            <button type="submit">Submit</button>


          </Form>
        )}
      </Formik>
    </div>
  );
};
