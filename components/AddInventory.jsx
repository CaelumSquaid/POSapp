import { Form, Formik } from "formik";
import React from "react";
import { CgExtensionAdd } from "react-icons/cg";
import FormInput from "./FormInput";

const initialValues = {};

function AddInventory() {
  return (
    <>
      <Formik initialValues={initialValues}>
        {() => {
          return (
            <Form autoComplete="off" className="w-full border px-4 py-6 rounded">
              <div className="flex items-center justify-center space-x-2 mt-2 mb-7">
                <CgExtensionAdd className="text-3xl text-indigo-700" />
                <h6 className="text-2xl font-black">New Inventory</h6>
              </div>
              <FormInput name="num" label="Description" />
              <FormInput name="num" label="Price" />
              <FormInput name="num" label="Unit" />
              <FormInput name="num" label="Category" />
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

export default AddInventory;
