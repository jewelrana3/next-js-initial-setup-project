"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { AllImages } from "../../../public/AllImages";

const navName = [
  { id: 1, name: "Home", path: "/" },
  {
    id: 2,
    name: "Shop",
    path: "/shop",
    children: [
      {
        name: "FingerPrint",
        path: "/fingerprint",
      },
      {
        name: "HandWriting",
        path: "/handwriting",
      },
    ],
  },
  { id: 3, name: "Process", path: "/process" },
  { id: 4, name: "Explore", path: "/explore" },
  { id: 5, name: "FAQ", path: "/faq" },
  { id: 6, name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu
  const [isShopHovered, setIsShopHovered] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white h-10 z-10">
      <div className="flex justify-between items-center   ">
        <div className="hidden lg:block">
          <Image src={AllImages.header} alt="pic" />
        </div>
        {/* Mobile Menu Icon */}
        <div className="lg:hidden " onClick={handleMenuToggle}>
          {isMenuOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-8 lg:space-x-14 md:ml-0 lg:ml-60">
          {navName.map((link) => (
            <div
              className="relative"
              key={link.id}
              onMouseEnter={() => link.children && setIsShopHovered(true)}
              onMouseLeave={() => link.children && setIsShopHovered(false)}
            >
              <Link
                href={link.path}
                className={`text-lg font-medium  ${
                  pathname === link.path ? "border-b-2 border-[#BBB69A]" : ""
                }`}
              >
                <span>{link.name}</span>
              </Link>
              {/* Dropdown for Shop */}
              {isShopHovered && link.children && (
                <div className="absolute left-0  bg-white shadow-2xl p-4  mt-11 ">
                  {link.children.map((child, index) => (
                    <Link
                      key={index}
                      href={child.path}
                      className={`block text-lg font-medium py-2 ${
                        pathname === child.path
                          ? "border-b-2 border-[#BBB69A]"
                          : ""
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
        onClick={handleClick}
      >
        {navName.map((link) => (
          <Link
            href={link.path}
            key={link.id}
            className={`block text-lg font-medium py-2 ${
              pathname === link.path ? "border-b-2 border-[#BBB69A]" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
