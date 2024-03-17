import { useField } from "formik";

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col relative gap-1 items-start mb-4">
      <label htmlFor={props.id} className="font-bold mt-4">
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        className="w-full mt-2 bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      ></textarea>

      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default TextArea;
