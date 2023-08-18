import HeroText from "./HeroText";

export default function HeroMain() {
  return (
    <div className="hero-main h-screen w-full">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <HeroText />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
