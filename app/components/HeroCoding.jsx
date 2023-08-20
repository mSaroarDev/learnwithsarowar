import Image from "next/image";
import Demo from "../../public/demo.gif";

export default function HeroCoding() {
  return (
    <div className="hidden h-screen w-full lg:flex items-center justify-center">
      <Image
        className="rounded-xl cursor-text"
        src={Demo}
        height={500}
        width={700}
        alt="Demo"
      />
    </div>
  );
}
