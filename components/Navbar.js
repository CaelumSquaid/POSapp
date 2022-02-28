import Image from "next/image";
import Link from "next/link";
import Logo from "../images/POS.svg";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai"
import { CgList } from "react-icons/cg"

function Navbar() {
  return (
    <div className="w-full h-full flex items-center justify-between px-10 border-b-2 shadow-sm bg-white">
      <div>
        <FiShoppingBag className="text-2xl hover:text-indigo-600"/>
      </div>
      <div className="flex text-sm items-center space-x-5">
        <Link href="/" passHref>
          <a className="p-2 hover:ring-1 hover:ring-indigo-600 hover:text-indigo-800 rounded flex items-center space-x-1">
            <AiOutlineHome className="text-lg"/>
            <span>Home</span>
          </a>
        </Link>
        <Link href="/transactions" passHref>
          <a className="p-2 hover:ring-1 hover:ring-indigo-600 hover:text-indigo-800 rounded flex items-center space-x-1">
            <CgList className="text-lg"/>
            <span>Transactions</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
