"use client";

import { Button, ConfigProvider, Form, Input, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import { AllImages } from "../../../public/AllImages";

export default function ForgotPassword() {
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/signin");
  };
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
                },

                Input: {
                  hoverBorderColor: "",
                  activeBorderColor: "",
                },
              },
            }}
          >
            <Form
              onFinish={onFinish}
              layout="vertical"
              className="bg-transparent text-center"
            >
              <div className="">
                <div className="flex items-center justify-center">
                  <Image
                    className="color-setting"
                    src={AllImages.forgot}
                    alt="forgot"
                  />
                </div>
                <h1 className="mt-12 font-bold text-6xl text-[#302F51] leading-9">
                  Forgot password?
                </h1>
                <p className="mt-9 text-[#667085] text-[24px] leading-6 font-semibold ">
                  No worries, we’ll send you reset instructions.
                </p>
              </div>
              <Typography.Title
                className="text-start mt-10"
                level={4}
                style={{ color: "#222222" }}
              >
                <span className=" font-Inter text-[14px] font-medium">
                  {" "}
                  Email*
                </span>
              </Typography.Title>

              <Form.Item
                name="email"
                className="text-white"
                rules={[
                  { required: true, message: "Please confirm your password!" },
                ]}
              >
                <Input
                  placeholder="Enter your email"
                  className="py-2 h-11 px-3 text-xl bg-site-color border border-white text-base-color "
                />
              </Form.Item>

              <Form.Item>
                <Link href="/setting/check-mail">
                  <Button
                    className="w-[360px] border !h-11 font-sans !border-secondary-color !text-xl !text-white font-medium !rounded-xl"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Link>
              </Form.Item>
              <div className="flex justify-center items-center gap-2 text-[#667085] text-[14px]">
                <p>
                  <IoArrowBackOutline />
                </p>
                <Link href="/setting/check-mail">
                  <span className="text-[#667085] font-medium">
                    Back to log in
                  </span>
                </Link>
              </div>
            </Form>
          </ConfigProvider>
        </div>
      </div>
    </>
  );
}
