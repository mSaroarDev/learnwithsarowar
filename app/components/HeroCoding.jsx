import Image from "next/image";
import Demo from "../../public/demo.gif";

export default function HeroCoding() {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <Image
        className="rounded-xl"
        src={Demo}
        height={500}
        width={700}
        alt="Demo"
      />
    </div>
  );
}
