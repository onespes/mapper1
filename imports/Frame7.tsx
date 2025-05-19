import svgPaths from "./svg-j48jlcr45p";

function Frame4() {
  return (
    <div className="relative shrink-0 size-10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="Frame 4">
          <rect fill="var(--fill-0, white)" height="40" rx="20" width="40" />
          <path
            d="M10.5 14H29.5"
            id="Vector 1"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M13.5 20H26.5"
            id="Vector 2"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M16.5 26H23.5"
            id="Vector 3"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="Frame 5">
          <rect fill="var(--fill-0, white)" height="40" rx="20" width="40" />
          <path
            d={svgPaths.p2f3d8800}
            id="Rectangle 8"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <circle
            cx="20"
            cy="18.5"
            id="Ellipse 1"
            r="4"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="Frame 6">
          <rect fill="var(--fill-0, white)" height="40" rx="20" width="40" />
          <path
            d={svgPaths.p269b3800}
            id="Rectangle 8"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="relative size-full">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-center justify-center p-[12px] relative size-full">
          <Frame4 />
          <Frame5 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}