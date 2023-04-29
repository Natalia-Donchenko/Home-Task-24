import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import SubmitBtn from "./btns/SubmitBtn";

const UsersForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        phoneNumber: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Maximum number of characters 15")
          .required("Required field"),
        email: Yup.string()
          .email("Invalid email address")  
          .required("Required field"),
        phoneNumber: Yup.string()
          .matches(/^\+380([0-9][0-9])[0-9]{7}/gm, "Invalid phone number. Expected: +380(operator's code)(phone number)")
          .required("Required field"),
      })}
      onSubmit={
        (values, { setSubmitting }) => {
          console.log(values)
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)

        return <div>{values}</div>
      }
    }
    >
      <div className="container">
        <h1 className="total-title">Form of registration</h1>
        <Form className="usersForm">
          <TextInput 
            label="First name:"
            name="firstName"
            type="text"
            placeholder="Nata"
          />
          <TextInput 
            label="Email adress:"
            name="email"
            type="email"
            placeholder="nata@gmail.com"
          />
          <TextInput 
            label="Phone number:"
            name="phoneNumber"
            type="tel"
            placeholder="+380937823127"
          />
          <div>
            <SubmitBtn />
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default UsersForm;