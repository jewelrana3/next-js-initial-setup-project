"use client";

import { Button, ConfigProvider, Form, Input, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { AllImages } from "../../../public/AllImages";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  // Function to toggle the password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Function to toggle the confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <div className="mx-auto h-screen p-20 flex justify-center items-center bg-[#F4F7FA]">
      <div>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultBg: "#18191B",
                defaultHoverBg: "#18191B",
                contentFontSize: 16,
                hoverBorderColor: "",
              },
              Input: {
                hoverBorderColor: "",
                activeBorderColor: "",
              },
            },
          }}
        >
          <div className="text-center ">
            <div className="flex justify-center items-center ">
              <Image
                src={AllImages.header}
                alt="header"
                className="bg-white p-4"
              />
            </div>
            <p className="mt-9 text-[#101828] text-4xl leading-9 font-semibold ">
              Log in
            </p>
            <p className="text-[#302F51] font-sans text-sm font-normal mt-3">
              Welcome back! Please enter your details.
            </p>
          </div>
          <Form
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent text-center w-96 !mt-7"
            validateTrigger="onSubmit"
          >
            {/* Email Field */}
            <div>
              <Typography.Title
                className="text-start "
                level={4}
                style={{ color: "#222222" }}
              >
                <span className="font-Inter text-[14px] font-medium">
                  Email*
                </span>
              </Typography.Title>
              <Form.Item
                name="email"
                className="text-white"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  placeholder="Enter your email"
                  className="py-2 h-11 px-3 text-xl bg-site-color border border-white text-base-color"
                />
              </Form.Item>
            </div>

            {/* Password Field */}
            <div>
              <Typography.Title
                className="text-start "
                level={4}
                style={{ color: "#222222" }}
              >
                <span className="font-Inter text-[14px] font-medium">
                  Password*
                </span>
              </Typography.Title>
              <Form.Item
                name="password"
                className="text-white"
                rules={[
                  { required: true, message: "Password is required!" },
                  {
                    min: 8,
                    message: "Password must be at least 8 characters long",
                  },
                ]}
              >
                <div className="relative">
                  <Input
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    className="py-2 h-11 px-3 text-xl bg-site-color border border-white text-base-color"
                  />
                  <span
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <IoEyeOff size={24} />
                    ) : (
                      <IoEye size={24} />
                    )}
                  </span>
                </div>
              </Form.Item>
            </div>

            <Form.Item>
              <Button
                className="w-full border !h-11 font-sans !border-secondary-color  !text-white font-semibold !rounded-xl"
                htmlType="submit"
              >
                Sign In
              </Button>
            </Form.Item>

            <div className="flex justify-center items-center gap-3 bg-white h-11 rounded-lg border-solid border-[1px] border-[#D0D5DD]">
              <Image src={AllImages.google} alt="login" />
              <button className="text-[#344054]  font-sans font-medium text-sm">
                Sign in with Google
              </button>
            </div>

            <div className="flex justify-center items-center gap-2 text-[#667085] text-[14px] mt-8">
              <Link href="/setting/signup">
                Don’t have an account?
                <span className="text-[#18191B] font-medium text-sm">
                  {" "}
                  Sign up
                </span>
              </Link>
            </div>
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
}
