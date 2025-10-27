import svgPaths from "./svg-nsg29ejqxd";

function BodyKiller() {
  return (
    <div className="absolute inset-[41.68%_15.05%_10.5%_12.94%]" data-name="body/Killer">
      <div className="absolute bottom-0 left-0 right-0 top-[-7.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 78">
          <g id="body/Killer">
            <path clipRule="evenodd" d={svgPaths.p223fe280} fill="var(--fill-0, #D08B5B)" fillRule="evenodd" id="â Skin" />
            <path clipRule="evenodd" d={svgPaths.p2ec4a780} fill="var(--fill-0, #FDEA6B)" fillRule="evenodd" id="ðª Knife" />
            <path clipRule="evenodd" d={svgPaths.p2127ab00} fill="var(--fill-0, black)" fillRule="evenodd" id="ð Ink" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HeadBun() {
  return (
    <div className="absolute inset-[11.74%_25.62%_51.27%_32.75%]" data-name="head/Bun">
      <div className="absolute bottom-0 left-[-13.92%] right-0 top-[-6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 60">
          <g id="head/Bun">
            <path clipRule="evenodd" d={svgPaths.p1a1e9640} fill="var(--fill-0, #D08B5B)" fillRule="evenodd" id="â Skin" />
            <path clipRule="evenodd" d={svgPaths.p3355cc00} fill="var(--fill-0, black)" fillRule="evenodd" id="ð Ink" />
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

function FacialHair() {
  return <div className="absolute inset-[33.79%_31.78%_51.21%_43.57%]" data-name="FACIAL HAIR" />;
}

function Mask() {
  return <div className="absolute inset-[30.07%_30.28%_55.05%_34.77%]" data-name="MASK" />;
}

function Accesories() {
  return <div className="absolute inset-[27.46%_28.61%_63.54%_36.88%]" data-name="ACCESORIES" />;
}

export default function Peep16() {
  return (
    <div className="relative size-full" data-name="peep-16">
      <BodyKiller />
      <HeadBun />
      <Face />
      <FacialHair />
      <Mask />
      <Accesories />
    </div>
  );
}