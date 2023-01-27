import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  name: Yup.string().min(2).max(22).required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().min(10).max(10).required("Phone number is required"),
  branch: Yup.string()
    .oneOf(["cse", "mechanical", "civil"], "Please select your branch")
    .required("Branch is required"),
  subject: Yup.array()
    .min(1, "Please select at least one subject")
    .required("Subject is required"),
  password: Yup.string().min(6).max(22).required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  acceptTerms: Yup.bool()
    .oneOf([true], "Please accept Terms & Conditions")
    .required("Please accept Terms & Conditions"),
  offlineMode: Yup.bool(),
});
