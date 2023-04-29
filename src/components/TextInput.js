import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
  
  const [field, meta] = useField(props);
  
  return (
    <>
      <label 
        className={meta.error ? "textLabel errorLabel" : "textLabel"}
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input 
        className={meta.error ? "textInput errorInput" : "textInput"}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;