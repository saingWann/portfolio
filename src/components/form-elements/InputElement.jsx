import React from "react";
import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="font-bold mt-4" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className="w-full p-2 rounded-md mt-3  focus:outline-purple-700 focus:ring-purple-700 text-black"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default MyTextInput;
