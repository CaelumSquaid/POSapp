import { Form, Formik } from "formik";
import React from "react";
import { CgExtensionAdd } from "react-icons/cg";
import FormInput from "./FormInput";

const initialValues = {};

function AddMachine() {
  return (
    <>
      <Formik initialValues={initialValues}>
        {() => {
          return (
            <Form autoComplete="off" className="w-full border-2 px-4 py-6 rounded-lg">
              <div className="flex items-center justify-center space-x-2 mt-2 mb-7">
                <CgExtensionAdd className="text-3xl text-indigo-700" />
                <h6 className="text-2xl font-black">New Machine</h6>
              </div>
              <FormInput name="num" label="Machine No" />
              <FormInput name="num" label="Make" />
              <FormInput name="num" label="Model" />
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

export default AddMachine;
