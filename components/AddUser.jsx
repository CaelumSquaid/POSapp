import { Form, Formik } from "formik";
import React from "react";
import { TiUserAdd } from "react-icons/ti";
import FormInput from "./FormInput";

const initialValues = {};

function AddUser() {
  return (
    <>
      <Formik initialValues={initialValues}>
        {() => {
          return (
            <Form autoComplete="off" className="w-full border-2 px-4 py-6 rounded-lg">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <TiUserAdd className="text-3xl text-indigo-700" />
                <h6 className="text-2xl font-black">New User</h6>
              </div>
              <FormInput name="userName" label="Username" />
              <FormInput name="firstName" label="First Name" />
              <FormInput name="lastName" label="Last Name" />
              <FormInput name="contact" label="Contact" />
              <FormInput name="password" type="password" label="Password" />
              <FormInput name="confirmPassword" type="password" label="Confirm Password" />
              <button type="submit" className="mt-12 ">
                Create
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default AddUser;
