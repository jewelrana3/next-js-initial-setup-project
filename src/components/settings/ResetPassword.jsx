"use client";

import { Button, ConfigProvider } from "antd";
import Image from "next/image";
import Link from "next/link";

import { AllImages } from "../../../public/AllImages";

export default function ResetPassword() {
  return (
    <div className="mx-auto min-h-[80vh] p-20 flex justify-center items-center">
      <div>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultBg: "#18191B",
                defaultHoverBg: "#18191B",
              },
            },
          }}
        >
          <div className="text-center">
            <div>
              <div className="flex items-center justify-center">
                <Image
                  src={AllImages.check}
                  alt="forgot"
                  className="max-w-full"
                />
              </div>
              <h1 className="mt-12 font-bold text-6xl text-[#302F51] leading-9">
                Password reset
              </h1>
              <p className="mt-9 text-[#667085] font-sans text-sm leading-6 font-normal">
                Your password has been successfully reset. Click below to <br />
                log in magically.
              </p>
            </div>

            <div className="mt-8 ">
              <Link href="/setting/check-mail">
                <Button className="w-[360px] border !h-11 !border-secondary-color text-xl !text-white font-semibold !rounded-xl">
                  Continue
                </Button>
              </Link>
            </div>
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
}
