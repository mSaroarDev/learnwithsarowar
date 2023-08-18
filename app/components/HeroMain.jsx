import HeroCoding from "./HeroCoding";
import HeroText from "./HeroText";

export default function HeroMain() {
  return (
    <div className="hero-main h-screen lg:max-h-[750px] w-full">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <HeroText />
          </div>
          <div>
            <HeroCoding />
          </div>
        </div>
      </div>
    </div>
  );
}
