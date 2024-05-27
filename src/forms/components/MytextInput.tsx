import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  type: "text" | "email" | "password";
  placeholder?: string;
  [key: string]: any;
}

export const MytextInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  // console.log("field", field);
  // console.log("meta", meta);
  // console.log("props", props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};
