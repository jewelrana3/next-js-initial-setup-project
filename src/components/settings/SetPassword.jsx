"use client";

import { Button, ConfigProvider, Form, Input, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { IoArrowBackOutline, IoEye, IoEyeOff } from "react-icons/io5";
import { AllImages } from "../../../public/AllImages";

export default function SetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    <div className="mx-auto min-h-[80vh] p-20 flex justify-center items-center">
      <div>
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
            validateTrigger="onSubmit"
          >
            <div>
              {/* Centering the image */}
              <div className="flex items-center justify-center">
                <Image
                  src={AllImages.forgot}
                  alt="forgot"
                  className="max-w-full"
                />
              </div>
              <h1 className="mt-12 font-bold text-6xl text-[#302F51] leading-9">
                Set new password?
              </h1>
              <p className="mt-9 text-[#667085] text-2xl leading-9 font-normal ">
                Your new password must be different from previously <br />
                used passwords.
              </p>
            </div>

            <div>
              <Typography.Title
                className="text-start mt-10"
                level={4}
                style={{ color: "#222222" }}
              >
                <span className="font-Inter text-[14px] font-medium">
                  Password
                </span>
              </Typography.Title>
              <Form.Item
                name="password"
                className="text-white"
                rules={[
                  {
                    required: true,
                    message: "Password is required!",
                  },
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

            <div>
              <Typography.Title
                className="text-start"
                level={4}
                style={{ color: "#222222" }}
              >
                <span className="font-Inter text-[14px] font-medium">
                  Confirm Password
                </span>
              </Typography.Title>
              <Form.Item
                name="confirmPassword"
                className="text-white"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <div className="relative">
                  <Input
                    placeholder="Confirm your password"
                    type={showConfirmPassword ? "text" : "password"}
                    className="py-2 h-11 px-3 text-xl bg-site-color border border-white text-base-color"
                  />
                  <span
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? (
                      <IoEyeOff size={24} />
                    ) : (
                      <IoEye size={24} />
                    )}
                  </span>
                </div>
              </Form.Item>
            </div>

            <Form.Item>
              <Link href="/setting/reset-password">
                <Button className="w-[360px] border !text-md  !text-white !font-semibold !rounded-xl !h-11">
                  Reset Password
                </Button>
              </Link>
            </Form.Item>

            <div className="flex justify-center items-center gap-2 text-[#667085] text-[14px]">
              <p>
                <IoArrowBackOutline />
              </p>
              <Link href="/">
                <span className="text-[#667085] font-medium">
                  Back to log in
                </span>
              </Link>
            </div>
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
}
