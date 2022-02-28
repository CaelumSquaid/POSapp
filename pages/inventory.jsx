import Layout from "../components/Layout";
import UpdateMachine from "../components/UpdateMachine";
import DeleteMachine from "../components/DeleteMachine";
import AddMachine from "../components/AddMachine";
import AddInventory from "../components/AddInventory";
import UpdateInventory from "../components/UpdateInventory";
import DeleteInventory from "../components/DeleteInventory";

const mockData = [
  {
    category: "Consumables",
    description: "Ariel Powder Blue",
    price: 24,
    onHand: 4,
    sales: 102,
    unit: "piece/s",
  },
  {
    category: "Services",
    description: "Wash",
    price: 60,
    onHand: null,
    sales: null,
    unit: null,
  },
  {
    category: "Services",
    description: "Dry",
    price: 80,
    onHand: null,
    sales: null,
    unit: null,
  },
  {
    category: "Services",
    description: "Wash&Dry",
    price: 130,
    onHand: null,
    sales: null,
    unit: null,
  },
];

const initialValues = {
  num: "",
  make: "",
  model: "",
};

function inventory() {
  return (
    <Layout>
      <div className="mt-7 flex space-x-5">
        <div className="flex-1 max-h-[75vh] overflow-hidden border-2 rounded-lg relative">
          <div className="h-full scrollbar overflow-auto relative">
            <table className="w-full text-center border-collapse table-auto">
              <thead className="sticky top-0">
                <tr className="bg-indigo-50">
                  <th className="pt-6 pb-2">Item Description</th>
                  <th className="pt-6 pb-2">Category</th>
                  <th className="pt-6 pb-2">Price</th>
                  <th className="pt-6 pb-2">Unit</th>
                  <th className="pt-6 pb-2">On-Hand</th>
                  <th className="pt-6 pb-2">Sales</th>
                  <th className="pt-6 pb-2"></th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {mockData.map((data) => {
                  return (
                    <tr key={data.machine} className="hover:bg-slate-50">
                      <td className="py-4 border-y">{data.description}</td>
                      <td className="py-4 border-y">{data.category}</td>
                      <td className="py-4 border-y">{data.price}</td>
                      <td className="py-4 border-y">{data.unit || "N/A"}</td>
                      <td className="py-4 border-y">{data.onHand || "N/A"}</td>
                      <td className="py-4 border-y">{data.sales || "N/A"}</td>
                      <td className="py-4 border-y flex flex-grow-0 justify-center space-x-4">
                        <UpdateInventory datas={data} />
                        <DeleteInventory datas={data} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[20vw]">
          <AddInventory />
        </div>
      </div>
    </Layout>
  );
}

export default inventory;
