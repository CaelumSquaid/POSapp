import { Form, Formik, yupToFormErrors } from "formik";
import Image from "next/image";
import Logo from "../images/POS.svg";
import React from "react";
import { object, string } from "yup";
import FormInput from "../components/FormInput";
import Link from "next/link";

const validation = object({
  username: string().required("**Required").nullable(),
  password: string().required("**Required").nullable(),
});

const initialValues = {
  username: null,
  password: null,
};

function login() {
  return (
    <>
      <Formik
        validationSchema={validation}
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ touched, errors, isLoading }) => {
          return (
            <div className="flex space-x-10 items-center justify-center h-screen">
              <Form
                autoComplete="off"
                className="flex flex-col w-[30vw] p-10 rounded-lg"
              >
                <div className="flex items-center justify-center mb-9">
                  <div className="mr-4">
                    <Image src={Logo} width={50} height={60} alt="Logo" />
                  </div>
                  <div className="text-gray-800">
                    <h1 className="text-4xl font-black">POS System</h1>
                    <h6 className=" text-base font-semibold">Washguy Laundromat</h6>
                  </div>
                </div>

                {/* <h1 className="text-center text-4xl font-black text-gray-800 mb-12">
                  Sign in to your account
                </h1> */}
                <FormInput
                  type="text"
                  name="username"
                  label="Username"
                  required
                />
                <FormInput
                  type="password"
                  name="password"
                  label="Password"
                  required
                />
                <button type="submit" className="mt-9">
                  Sign In
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default login;
