import Footer from "../components/Footer";
import Layout from "../components/Layout";
import MachineCard from "../components/MachineCard";
import Navbar from "../components/Navbar";

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

export default function Home() {
  return (
    <Layout>
      <div className="h-full w-screen flex flex-wrap justify-center items-center gap-6 pt-12 px-4 ">
        {mockData.map((data) => (
          <MachineCard key={data.title} datas={data} />
        ))}
      </div>
    </Layout>
  );
}
