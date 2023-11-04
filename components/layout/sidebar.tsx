"use client";

import { Session } from "next-auth";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useSignInModal } from "./sign-in-modal";
import {
  AiFillHome,
  AiOutlineVideoCameraAdd,
  AiFillCheckCircle,
  AiFillSetting
} from "react-icons/ai";
import { HiMiniArrowLeftCircle, HiMiniArrowRightCircle } from "react-icons/hi2";
// import { GiCootieCatcher } from "react-icons/gi";
import { useState } from "react";

export default function Sidebar({ session }: { session?: Session | null }) {
  // const { SignInModal, setShowSignInModal } = useSignInModal();
  const [modalCollapse, setModalCollapse] = useState(true);
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-screen transform transition-transform duration-300 ${
        modalCollapse ? "w-56" : "w-22"
      } overflow-y-auto bg-[#0d0d0d] text-[#5169F6]`}
    >
      <div className="flex items-center p-4 pl-8 text-2xl font-bold text-[#5169F6]">
        <span className="text-white">
          <span className="bg-[#5169F6] p-1 rounded-sm mr-2 font-light">
            Cu
          </span>
        </span>
        {
          modalCollapse && <span className="text-white">catchup</span>
          // <AiOutlineVideoCameraAdd className="mr-2" />
        }
        <button
          className={`bg fixed z-0  cursor-pointer ${
            modalCollapse ? "ml-40" : "ml-8"
          } rounded-lg p-2`}
          onClick={() => setModalCollapse(!modalCollapse)}
        >
          {modalCollapse ? (
            <HiMiniArrowLeftCircle />
          ) : (
            <HiMiniArrowRightCircle />
          )}
        </button>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-2 px-5 py-5 ">
            <a
              href="#"
              className="flex items-center text-[#5169F6] hover:text-[#5169F6]"
            >
              <AiFillHome className="mr-2" />
              {modalCollapse && "Dashboard"}
            </a>
          </li>
          <li className="mb-2 px-5 py-5">
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-[#5169F6]"
            >
              <AiFillCheckCircle className="mr-2" />
              {modalCollapse && "Profile"}
            </a>
          </li>
          <li className="mb-2 px-5 py-5">
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-[#5169F6]"
            >
              <AiFillSetting className="mr-2" />
              {modalCollapse && "Settings"}
            </a>
          </li>
          <li className="mb-2 px-5 py-5">
            <a
              href="#"
              className="flex items-center text-gray-300 hover:text-[#5169F6]"
            >
              <AiFillCheckCircle className="mr-2" />
              {modalCollapse && "Logout"}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
