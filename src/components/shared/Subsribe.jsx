import { Button, ConfigProvider, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { footerIcon } from "../../../public/AllImages";

export default function Subsribe() {
  return (
    <div className="bg-[#F0ECE7] pt-[60px] px-4 sm:px-6 lg:px-20 pb-20">
      <h1 className="font-[20px] ">Subscribe & Save</h1>
      <h2
        className="mt-10 font-[
    Urbanist] text-[24px] text-[#000000A6]"
      >
        Join Our Email List & Get 10% Off
      </h2>

      <div className=" mt-4">
        {/* Email Input */}
        <span className="font-semibold text-sm">Email*</span>
        <ConfigProvider
          theme={{
            components: {
              Input: {
                colorTextPlaceholder: "#000000",
              },
            },
          }}
        >
          <div className="flex w-[338px] mt-[10px]">
            <Input
              type="email"
              id="email"
              placeholder="finnenveldman@gmail.com"
              className="text-sm !font-bold !h-12 !px-3 !border-none !rounded-none "
            />
            <Button className="!h-12 !rounded-none !bg-black !text-white !border-none !font-bold !text-[13px] !leading-5 !font-open-sans">
              SUBMIT
            </Button>
          </div>
        </ConfigProvider>
      </div>
      <div className="mt-28">
        <div className="flex gap-4">
          <Link href="/">
            <div className="w-8 h-8 rounded-10 p-2 flex items-center justify-center  bg-[#706D5C] text-white rounded-full">
              <Image src={footerIcon.facebook} alt="pic" className="h-5 w-5" />
            </div>
          </Link>
          <Link href="/">
            <div className="w-8 h-8 rounded-10 p-2 flex items-center justify-center  bg-[#706D5C] text-white rounded-full">
              <Image src={footerIcon.instra} alt="pic" className="h-5 w-5" />
            </div>
          </Link>
          <Link href="/">
            <div className="w-8 h-8 rounded-10 p-2 flex items-center justify-center  bg-[#706D5C] text-white rounded-full">
              <Image src={footerIcon.youtube} alt="pic" className="h-5 w-5" />
            </div>
          </Link>
          <Link href="/">
            <div className="w-8 h-8 rounded-10 p-2 flex items-center justify-center  bg-[#706D5C] text-white rounded-full">
              <Image src={footerIcon.pp} alt="pic" className="h-5 w-5" />
            </div>
          </Link>
          <Link href="/">
            {" "}
            <div className="w-8 h-8 rounded-10 p-2 flex items-center justify-center  bg-[#706D5C] text-white rounded-full">
              <Image src={footerIcon.tiktok} alt="pic" className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
