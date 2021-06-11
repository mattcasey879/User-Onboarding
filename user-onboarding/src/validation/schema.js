import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup 
        .string()
        .required('Password is required'),
    terms: yup
        .boolean()
        .oneOf([true], 'You must agree to terms')
})

export default formSchema