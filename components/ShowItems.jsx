import { Dialog } from "@headlessui/react";
import { data } from "autoprefixer";
import { useState } from "react";
import { HiOutlineClipboardList } from "react-icons/hi";

function ShowItems({ datas }) {
  const [isOpen, setOpen] = useState(false);
  const total = datas
    .map((val) => val.price * val.qty)
    .reduce((total, current) => total + current);
  const role = process.env.NEXT_PUBLIC_AUTHORIZATION;
  return (
    <div>
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 border text-sm font-semibold text-indigo-600 border-indigo-600 rounded hover:bg-indigo-600 hover:text-white"
      >
        <HiOutlineClipboardList />
        <span className="font-bold">Show List</span>
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setOpen(false)}
        className="fixed inset-0 z-10 overflow-hidden"
      >
        <Dialog.Overlay className="fixed inset-0 p-6 bg-black/50" />
        <div className="text-gray-700 fixed p-9 bg-gray-50 rounded top-12 left-1/2 transform -translate-x-1/2 overflow-auto max-h-[80vh] w-[50vw]">
          <Dialog.Title className="flex items-center justify-center space-x-2 font-black mb-9">
            <HiOutlineClipboardList className="text-indigo-600 text-3xl" />
            <h6 className="text-3xl">Item Lists</h6>
          </Dialog.Title>
          <div className="border p-2 rounded-lg relative">
            <div className="relative overflow-auto max-h-[48vh]">
              <table className="w-full table-auto border-collapse text-center">
                <thead>
                  <tr className="bg-indigo-50 sticky top-0">
                    <th className="pt-8 pb-2">Description</th>
                    <th className="pt-8 pb-2">Category</th>
                    <th className="pt-8 pb-2">Price</th>
                    <th className="pt-8 pb-2">Unit</th>
                    <th className="pt-8 pb-2">Quantity</th>
                    <th className="pt-8 pb-2">Total Amount</th>
                    {role === "Admin" ? <th className="pt-8 pb-2"></th> : null}
                  </tr>
                </thead>
                <tbody>
                  {datas.map((data, indx) => {
                    const totalPrice = data.qty * data.price;
                    return (
                      <tr
                        key={indx}
                        className="border-y last:border-none hover:bg-gray-100 cursor-pointer"
                      >
                        <td className="py-4">{data.description}</td>
                        <td className="py-4">{data.category}</td>
                        <td className="py-4">{data.price}</td>
                        <td className="py-4">{data.unit}</td>
                        <td className="py-4">{data.qty}</td>
                        <td className="py-4">{totalPrice}</td>
                        {role === "Admin" ? (
                          <td className="py-4">
                            <button className="p-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">
                              Void
                            </button>
                          </td>
                        ) : null}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex space-x-3 items-center justify-end py-2 mt-8 text-lg">
            <h6 className="font-semibold">Total Amount:</h6>
            <h6 className="text-red-600 font-bold">&#8369;{total}</h6>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default ShowItems;
