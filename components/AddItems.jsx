import { FieldArray } from "formik";
import React from "react";
import FormInput from "./FormInput";

function AddItems({ name }) {
  return (
    <FieldArray name={name}>
      {({ form, insert, remove }) => {
        console.log(form.values.items.length);
        return (
          <div className="p-4 border rounded mt-9">
            <button
              className="bg-green-500 my-2 px-2 py-1 rounded text-white font-semibold hover:bg-green-600"
              onClick={() => insert(0, { description: "", qty: "", price: "" })}
            >
              Add Item
            </button>
            <div className="overflow-auto max-h-[50vh] px-4">
              {form.values.items.map((val, indx) => {
                return (
                  <div
                    key={indx}
                    className="flex items-end justify-center space-x-4"
                  >
                    <FormInput
                      name={`items[${indx}].description`}
                      label="Item Description"
                    />
                    <FormInput name={`items[${indx}].price`} label="Price" />
                    <FormInput name={`items[${indx}].qty`} label="Qty" />
                    <button
                      className="bg-red-600 rounded py-1 px-2 text-white font-semibold hover:bg-red-700"
                      type="button"
                      onClick={() => remove(indx)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="m-4 mt-10 border-t-2 pt-4 flex justify-end">
                <h6>Total:</h6>
                <h6>P500.00</h6>
            </div>
          </div>
        );
      }}
    </FieldArray>
  );
}

export default AddItems;
