"use client";

import { useState } from "react";
import Navbar from "./shared/Nabvar";
import Profile from "./shared/Profile";

export default function Header() {
  const [show, setShow] = useState(false);

  // show hide nabvar modal
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-12 py-8 shadow-md">
        <Navbar />
        <Profile />
      </div>
    </div>
  );
}
