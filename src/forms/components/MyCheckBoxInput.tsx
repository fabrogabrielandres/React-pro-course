import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  [key: string]: any;
}

export const MyCheckBoxInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props });

  return (
    <>
      <label>
        {label}
        <input  {...field} {...props}  type="checkbox"   />
      </label>

      {meta.touched && meta.error &&  <span className="error">{meta.error}</span> }
    </>
  );
};
