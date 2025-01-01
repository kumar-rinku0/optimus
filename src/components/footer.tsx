import Link from "next/link";
import React from "react";
import {
  FaApple,
  FaGithub,
  FaGooglePlay,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaLeaf } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#e4e6f4]">
      <div className="flex justify-evenly items-center p-4">
        <Link href={"/"} className="flex">
          <span className="text-4xl font-bold">Shop</span>
          <FaLeaf className="text-xl self-start text-green-600" />
        </Link>
      </div>
      <div className="flex flex-col gap-4 items-start sm:flex-row sm:justify-evenly sm:items-center p-4">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Contect</h3>
          <p>
            Address: <span className="text-gray-500">New Town, Delhi</span>
          </p>
          <p>
            Phone: <span className="text-gray-500">+43-434349559</span>
          </p>
          <p>
            Email: <span className="text-gray-500">example@mail.com</span>
          </p>
        </div>
        <div id="follow-us">
          <h3 className="capitalize text-lg font-semibold">follow us</h3>
          <div className="flex gap-4 text-2xl text-gray-800 py-4">
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <FaYoutube />
            </Link>
            <Link href="/">
              <FaGithub />
            </Link>
          </div>
        </div>
        <div id="install-app" className="flex flex-col gap-2">
          <div className="font-semibold">Install App</div>
          <div className="capitalize text-gray-400">
            From apple store or google play
          </div>
          <div className="flex gap-4">
            <button
              className="flex gap-2 justify-center items-center px-4 py-2 font-semibold border rounded border-gray-400"
              type="button"
            >
              <FaApple />
              <span>Apple Store</span>
            </button>
            <button
              className="flex gap-2 justify-center items-center px-4 py-2 font-semibold border rounded border-gray-400"
              type="button"
            >
              <FaGooglePlay />
              <span>Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
