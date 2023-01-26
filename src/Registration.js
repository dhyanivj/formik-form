import React from "react";
import { useFormik } from "formik";
import { signupSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Registration = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="input mb-4"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? <span className="text-red-800">{errors.name}</span> : null}
      </div>
       
     <div>
     <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="input mb-4"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
     </div>

   <div>
   <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="input mb-4"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
    </div>
        
      <div>
      <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          className="input mb-4"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Registration;
