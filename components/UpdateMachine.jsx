import { Dialog } from "@headlessui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import FormInput from "./FormInput";

function UpdateMachine({ datas }) {
  const [isOpen, setOpen] = useState(false);

  const initialValues = { ...datas };

  return (
    <div>
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 border text-sm font-semibold text-indigo-600 border-indigo-600 rounded hover:bg-indigo-600 hover:text-white"
      >
        <FaExchangeAlt />
        <span className="font-bold">Updates</span>
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setOpen(false)}
        className="fixed inset-0 z-10 overflow-hidden"
      >
        <Dialog.Overlay className="fixed inset-0 p-6 bg-black/50" />
        <div className="text-gray-700 fixed p-9 bg-gray-50 rounded top-12 left-1/2 transform -translate-x-1/2 overflow-auto max-h-[80vh] w-[30vw]">
          <Dialog.Title className="flex items-center justify-center space-x-4 font-black mb-9">
            <FaExchangeAlt className="text-indigo-600 text-2xl" />
            <h6 className="text-3xl">Update Machine</h6>
          </Dialog.Title>
          <Formik initialValues={initialValues}>
            {() => {
              return (
                <Form>
                  <FormInput name="machine" label="Machine No" />
                  <FormInput name="make" label="Make" />
                  <FormInput name="model" label="Model" />
                  <FormInput name="status" label="Status" />
                  <button type="submit" className="mt-12">
                    Update
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

export default UpdateMachine;
