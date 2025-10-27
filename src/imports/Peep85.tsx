import svgPaths from "./svg-g3spm2v9ld";

function BodySweaterDots() {
  return (
    <div className="absolute inset-[41.68%_15.05%_10.5%_12.94%]" data-name="body/Sweater Dots">
      <div className="absolute bottom-0 left-0 right-0 top-[-1.91%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 74">
          <g id="body/Sweater Dots">
            <path clipRule="evenodd" d={svgPaths.p21f5d2c0} fill="var(--fill-0, #D08B5B)" fillRule="evenodd" id="â Skin" />
            <path clipRule="evenodd" d={svgPaths.p1601f100} fill="var(--fill-0, #78E185)" fillRule="evenodd" id="ð Top" />
            <path clipRule="evenodd" d={svgPaths.p317ce300} fill="var(--fill-0, black)" fillRule="evenodd" id="ð Ink" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HeadTurban() {
  return (
    <div className="absolute inset-[11.74%_25.62%_51.27%_32.75%]" data-name="head/Turban">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 56">
        <g id="head/Turban">
          <path clipRule="evenodd" d={svgPaths.p231b8f80} fill="var(--fill-0, #D08B5B)" fillRule="evenodd" id="â Skin" />
          <path clipRule="evenodd" d={svgPaths.p3e45fe60} fill="var(--fill-0, #9DDADB)" fillRule="evenodd" id="ð³ââï¸ Turban" />
          <path clipRule="evenodd" d={svgPaths.p1ec4cc00} fill="var(--fill-0, black)" fillRule="evenodd" id="ð Ink" />
        </g>
      </svg>
    </div>
  );
}

function FaceOld() {
  return (
    <div className="absolute inset-[23.88%_27.82%_57.01%_46.74%]" data-name="face/Old">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
        <g id="face/Old">
          <path clipRule="evenodd" d={svgPaths.p2caf3ff0} fill="var(--fill-0, black)" fillRule="evenodd" id="ð Ink" />
        </g>
      </svg>
    </div>
  );
}

function FacialHairFull() {
  return (
    <div className="absolute inset-[33.79%_31.78%_51.21%_43.57%]" data-name="facial-hair/Full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 23">
        <g id="facial-hair/Full">
          <path clipRule="evenodd" d={svgPaths.pcc37100} fill="var(--fill-0, black)" fillRule="evenodd" id="ð Ink" />
        </g>
      </svg>
    </div>
  );
}

function Mask() {
  return <div className="absolute inset-[30.07%_30.28%_55.05%_34.77%]" data-name="MASK" />;
}

function AccessoriesSunglasses() {
  return (
    <div className="absolute inset-[27.46%_28.61%_63.54%_36.88%]" data-name="accessories/Sunglasses">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 14">
        <g id="accessories/Sunglasses">
          <path clipRule="evenodd" d={svgPaths.p11f0a680} fill="var(--fill-0, black)" fillRule="evenodd" id="ð Ink" />
        </g>
      </svg>
    </div>
  );
}

export default function Peep85() {
  return (
    <div className="relative size-full" data-name="peep-85">
      <BodySweaterDots />
      <HeadTurban />
      <FaceOld />
      <FacialHairFull />
      <Mask />
      <AccessoriesSunglasses />
    </div>
  );
}