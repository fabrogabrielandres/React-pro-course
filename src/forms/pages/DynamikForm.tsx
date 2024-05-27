import React from "react";
import * as Yup from 'yup';
import { Form, Formik } from "formik";
import { MySelectInput, MytextInput } from "../components";
import data from "../data/custom-Form.json";

const initialValues: { [key: string]: any } = {};

const requiredFilds : {[key:string]:any} = {} ;

for (const input of data) {
    initialValues[ input.name ] = input.value;

    if ( !input.validations ) continue;

    let schema = Yup.string()

    for (const rule of input.validations ) {
        if ( rule.type === 'required' ) {
            schema = schema.required('Este campo es requerido');
        }

        if ( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2, `Min  ${ (rule as any).value || 2 } caracteres`);
        }

        if ( rule.type === 'email' ) {
            schema = schema.email( `Format not valid`);
        }

        // ... otras reglas
    }

    requiredFilds[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFilds });

export const DynamikForm = () => {
  return (
    <div>
      <h1>DynamikForm</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(_props) => (
          <Form>
            {data.map(({ label, name, placeholder, type, options }) => {
              return type == "select" ? (
                <MySelectInput label={label} name={name} key={name}>
                  <option key={""} value={""}>
                    {"Select an option"}
                  </option>
                  {options?.map((selectOption) => (
                    <option key={selectOption.id} value={selectOption.id}>
                      {selectOption.label}
                    </option>
                  ))}
                </MySelectInput>
              ) : (
                <MytextInput
                  key={name}
                  placeholder={placeholder}
                  label={label}
                  name={name}
                  type={type as any}
                />
              );
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
