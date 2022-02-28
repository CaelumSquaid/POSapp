import Layout from "../components/Layout";
import UpdateMachine from "../components/UpdateMachine";
import DeleteMachine from "../components/DeleteMachine";
import ShowItems from "../components/ShowItems";

const Auth = process.env.NEXT_PUBLIC_AUTHORIZATION;

const mockData = [
  {
    transaction: "1arrsd!123fda1s",
    machine: "Machine01",
    status:"Washing",
    payment:"Partial",
    partial: null,
    full: true,
    createdAt: "2022-01-01 01:01:01",
    amount: 240,
    items: [
      {
        description: "Ariel Blue",
        category: "Cosumables",
        price: 16,
        unit: "piece/s",
        qty: 2,
      },
      {
        description: "Ariel Blue",
        category: "Cosumables",
        price: 16,
        unit: "piece/s",
        qty: 2,
      },
      {
        description: "Ariel Blue",
        category: "Cosumables",
        price: 16,
        unit: "piece/s",
        qty: 2,
      },
      {
        description: "Ariel Blue",
        category: "Cosumables",
        price: 16,
        unit: "piece/s",
        qty: 2,
      },
      {
        description: "Ariel Blue",
        category: "Cosumables",
        price: 16,
        unit: "piece/s",
        qty: 2,
      },
      {
        description: "Ariel Blue",
        category: "Cosumables",
        price: 16,
        unit: "piece/s",
        qty: 2,
      },
      {
        description: "Ariel Blue",
        category: "Cosumables",
        price: 16,
        unit: "piece/s",
        qty: 2,
      },
      {
        description: "Ariel Blue",
        category: "Cosumables",
        price: 16,
        unit: "piece/s",
        qty: 2,
      },
      {
        description: "Ariel Blue",
        category: "Cosumables",
        price: 16,
        unit: "piece/s",
        qty: 2,
      },
      {
        description: "Ariel Blue",
        category: "Cosumables",
        price: 16,
        unit: "piece/s",
        qty: 2,
      },
      {
        description: "Ariel Blue",
        category: "Cosumables",
        price: 16,
        unit: "piece/s",
        qty: 2,
      },
      {
        description: "Ariel Blue",
        category: "Cosumables",
        price: 16,
        unit: "piece/s",
        qty: 2,
      },
      {
        description: "Ariel Blue",
        category: "Cosumables",
        price: 16,
        unit: "piece/s",
        qty: 2,
      },
    ],
  },
];

const initialValues = {
  num: "",
  make: "",
  model: "",
};

function transactions() {
  return (
    <Layout>
      <div className="mt-7 flex space-x-5">
        <div className="flex-1 max-h-[75vh] overflow-hidden border-2 rounded-lg relative">
          <div className="h-full scrollbar overflow-auto relative">
            <table className="w-full text-center border-collapse table-fixed">
              <thead className="sticky top-0">
                <tr className="bg-indigo-50">
                  <th className="pt-6 pb-2">Transaction No</th>
                  <th className="pt-6 pb-2">Machine</th>
                  <th className="pt-6 pb-2">Date</th>
                  <th className="pt-6 pb-2">Status</th>
                  <th className="pt-6 pb-2">Payment</th>
                  <th className="pt-6 pb-2">Total Amount</th>
                  <th className="pt-6 pb-2"></th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {mockData.map((data) => {
                  return (
                    <tr key={data.machine} className="hover:bg-slate-50">
                      <td className="py-4 border-y">{data.transaction}</td>
                      <td className="py-4 border-y">{data.machine}</td>
                      <td className="py-4 border-y">{data.createdAt}</td>
                      <td className="py-4 border-y">{data.status}</td>
                      <td className="py-4 border-y">{data.payment}</td>
                      <td className="py-4 border-y">{data.amount}</td>
                      <td className="py-4 border-y">
                        <div className="flex justify-center space-x-2">
                          <ShowItems datas={data.items} />
                          {Auth === "Admin" ? (
                            <>
                              <DeleteMachine datas={data} />
                            </>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default transactions;
