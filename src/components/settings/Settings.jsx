import Image from "next/image";
import { AllImages } from "../../../public/AllImages";

export default function () {
  return (
    <>
      <div className="mt-14 mb-96 w-[82%] grid grid-cols-1 lg:grid-cols-2 mx-auto">
        <div>
          <h1 className="font-medium text-2xl">Settings</h1>
          <div className="flex gap-3 mt-6 text-[#95917B]">
            <p>
              <Image src={AllImages.lock} width={20} height={27} alt="lock" />
            </p>
            <p className="font-bold text-2xl">Log out everywhere</p>
          </div>
          <p className="font-medium text-2xl mt-[20px]">
            If you've lost a device or have security concerns, log out <br />{" "}
            everywhere to ensure the security of your account.
          </p>
        </div>
        <div className="bg-[#F5F5F0] rounded-lg py-8 flex items-center gap-5  mt-16 lg:mt-0 ">
          <div className="pl-5">
            <button className="py-[15px] text-[#95917B] rounded-lg w-72 border border-[#95917B] bg-[#FFFFFF] font-bold text-2xl">
              Log out everywhere
            </button>
          </div>
          <div>
            <p className="font-medium text-xl">
              You will be logged out on this device as well.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
