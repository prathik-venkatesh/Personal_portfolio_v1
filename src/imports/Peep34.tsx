import svgPaths from "./svg-i9d9ri4jpa";

function BodyCoffee() {
  return (
    <div className="absolute inset-[41.68%_15.05%_10.5%_12.94%]" data-name="body/Coffee">
      <div className="absolute bottom-0 left-0 right-0 top-[-2.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 74">
          <g id="body/Coffee">
            <rect fill="var(--fill-0, #FDEA6B)" height="27.582" id="âï¸ Cup" width="22.3894" x="45.072" y="29.2886" />
            <path clipRule="evenodd" d={svgPaths.p2636cb80} fill="var(--fill-0, #D08B5B)" fillRule="evenodd" id="â Skin" />
            <path clipRule="evenodd" d={svgPaths.p2266c280} fill="var(--fill-0, #9DDADB)" fillRule="evenodd" id="ð Top" />
            <path clipRule="evenodd" d={svgPaths.p81eb80} fill="var(--fill-0, black)" fillRule="evenodd" id="ð Ink" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HeadHatHip() {
  return (
    <div className="absolute inset-[11.74%_25.62%_51.27%_32.75%]" data-name="head/hat-hip">
      <div className="absolute bottom-0 left-[-13.08%] right-[-9.77%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 56">
          <g id="head/hat-hip">
            <path clipRule="evenodd" d={svgPaths.p22b07100} fill="var(--fill-0, #D08B5B)" fillRule="evenodd" id="â Skin" />
            <path clipRule="evenodd" d={svgPaths.p27e3e380} fill="var(--fill-0, black)" fillRule="evenodd" id="ð Ink" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Face() {
  return (
    <div className="absolute inset-[23.88%_27.82%_57.01%_46.74%]" data-name="FACE">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
        <g id="FACE">
          <path clipRule="evenodd" d={svgPaths.p1419e900} fill="var(--fill-0, black)" fillRule="evenodd" id="ð Ink" />
        </g>
      </svg>
    </div>
  );
}

function FacialHairMoustache4() {
  return (
    <div className="absolute inset-[33.79%_31.78%_51.21%_43.57%]" data-name="facial-hair/Moustache 4">
      <div className="absolute bottom-0 left-0 right-[-11.16%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 23">
          <g id="facial-hair/Moustache 4">
            <path clipRule="evenodd" d={svgPaths.p2546f700} fill="var(--fill-0, black)" fillRule="evenodd" id="ð Ink" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Mask() {
  return <div className="absolute inset-[30.07%_30.28%_55.05%_34.77%]" data-name="MASK" />;
}

function Accesories() {
  return <div className="absolute inset-[27.46%_28.61%_63.54%_36.88%]" data-name="ACCESORIES" />;
}

export default function Peep34() {
  return (
    <div className="relative size-full" data-name="peep-34">
      <BodyCoffee />
      <HeadHatHip />
      <Face />
      <FacialHairMoustache4 />
      <Mask />
      <Accesories />
    </div>
  );
}