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
  // console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="font-semibold">Name</label>
          <input
            type="text"
            id="name"
            className="input"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? <span className="text-red-800">{errors.name}</span> : null}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="font-semibold">Email</label>
          <input
            type="email"
            id="email"
            className="input"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="font-semibold">Password</label>
          <input
            type="password"
            id="password"
            className="input"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="font-semibold ">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="input"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <button type="submit" className="btn btn-primary font-semibold">Submit</button>
      </form>
    </>
  );
};

export default Registration;
