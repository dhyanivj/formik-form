import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
    name: Yup.string().min(2).max(22).required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    phone: Yup.string().min(10).max(10).required('Phone number is required'),
    password: Yup.string().min(6).max(22).required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
});