import { Dialog } from "@headlessui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { TiUserDelete } from "react-icons/ti";
import FormInput from "./FormInput";

function DeleteUser({ datas }) {
  const [isOpen, setOpen] = useState(false);

  const initialValues = { ...datas };

  return (
    <div>
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 border text-sm font-semibold text-red-500 border-red-500 rounded hover:bg-red-500 hover:text-white"
      >
        <TiUserDelete className="text-xl"/>
        <span className="font-bold">Delete</span>
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setOpen(false)}
        className="fixed inset-0 z-10 overflow-hidden"
      >
        <Dialog.Overlay className="fixed inset-0 p-6 bg-black/50" />
        <div className="text-gray-700 fixed p-9 bg-gray-50 rounded top-12 left-1/2 transform -translate-x-1/2 overflow-auto max-h-[80vh] w-[30vw]">
          <Dialog.Title className="flex items-center justify-center space-x-4 font-black mb-9">
            <TiUserDelete className="text-red-500 text-3xl" />
            <h6 className="text-3xl">Delete User</h6>
          </Dialog.Title>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
          >
            {() => {
              return (
                <Form>
                  <FormInput name="userName" label="Username" disabled />
                  <FormInput name="firstName" label="First Name" disabled />
                  <FormInput name="lastName" label="Last Name" disabled />
                  <button type="submit" className="mt-12">
                    Delete
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Dialog>
    </div>
  );
}

export default DeleteUser;
