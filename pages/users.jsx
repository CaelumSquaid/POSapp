import Layout from "../components/Layout";
import AddUser from "../components/AddUser";
import DeleteUser from "../components/DeleteUser";
import UpdateUser from "../components/UpdateUser";

const mockData = [
  {
    userName: "johnDoe",
    firstName: "John",
    lastName: "Doe",
    contact: "09742210321",
    role: "Basic",
    createdAt: "2022-01-20",
    updatedAt: "2022-01-25",
  },
];

const initialValues = {
  num: "",
  make: "",
  model: "",
};

function users() {
  return (
    <Layout>
      <div className="mt-7 flex space-x-5">
        <div className="flex-1 max-h-[75vh] p-4 overflow-hidden border-2 rounded-lg relative">
          <div className="h-full overflow-auto relative">
            <table className="w-full text-center border-collapse table-auto">
              <thead className="sticky top-0">
                <tr className="bg-indigo-50">
                  <th className="pt-6 pb-2">Username</th>
                  <th className="pt-6 pb-2">First Name</th>
                  <th className="pt-6 pb-2">Last Name</th>
                  <th className="pt-6 pb-2">Contact</th>
                  <th className="pt-6 pb-2">Restriction</th>
                  <th className="pt-6 pb-2">Created</th>
                  <th className="pt-6 pb-2">Updated</th>
                  <th className="pt-6 pb-2"></th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {mockData.map((data) => {
                  return (
                    <tr key={data.machine} className="hover:bg-slate-50">
                      <td className="py-4 border-y">{data.userName}</td>
                      <td className="py-4 border-y">{data.firstName}</td>
                      <td className="py-4 border-y">{data.lastName}</td>
                      <td className="py-4 border-y">{data.contact}</td>
                      <td className="py-4 border-y">{data.role}</td>
                      <td className="py-4 border-y">{data.createdAt}</td>
                      <td className="py-4 border-y">{data.updatedAt}</td>
                      <td className="py-4 border-y flex flex-grow-0 justify-center space-x-4">
                        <UpdateUser datas={data} />
                        <DeleteUser datas={data} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[20vw]">
          <AddUser />
        </div>
      </div>
    </Layout>
  );
}

export default users;
