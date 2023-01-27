import React, { useState } from "react";
import { useFormik } from "formik";
import { signupSchema } from "./schemas";
import FetchData from "./FetchData";

const initialValues = {
  name: "",
  email: "",
  branch: "",
  phone: "",
  subject: [],
  mode: "",
  password: "",
  confirmPassword: "",
  acceptTerms: true,
};

const Registration = () => {
  const [data, setData] = useState([]);

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values) => {
        console.log(values);
        setData([...data, values]);
      },
    });
  // console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className={`input ${
              errors.name && touched.name ? "border-red-800" : ""
            }`}
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <span className="text-red-800">{errors.name}</span>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`input ${
              errors.email && touched.email ? "border-red-800" : ""
            }`}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <span className="text-red-800">{errors.email}</span>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="branch" className="font-semibold">
            Branch
          </label>

          <select className="select">
            <option value="">Please select your branch</option>
            <option value="cse">Computer Science</option>
            <option value="mechanical">Mechanical</option>
            <option value="civil">Civil Engg</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="font-semibold">
            Phone
          </label>
          <input
            type="number"
            id="phone"
            className={`input ${
              errors.phone && touched.phone ? "border-red-800" : ""
            }`}
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone ? (
            <span className="text-red-800">{errors.phone}</span>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="font-semibold">
            Subject
          </label>
          <label className="flex cursor-pointer gap-2">
            <input type="checkbox" name="subject" className="checkbox" />
            <span>Subject 1</span>
          </label>
          <label className="flex cursor-pointer gap-2">
            <input type="checkbox" name="subject" className="checkbox" />
            <span>Subject 2</span>
          </label>
          <label className="flex cursor-pointer gap-2">
            <input type="checkbox" name="subject" className="checkbox" />
            <span>Subject 3</span>
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="font-semibold">
            Preferred Classes Mode
          </label>
          <div>
            <span> Offline</span>
            <input type="checkbox" name="mode" className="switch mx-2" />
            <span>Online</span>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`input ${
              errors.password && touched.password ? "border-red-800" : ""
            }`}
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <span className="text-red-800">{errors.password}</span>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="font-semibold ">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={`input ${
              errors.confirmPassword && touched.confirmPassword
                ? "border-red-800"
                : ""
            }`}
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <span className="text-red-800">{errors.confirmPassword}</span>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="flex cursor-pointer gap-2">
            <input
              type="checkbox"
              name="acceptTerms"
              onChange={handleChange}
              value={values.acceptTerms}
              className={`checkbox ${
                errors.acceptTerms && touched.acceptTerms
                  ? "border-red-800"
                  : ""
              }`}
            />
            <span>Accept terms and conditions</span>
          </label>
          {errors.acceptTerms && touched.acceptTerms ? (
            <span className="text-red-800">{errors.acceptTerms}</span>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary font-semibold">
          Submit
        </button>
      </form>

      <div className="card bg-grey-500 p-6">
        <FetchData data={data} />
      </div>
    </>
  );
};

export default Registration;
