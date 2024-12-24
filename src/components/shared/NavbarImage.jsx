import Image from "next/image";
import { AllImages } from "../../../public/AllImages";

export default function NavbarImage() {
  return (
    <div className="hidden lg:block ">
      <Image src={AllImages.header} />
    </div>
  );
}
