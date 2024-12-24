"use client";

import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
export default function Profile() {
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-3 items-center gap-6 text-2xl cursor-pointer">
        <div>
          <CiSearch />
        </div>
        <div>
          <CiSearch />
        </div>
        <div>
          <IoBagOutline />
        </div>
      </div>
    </>
  );
}
