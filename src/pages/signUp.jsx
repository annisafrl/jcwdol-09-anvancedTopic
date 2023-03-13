import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { signUpUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

function SignUp() {
    const LoginSchema = Yup.object().shape({
        username: Yup.string()
            .min(6, "username must contain min 6 characters")
            .required("username can't be empty"),
        email: Yup.string()
            .email("wrong format email")
            .required("email can't be empty"),
        password: Yup.string()
            .min(6, "password must contain min 6 characters")
            .required("password can't be empty")
    })



    return (
        <div className="flex justify-center items-center h-screen bg-purple-50">
            <Formik
                initialValues={{ username: "", email: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(value) => {
                    console.log(value)
                    const dispatch = useDispatch()
                    dispatch(signUpUser(value))
                }}
            >
                {(props) => {
                    return (
                        <div className='w-1/4'>
                            <Form>
                                {/* <p className="text-4xl">{props.errors.email}</p> */}
                                <div className='flex flex-col'>
                                    <label htmlFor="username">username</label>
                                    <Field type="text" name="username" class="border-2" />
                                    <ErrorMessage
                                        component="div"
                                        name="username"
                                        style={{ color: "red" }} />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="email">Email</label>
                                    <Field type="text" name="email" class="border-2" />
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                        style={{ color: "red" }} />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" name="password" class="border-2" />
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                        style={{ color: "red" }} />
                                </div>
                                <button type="submit" className="bg-purple-300 py-1 px-3 rounded-md mt-10"
                                >Sign Up</button>
                            </Form>
                        </div>
                    )
                }}
            </Formik>
        </div>
    )
}

const signup = () => {
    console.log(value)
    dispatc
}

export default SignUp