import Layout from "../components/Layout";
import UpdateMachine from "../components/UpdateMachine";
import DeleteMachine from "../components/DeleteMachine";
import AddMachine from "../components/AddMachine";

const mockData = [
  {
    machine: "1",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
  {
    machine: "2",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
  {
    machine: "3",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
  {
    machine: "1",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
  {
    machine: "1",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
  {
    machine: "1",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
  {
    machine: "1",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
  {
    machine: "1",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
  {
    machine: "1",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
  {
    machine: "1",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
  {
    machine: "1",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
  {
    machine: "1",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
  {
    machine: "1",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
  {
    machine: "1",
    make: "Samsung",
    model: "2018",
    status: "Washing",
  },
];

const initialValues = {
  num: "",
  make: "",
  model: "",
};

function machines() {
  return (
    <Layout>
      <div className="mt-7 flex space-x-5">
        <div className="w-[80vw] max-h-[75vh] p-4 overflow-hidden border-2 rounded-lg relative">
          <div className="h-full overflow-auto relative">
            <table className="w-full text-center border-collapse table-fixed">
              <thead className="sticky top-0">
                <tr className="bg-indigo-50">
                  <th className="pt-6 pb-2">Machine No</th>
                  <th className="pt-6 pb-2">Make</th>
                  <th className="pt-6 pb-2">Model</th>
                  <th className="pt-6 pb-2">Status</th>
                  <th className="pt-6 pb-2">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {mockData.map((data) => {
                  return (
                    <tr key={data.machine} className="hover:bg-slate-50 first:border-none last:border-none border-y">
                      <td className="py-4">{data.machine}</td>
                      <td className="py-4">{data.make}</td>
                      <td className="py-4">{data.model}</td>
                      <td className="py-4">{data.status}</td>
                      <td className="py-4 flex justify-center space-x-4">
                        <UpdateMachine datas={data} />
                        <DeleteMachine datas={data} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[20vw]">
          <AddMachine />
        </div>
      </div>
    </Layout>
  );
}

export default machines;
