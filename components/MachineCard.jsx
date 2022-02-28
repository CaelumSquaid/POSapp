import { Dialog } from "@headlessui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { GiWashingMachine } from "react-icons/gi";
import AddItems from "./AddItems";
import FormInput from "./FormInput";

function MachineCard({ datas }) {
  const [isOpen, setOpen] = useState(false);

  const initialValues = {
    machine: datas.machine || "",
    customerName: "",
    customerContact: "",
    items: [{ description: "", qty: "", price: "" }],
  };

  return (
    <>
      <div
        onClick={() => setOpen(!isOpen)}
        className="relative border h-[15vh] min-w-[170px] bg-white rounded-lg p-4 cursor-pointer group shadow-lg hover:ring-2 hover:ring-indigo-400 "
      >
        <div className="h-4 w-4 bg-red-400 rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 group-hover:ring-2 group-hover:ring-red-500"></div>
        <h6 className="text-2xl font-black group-hover:text-indigo-600">
          {`Machine ${datas.machine}`}
        </h6>
        <span className="text-gray-400 group-hover:text-indigo-600">
          {datas.status}
        </span>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setOpen(false)}
        className="fixed inset-0 z-10"
      >
        <Dialog.Overlay className="fixed inset-0 bg-gray-300/50" />
        <div className="absolute bg-white p-4 rounded-lg max-w-[70vw] top-12 left-1/2 -translate-x-1/2">
          <Formik initialValues={initialValues}>
            {({ values }) => {
              return (
                <Form className="flex space-x-5">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold">New Transaction</h1>
                    <FormInput name="machine" label="Machine No" disabled />
                    <FormInput name="customer" label="Customer Name" />
                    <FormInput
                      name="customerContact"
                      label="Customer Contact"
                    />
                    <button type="submit" className="my-9">
                      Transact
                    </button>
                  </div>
                  <div className="flex-1">
                    <AddItems name="items" />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Dialog>
    </>
  );
}

export default MachineCard;
