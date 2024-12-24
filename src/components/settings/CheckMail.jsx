import { Button, ConfigProvider } from "antd";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import { AllImages } from "../../../public/AllImages";

export default function CheckMail() {
  return (
    <>
      <div className=" mx-auto min-h-[80vh] p-20 flex justify-center items-center">
        <div className="">
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  defaultBg: "#18191B",
                  defaultHoverBg: "#18191B",
                  defaultHoverBorderColor: "",
                },
              },
            }}
          >
            <div className="bg-transparent text-center">
              <div>
                <div className="flex items-center justify-center">
                  <Image
                    className="color-setting"
                    src={AllImages.mail}
                    alt="forgot"
                  />
                </div>
                <h1 className="mt-12 font-bold text-6xl text-[#302F51] leading-9">
                  Check your email
                </h1>
                <p className="mt-9 text-[#667085] text-[24px] leading-6 font-normal text-2xl">
                  We sent a password reset link to <br /> olivia@untitledui.com
                </p>
              </div>

              <div className="mt-6">
                <Link href="https://mail.google.com/mail/u/0/#inbox">
                  <Button className="w-[360px] border !h-11 !border-secondary-color !text-sm leading-6 !font-medium !text-white  rounded-2xl">
                    Open email app
                  </Button>
                </Link>
              </div>
              <div className="mt-5">
                <p className="font-sans font-normal text-sm">
                  Didn’t receive the email?{" "}
                  <span className="text-[#6941C6] font-medium cursor-pointer">
                    Click to resend
                  </span>
                </p>
              </div>
              <div className="mt-5 flex justify-center items-center gap-2 text-[#667085] text-[14px]">
                <p>
                  <IoArrowBackOutline />
                </p>
                <Link href="/">
                  <span className="text-[#667085]font-medium">
                    Back to log in
                  </span>
                </Link>
              </div>
            </div>
          </ConfigProvider>
        </div>
      </div>
    </>
  );
}
