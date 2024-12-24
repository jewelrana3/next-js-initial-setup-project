import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import About from "./About";
import Need from "./Need";
import Shop from "./Shop";
import Subsribe from "./Subsribe";

export default function Footer() {
  return (
    <>
      <div className="  grid grid-cols-1 lg:grid-cols-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 col-span-2 bg-[#F5F5F0] py-14 px-14">
          <Shop />
          <Need />
          <About />
        </div>
        <div className="col-span-1">
          <Subsribe />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-9 px-16 bg-[#F5F5F0] text-[#000000A6]">
        {/* Left Section (United States and Language) */}
        <div className="flex gap-6">
          <div className="flex gap-6">
            <p>United States (USD $)</p>
            <p>
              <MdOutlineKeyboardArrowDown />
            </p>
          </div>
          <div className="flex gap-6">
            <p>English</p>
            <p>
              <MdOutlineKeyboardArrowDown />
            </p>
          </div>
        </div>

        {/* Center Section (Copyright Text) */}
        <div className="font-bold text-[#646566]">
          <p>© 2024 Woof Spot. All rights reserved.</p>
        </div>

        {/* Right Section (Image) */}
        {/* <div className="flex gap-4">
          <div>
            <Image
              src={footerImage.nineF}
              alt="footer image"
              height="24px"
              width="35px"
            />
          </div>
          <div>
            <Image
              src={footerImage.oneF}
              alt="footer image"
              height="24px"
              width="35px"
            />
          </div>
          <div>
            <Image
              src={footerImage.fiveF}
              alt="footer image"
              height="24px"
              width="35px"
            />
          </div>
          <div>
            <Image
              src={footerImage.twoF}
              alt="footer image"
              height="24px"
              width="35px"
            />
          </div>
          <div>
            <Image
              src={footerImage.threeF}
              alt="footer image"
              height="24px"
              width="35px"
            />
          </div>
          <div>
            <Image
              src={footerImage.sixF}
              alt="footer image"
              height="24px"
              width="35px"
            />
          </div>
          <div>
            <Image
              src={footerImage.fourF}
              alt="footer image"
              height="24px"
              width="35px"
            />
          </div>
          <div>
            <Image
              src={footerImage.sevenF}
              alt="footer image"
              height="24px"
              width="35px"
            />
          </div>
          <div>
            <Image
              src={footerImage.eightF}
              alt="footer image"
              height="24px"
              width="35px"
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
