import { ErrorMessage, Field } from "formik";

function FormInput(props) {

  const {label} = props || 'Label here'
  return (
    <div className="flex flex-col w-full text-gray-700 mt-4">
      <span className="font-semibold mb-2">{label}</span>
      <Field className="bg-gray-200 px-4 py-2 rounded focus-within:ring focus-within:ring-indigo-700 outline-none" {...props}/>
      <ErrorMessage name={props.name} component="span" className="text-red-800 text-sm mt-1"/>
    </div>
  );
}

export default FormInput;
