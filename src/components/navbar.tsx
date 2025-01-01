import Link from "next/link";
import { FaLeaf } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import MotionNav from "./motion-nav";

const navLinks = [
  {
    name: "home",
    id: "#home",
  },
  {
    name: "shop",
    id: "#shop",
  },
  {
    name: "blog",
    id: "#blog",
  },
  {
    name: "about",
    id: "#about",
  },
  {
    name: "contect",
    id: "#contect",
  },
];

const MobileNav = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <MotionNav />
    </div>
  );
};

const DesktopNav = ({ className }: { className: string }) => {
  return (
    <div className={`${className} flex justify-center items-center gap-8`}>
      {navLinks.map((link, idx) => {
        return (
          <Link
            href={link.id}
            key={idx}
            title={link.name}
            className="font-semibold capitalize"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="bg-[#e4e6f4] border-b border-gray-300">
      <nav className="flex justify-between items-center px-16 py-8">
        <Link href={"#home"} className="flex">
          <span className="text-xl font-bold">Shop</span>
          <FaLeaf className="text-xs self-start text-green-600" />
        </Link>
        <DesktopNav className="hidden md:flex" />
        <MobileNav className="flex md:hidden" />
      </nav>
    </div>
  );
};

export default Navbar;
