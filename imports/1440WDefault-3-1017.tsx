import svgPaths from "./svg-kqe5ns4quy";
import imgSearchImage from "figma:asset/bffbb056e652d04561d683e49422ee7897a870ca.png";
import imgSearchImage1 from "figma:asset/d2325c792f665c5b46d23894cfdf02943e62cdd2.png";
import imgSearchImage2 from "figma:asset/672637374713fd5944290efe17961b911df9fd96.png";
import imgSearchImage3 from "figma:asset/0b671739ab3dc5834927df75020aad1111648318.png";
import imgSearchImage4 from "figma:asset/6a4c558395512d81d3e11cee5c9c98def6c3e8a1.png";
import imgSearchImage5 from "figma:asset/e32976628a002f5fee9735c4b7ea0c2925b2e88b.png";
import imgImage from "figma:asset/beb01c106494662cb9fefd3c3a3ca6300f7ffd5a.png";

function BackgroundBorder() {
  return (
    <div
      className="bg-[#ffffff] h-[38px] max-h-[38px] min-w-40 relative rounded-[25px] shrink-0 w-40"
      data-name="Background+Border"
    >
      <div className="absolute border border-[#c1cfce] border-solid inset-[-1px] pointer-events-none rounded-[26px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-[38px] items-center justify-start px-5 py-3 relative w-40">
          <div className="basis-0 css-2h73v7 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#003147] text-[16px] text-left">
            <p className="block leading-[26px]">Filter</p>
          </div>
          <div className="h-1.5 relative shrink-0 w-2.5" data-name="Vector">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 10 6"
            >
              <path
                d="M10 0L5 6L0 0H10Z"
                fill="var(--fill-0, #080F11)"
                id="Vector"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div
      className="bg-[#ffffff] h-[38px] max-h-[38px] min-w-40 relative rounded-[25px] shrink-0 w-40"
      data-name="Background+Border"
    >
      <div className="absolute border border-[#c1cfce] border-solid inset-[-1px] pointer-events-none rounded-[26px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-[38px] items-center justify-start px-5 py-3 relative w-40">
          <div className="basis-0 css-2h73v7 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#003147] text-[16px] text-left">
            <p className="block leading-[26px]">Location</p>
          </div>
          <div className="h-1.5 relative shrink-0 w-2.5" data-name="Vector">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 10 6"
            >
              <path
                d="M10 0L5 6L0 0H10Z"
                fill="var(--fill-0, #080F11)"
                id="Vector"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div
      className="bg-[#ffffff] h-[38px] max-h-[38px] min-w-40 relative rounded-[25px] shrink-0 w-60"
      data-name="Background+Border"
    >
      <div className="absolute border border-[#c1cfce] border-solid inset-[-1px] pointer-events-none rounded-[26px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-[38px] items-center justify-start px-5 py-3 relative w-60">
          <div className="basis-0 css-2h73v7 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#003147] text-[16px] text-left">
            <p className="block leading-[26px]">Search Keyword</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative">
          <BackgroundBorder />
          <BackgroundBorder1 />
          <BackgroundBorder2 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#080f11] relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-[20px] relative w-full">
          <div className="css-xoyyvm font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[20px] text-left text-nowrap">
            <p className="block leading-[26px] whitespace-pre">Mapper</p>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[29px]" data-name="image">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 29 29"
      >
        <g id="image">
          <path
            d={svgPaths.p1b151780}
            fill="var(--fill-0, #333333)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="relative shrink-0 size-[29px]" data-name="image fill">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative size-[29px]">
          <Image />
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Image"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
          <ImageFill />
        </div>
      </div>
    </div>
  );
}

function ButtonZoomIn() {
  return (
    <div className="relative shrink-0 size-[29px]" data-name="Button - Zoom in">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative size-[29px]">
          <Image1 />
        </div>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="relative shrink-0 size-[29px]" data-name="image">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 29 29"
      >
        <g id="image">
          <path
            d={svgPaths.p31261500}
            fill="var(--fill-0, #333333)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="relative shrink-0 size-[29px]" data-name="image fill">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative size-[29px]">
          <Image2 />
        </div>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Image"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
          <ImageFill1 />
        </div>
      </div>
    </div>
  );
}

function ButtonZoomOut() {
  return (
    <div
      className="h-[30px] relative shrink-0 w-[29px]"
      data-name="Button - Zoom out"
    >
      <div className="absolute border-[#dddddd] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[30px] items-start justify-center pb-0 pt-px px-0 relative w-[29px]">
          <Image3 />
        </div>
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="relative shrink-0 size-[29px]" data-name="image">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 29 29"
      >
        <g id="image">
          <path
            d={svgPaths.p1d713f80}
            fill="var(--fill-0, #333333)"
            id="Vector"
          />
          <path
            d={svgPaths.pa97b400}
            fill="var(--fill-0, #CCCCCC)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function ImageFill2() {
  return (
    <div className="relative shrink-0 size-[29px]" data-name="image fill">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative size-[29px]">
          <Image4 />
        </div>
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Image"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
          <ImageFill2 />
        </div>
      </div>
    </div>
  );
}

function ButtonResetBearingToNorth() {
  return (
    <div
      className="h-[30px] relative shrink-0 w-[29px]"
      data-name="Button - Reset bearing to north"
    >
      <div className="absolute border-[#dddddd] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[30px] items-start justify-center pb-0 pt-px px-0 relative w-[29px]">
          <Image5 />
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div
      className="absolute bg-[#ffffff] right-4 rounded shadow-[0px_0px_0px_2px_rgba(0,0,0,0.1)] top-4 w-[29px]"
      data-name="Background+Shadow"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-[29px]">
          <ButtonZoomIn />
          <ButtonZoomOut />
          <ButtonResetBearingToNorth />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute bottom-[-0.303%] left-[-0.069%] right-[-0.069%] top-[9.89%]"
      data-name="Group"
    >
      <div className="absolute bottom-0 left-0 right-0 top-[-0.001%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 9"
        >
          <g id="Group">
            <path
              d={svgPaths.pfe0ac00}
              fill="var(--fill-0, #F3811F)"
              id="Vector"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute bottom-[-0.303%] contents left-[-0.069%] right-[-0.069%] top-[9.89%]"
      data-name="Group"
    >
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute bottom-[-0.303%] contents left-[-0.069%] right-[-0.069%] top-[9.89%]"
      data-name="Group"
    >
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute bottom-[-0.303%] contents left-[-0.069%] right-[-0.069%] top-[9.89%]"
      data-name="Group"
    >
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div
      className="absolute bottom-[-0.303%] contents left-[-0.069%] right-[-0.069%] top-[9.89%]"
      data-name="Group"
    >
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div
      className="absolute bottom-[-0.303%] contents left-[-0.069%] right-[-0.069%] top-[9.89%]"
      data-name="Group"
    >
      <Group4 />
    </div>
  );
}

function IconDownSvg() {
  return (
    <div
      className="h-[9px] overflow-clip relative shrink-0 w-[13px]"
      data-name="icon-down.svg"
    >
      <Group5 />
    </div>
  );
}

function IconDownSvgFill() {
  return (
    <div
      className="h-[9px] relative shrink-0 w-[13px]"
      data-name="icon-down.svg fill"
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[9px] items-center justify-center p-0 relative w-[13px]">
          <IconDownSvg />
        </div>
      </div>
    </div>
  );
}

function IconDownSvg1() {
  return (
    <div className="relative w-[13px]" data-name="icon-down.svg">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-[13px]">
          <IconDownSvgFill />
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p3e1e8c00}
            fill="var(--fill-0, #F3811F)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function PlusRoundSvg() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="plus-round.svg"
    >
      <Group7 />
    </div>
  );
}

function PlusRoundSvgFill() {
  return (
    <div className="relative shrink-0 size-4" data-name="plus-round.svg fill">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative size-4">
          <PlusRoundSvg />
        </div>
      </div>
    </div>
  );
}

function IconCheck() {
  return (
    <div className="max-h-4 max-w-4 relative shrink-0" data-name="icon check">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative">
          <PlusRoundSvgFill />
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start pb-[2.25px] pl-1 pr-0 pt-[4.75px] relative">
          <IconCheck />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="absolute h-5 left-7 right-[104px] top-[19px]"
      data-name="Heading 4"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-full items-center justify-start pl-0 pr-[39px] py-0 relative">
          <div className="css-7m8zqv font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14.875px] text-left text-nowrap tracking-[2.5px] uppercase">
            <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
              Dominique Pitts
            </p>
          </div>
          <Link />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bottom-5 left-7 top-[99px]" data-name="Link">
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-full items-start justify-start pl-0 pr-[8.5px] py-0 relative">
          <div className="css-60ei5v font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3811f] text-[11.4375px] text-left text-nowrap">
            <p className="block leading-[15px] whitespace-pre">Hire</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div
      className="absolute bottom-5 left-[58.51px] top-[99px]"
      data-name="Link"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-full items-start justify-start px-[7.5px] py-0 relative">
          <div className="css-60ei5v font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3811f] text-[11.625px] text-left text-nowrap">
            <p className="block leading-[15px] whitespace-pre">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchImage() {
  return (
    <div
      className="[background-size:107.51%_100%] bg-[50%_0%] bg-no-repeat max-w-20 mb-[-9.28px] rounded-[80px] shrink-0 size-20"
      data-name="search image"
      style={{ backgroundImage: `url('${imgSearchImage}')` }}
    />
  );
}

function Background() {
  return (
    <div
      className="basis-0 bg-gradient-to-l from-[#f3811f] grow min-h-px min-w-px relative rounded-[30px] shrink-0 to-[#e72725]"
      data-name="Background"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[7px] py-[5px] relative w-full">
          <div
            className="css-82vz94 font-['Inter:Bold',_sans-serif] font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[9.53125px] text-center tracking-[1.25px] uppercase"
            style={{ width: "min-content" }}
          >
            <p className="adjustLetterSpacing block leading-[14px]">MESSAGE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div
      className="mb-[-9.28px] min-w-[76px] relative rounded-[30px] shrink-0"
      data-name="Link"
    >
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center p-0 relative">
          <div
            className="absolute bg-gradient-to-l from-[#f3811f] h-7 left-[-2px] rounded-[30px] to-[#e72725] top-[-2px] w-20"
            data-name="Gradient"
          />
          <Background />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="absolute h-[94.72px] left-64 max-w-20 top-[19px]"
      data-name="Container"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[94.72px] items-center justify-start pb-[9.28px] pt-0 px-0 relative">
          <SearchImage />
          <Link3 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[134px] relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <div className="absolute css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[16px] left-7 not-italic text-[#ffffff] text-[11.8125px] text-left top-[42px] w-[226.33px]">
        <p className="block mb-0">
          Director, Producer, Artist, Film Directors,
        </p>
        <p className="block mb-0">Film Producers</p>
        <p className="block">Day Rate: $5000</p>
      </div>
      <Link1 />
      <Link2 />
      <Container />
    </div>
  );
}

function Item() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="absolute border-[#33383a] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p3e1e8c00}
            fill="var(--fill-0, #F3811F)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function PlusRoundSvg1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="plus-round.svg"
    >
      <Group9 />
    </div>
  );
}

function PlusRoundSvgFill1() {
  return (
    <div className="relative shrink-0 size-4" data-name="plus-round.svg fill">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative size-4">
          <PlusRoundSvg1 />
        </div>
      </div>
    </div>
  );
}

function IconCheck1() {
  return (
    <div className="max-h-4 max-w-4 relative shrink-0" data-name="icon check">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative">
          <PlusRoundSvgFill1 />
        </div>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start pb-[2.25px] pl-1 pr-0 pt-[4.75px] relative">
          <IconCheck1 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div
      className="absolute h-5 left-7 right-[104.13px] top-[19px]"
      data-name="Heading 4"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-full items-center justify-start pl-0 pr-[54.87px] py-0 relative">
          <div className="css-7m8zqv font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14.125px] text-left text-nowrap tracking-[2.5px] uppercase">
            <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
              James Stewart
            </p>
          </div>
          <Link4 />
        </div>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute bottom-5 left-7 top-[99px]" data-name="Link">
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-full items-start justify-start pl-0 pr-[8.5px] py-0 relative">
          <div className="css-60ei5v font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3811f] text-[11.4375px] text-left text-nowrap">
            <p className="block leading-[15px] whitespace-pre">Hire</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div
      className="absolute bottom-5 left-[58.51px] top-[99px]"
      data-name="Link"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-full items-start justify-start px-[7.5px] py-0 relative">
          <div className="css-60ei5v font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3811f] text-[11.625px] text-left text-nowrap">
            <p className="block leading-[15px] whitespace-pre">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchImage1() {
  return (
    <div
      className="[background-size:100%_100%] bg-[0%_0%] bg-no-repeat max-w-20 mb-[-9.28px] rounded-[80px] shrink-0 size-20"
      data-name="search image"
      style={{ backgroundImage: `url('${imgSearchImage1}')` }}
    />
  );
}

function Background1() {
  return (
    <div
      className="basis-0 bg-gradient-to-l from-[#f3811f] grow min-h-px min-w-px relative rounded-[30px] shrink-0 to-[#e72725]"
      data-name="Background"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[7px] py-[5px] relative w-full">
          <div
            className="css-82vz94 font-['Inter:Bold',_sans-serif] font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[9.53125px] text-center tracking-[1.25px] uppercase"
            style={{ width: "min-content" }}
          >
            <p className="adjustLetterSpacing block leading-[14px]">MESSAGE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div
      className="mb-[-9.28px] min-w-[76px] relative rounded-[30px] shrink-0"
      data-name="Link"
    >
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center p-0 relative">
          <div
            className="absolute bg-gradient-to-l from-[#f3811f] h-7 left-[-2px] rounded-[30px] to-[#e72725] top-[-2px] w-20"
            data-name="Gradient"
          />
          <Background1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute h-[94.72px] left-64 max-w-20 top-[19px]"
      data-name="Container"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[94.72px] items-center justify-start pb-[9.28px] pt-0 px-0 relative">
          <SearchImage1 />
          <Link7 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[134px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <div className="absolute css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[16px] left-7 not-italic text-[#ffffff] text-[12px] text-left top-[42px] w-[182.03px]">
        <p className="block mb-0">Production Company, Director,</p>
        <p className="block mb-0">Producer, Camera, Drone Op</p>
        <p className="block">Day Rate: $500</p>
      </div>
      <Link5 />
      <Link6 />
      <Container2 />
    </div>
  );
}

function Item1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="absolute border-[#33383a] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p3e1e8c00}
            fill="var(--fill-0, #F3811F)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function PlusRoundSvg2() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="plus-round.svg"
    >
      <Group11 />
    </div>
  );
}

function PlusRoundSvgFill2() {
  return (
    <div className="relative shrink-0 size-4" data-name="plus-round.svg fill">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative size-4">
          <PlusRoundSvg2 />
        </div>
      </div>
    </div>
  );
}

function IconCheck2() {
  return (
    <div className="max-h-4 max-w-4 relative shrink-0" data-name="icon check">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative">
          <PlusRoundSvgFill2 />
        </div>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start pb-[2.25px] pl-1 pr-0 pt-[4.75px] relative">
          <IconCheck2 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div
      className="absolute h-5 left-7 right-[103.8px] top-[19px]"
      data-name="Heading 4"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-full items-center justify-start pl-0 pr-[39.2px] py-0 relative">
          <div className="css-7m8zqv font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap tracking-[2.5px] uppercase">
            <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
              Dakota Kochen
            </p>
          </div>
          <Link8 />
        </div>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute bottom-5 left-7 top-[99px]" data-name="Link">
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-full items-start justify-start pl-0 pr-[8.5px] py-0 relative">
          <div className="css-60ei5v font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3811f] text-[11.4375px] text-left text-nowrap">
            <p className="block leading-[15px] whitespace-pre">Hire</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div
      className="absolute bottom-5 left-[58.51px] top-[99px]"
      data-name="Link"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-full items-start justify-start px-[7.5px] py-0 relative">
          <div className="css-60ei5v font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3811f] text-[11.625px] text-left text-nowrap">
            <p className="block leading-[15px] whitespace-pre">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchImage2() {
  return (
    <div
      className="[background-size:100%_100%] bg-[0%_0%] bg-no-repeat max-w-20 mb-[-9.28px] rounded-[80px] shrink-0 size-20"
      data-name="search image"
      style={{ backgroundImage: `url('${imgSearchImage2}')` }}
    />
  );
}

function Background2() {
  return (
    <div
      className="basis-0 bg-gradient-to-l from-[#f3811f] grow min-h-px min-w-px relative rounded-[30px] shrink-0 to-[#e72725]"
      data-name="Background"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[7px] py-[5px] relative w-full">
          <div
            className="css-82vz94 font-['Inter:Bold',_sans-serif] font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[9.53125px] text-center tracking-[1.25px] uppercase"
            style={{ width: "min-content" }}
          >
            <p className="adjustLetterSpacing block leading-[14px]">MESSAGE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div
      className="mb-[-9.28px] min-w-[76px] relative rounded-[30px] shrink-0"
      data-name="Link"
    >
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center p-0 relative">
          <div
            className="absolute bg-gradient-to-l from-[#f3811f] h-7 left-[-2px] rounded-[30px] to-[#e72725] top-[-2px] w-20"
            data-name="Gradient"
          />
          <Background2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute h-[94.72px] left-64 max-w-20 top-[19px]"
      data-name="Container"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[94.72px] items-center justify-start pb-[9.28px] pt-0 px-0 relative">
          <SearchImage2 />
          <Link11 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[134px] relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <div className="absolute css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[16px] left-7 not-italic text-[#ffffff] text-[12px] text-left top-[42px] w-[160.16px]">
        <p className="block mb-0">Photo, Camera Operators /</p>
        <p className="block mb-0">Videographers</p>
        <p className="block">Day Rate: $500</p>
      </div>
      <Link9 />
      <Link10 />
      <Container4 />
    </div>
  );
}

function Item2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="absolute border-[#33383a] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p3e1e8c00}
            fill="var(--fill-0, #F3811F)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function PlusRoundSvg3() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="plus-round.svg"
    >
      <Group13 />
    </div>
  );
}

function PlusRoundSvgFill3() {
  return (
    <div className="relative shrink-0 size-4" data-name="plus-round.svg fill">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative size-4">
          <PlusRoundSvg3 />
        </div>
      </div>
    </div>
  );
}

function IconCheck3() {
  return (
    <div className="max-h-4 max-w-4 relative shrink-0" data-name="icon check">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative">
          <PlusRoundSvgFill3 />
        </div>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start pb-[2.25px] pl-1 pr-0 pt-[4.75px] relative">
          <IconCheck3 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div
      className="absolute h-5 left-7 right-[104.9px] top-[19px]"
      data-name="Heading 4"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-full items-center justify-start pl-0 pr-[85.1px] py-0 relative">
          <div className="css-7m8zqv font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap tracking-[2.5px] uppercase">
            <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
              Chip Alcon
            </p>
          </div>
          <Link12 />
        </div>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute bottom-5 left-7 top-[99px]" data-name="Link">
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-full items-start justify-start pl-0 pr-[8.5px] py-0 relative">
          <div className="css-60ei5v font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3811f] text-[11.4375px] text-left text-nowrap">
            <p className="block leading-[15px] whitespace-pre">Hire</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div
      className="absolute bottom-5 left-[58.51px] top-[99px]"
      data-name="Link"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-full items-start justify-start px-[7.5px] py-0 relative">
          <div className="css-60ei5v font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3811f] text-[11.625px] text-left text-nowrap">
            <p className="block leading-[15px] whitespace-pre">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchImage3() {
  return (
    <div
      className="[background-size:100%_100%] bg-[0%_0%] bg-no-repeat max-w-20 mb-[-9.28px] rounded-[80px] shrink-0 size-20"
      data-name="search image"
      style={{ backgroundImage: `url('${imgSearchImage3}')` }}
    />
  );
}

function Background3() {
  return (
    <div
      className="basis-0 bg-gradient-to-l from-[#f3811f] grow min-h-px min-w-px relative rounded-[30px] shrink-0 to-[#e72725]"
      data-name="Background"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[7px] py-[5px] relative w-full">
          <div
            className="css-82vz94 font-['Inter:Bold',_sans-serif] font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[9.53125px] text-center tracking-[1.25px] uppercase"
            style={{ width: "min-content" }}
          >
            <p className="adjustLetterSpacing block leading-[14px]">MESSAGE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div
      className="mb-[-9.28px] min-w-[76px] relative rounded-[30px] shrink-0"
      data-name="Link"
    >
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center p-0 relative">
          <div
            className="absolute bg-gradient-to-l from-[#f3811f] h-7 left-[-2px] rounded-[30px] to-[#e72725] top-[-2px] w-20"
            data-name="Gradient"
          />
          <Background3 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="absolute h-[94.72px] left-64 max-w-20 top-[19px]"
      data-name="Container"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[94.72px] items-center justify-start pb-[9.28px] pt-0 px-0 relative">
          <SearchImage3 />
          <Link15 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[134px] relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <div className="absolute css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[16px] left-7 not-italic text-[#ffffff] text-[12px] text-left top-[42px] w-[206.3px]">
        <p className="block mb-0">Drone Op, Photo, Drone Operator /</p>
        <p className="block mb-0">Aerial Photography / UAV Pilot</p>
        <p className="block">Day Rate: $1000</p>
      </div>
      <Link13 />
      <Link14 />
      <Container6 />
    </div>
  );
}

function Item3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="absolute border-[#33383a] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p3e1e8c00}
            fill="var(--fill-0, #F3811F)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function PlusRoundSvg4() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="plus-round.svg"
    >
      <Group15 />
    </div>
  );
}

function PlusRoundSvgFill4() {
  return (
    <div className="relative shrink-0 size-4" data-name="plus-round.svg fill">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative size-4">
          <PlusRoundSvg4 />
        </div>
      </div>
    </div>
  );
}

function IconCheck4() {
  return (
    <div className="max-h-4 max-w-4 relative shrink-0" data-name="icon check">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative">
          <PlusRoundSvgFill4 />
        </div>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start pb-[2.25px] pl-1 pr-0 pt-[4.75px] relative">
          <IconCheck4 />
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div
      className="absolute h-5 left-7 right-[117px] top-[19px]"
      data-name="Heading 4"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-full items-center justify-start p-0 relative">
          <div className="css-7m8zqv font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15.875px] text-left text-nowrap tracking-[2.5px] uppercase">
            <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
              Cameron Hoiland
            </p>
          </div>
          <Link16 />
        </div>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute bottom-9 left-7 top-[83px]" data-name="Link">
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-full items-start justify-start pl-0 pr-[8.5px] py-0 relative">
          <div className="css-60ei5v font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3811f] text-[11.4375px] text-left text-nowrap">
            <p className="block leading-[15px] whitespace-pre">Hire</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div
      className="absolute bottom-9 left-[58.51px] top-[83px]"
      data-name="Link"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col h-full items-start justify-start px-[7.5px] py-0 relative">
          <div className="css-60ei5v font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#f3811f] text-[11.625px] text-left text-nowrap">
            <p className="block leading-[15px] whitespace-pre">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchImage4() {
  return (
    <div
      className="[background-size:100%_145.38%] bg-[0%_50%] bg-no-repeat max-w-20 mb-[-9.28px] rounded-[80px] shrink-0 size-20"
      data-name="search image"
      style={{ backgroundImage: `url('${imgSearchImage4}')` }}
    />
  );
}

function Background4() {
  return (
    <div
      className="basis-0 bg-gradient-to-l from-[#f3811f] grow min-h-px min-w-px relative rounded-[30px] shrink-0 to-[#e72725]"
      data-name="Background"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[7px] py-[5px] relative w-full">
          <div
            className="css-82vz94 font-['Inter:Bold',_sans-serif] font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[9.53125px] text-center tracking-[1.25px] uppercase"
            style={{ width: "min-content" }}
          >
            <p className="adjustLetterSpacing block leading-[14px]">MESSAGE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div
      className="mb-[-9.28px] min-w-[76px] relative rounded-[30px] shrink-0"
      data-name="Link"
    >
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-center p-0 relative">
          <div
            className="absolute bg-gradient-to-l from-[#f3811f] h-7 left-[-2px] rounded-[30px] to-[#e72725] top-[-2px] w-20"
            data-name="Gradient"
          />
          <Background4 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="absolute h-[94.72px] left-64 max-w-20 top-[19px]"
      data-name="Container"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[94.72px] items-center justify-start pb-[9.28px] pt-0 px-0 relative">
          <SearchImage4 />
          <Link19 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[134px] relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <div className="absolute css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal h-8 leading-[16px] left-7 not-italic text-[#ffffff] text-[12px] text-left top-[42px] w-[87.68px]">
        <p className="block mb-0">Camera</p>
        <p className="block">Day Rate: $500</p>
      </div>
      <Link17 />
      <Link18 />
      <Container8 />
    </div>
  );
}

function Item4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="absolute border-[#33383a] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Group">
          <path
            d={svgPaths.p3e1e8c00}
            fill="var(--fill-0, #F3811F)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function PlusRoundSvg5() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-4"
      data-name="plus-round.svg"
    >
      <Group17 />
    </div>
  );
}

function PlusRoundSvgFill5() {
  return (
    <div className="relative shrink-0 size-4" data-name="plus-round.svg fill">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-0 relative size-4">
          <PlusRoundSvg5 />
        </div>
      </div>
    </div>
  );
}

function IconCheck5() {
  return (
    <div className="max-h-4 max-w-4 relative shrink-0" data-name="icon check">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative">
          <PlusRoundSvgFill5 />
        </div>
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div
      className="relative shrink-0"
      data-name="Link"
      style={{ marginRight: "-1.42109e-14px" }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start pb-[2.25px] pl-1 pr-0 pt-[4.75px] relative">
          <IconCheck5 />
        </div>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div
      className="absolute h-5 left-7 right-[186px] top-[19px]"
      data-name="Heading 4"
    >
      <div className="flex flex-row items-center relative size-full">
        <div
          className="box-border content-stretch flex flex-row h-full items-center justify-start pl-0 py-0 relative"
          style={{ paddingRight: "1.42109e-14px" }}
        >
          <div
            className="css-7m8zqv font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap tracking-[2.5px] uppercase"
            style={{ marginRight: "-1.42109e-14px" }}
          >
            <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
              Mario Vega
            </p>
          </div>
          <Link20 />
        </div>
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div
      className="absolute bottom-9 left-7 top-[83px] w-[30.51px]"
      data-name="Link"
    >
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link22() {
  return (
    <div
      className="absolute bottom-9 left-[58.51px] top-[83px] w-[50.95px]"
      data-name="Link"
    >
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link23() {
  return (
    <div
      className="absolute bottom-9 left-[109.45px] top-[83px] w-[40.29px]"
      data-name="Link"
    />
  );
}

function SearchImage5() {
  return (
    <div
      className="[background-size:100%_149.98%] absolute bg-[0%_50%] bg-no-repeat left-64 rounded-[80px] size-20 top-[19px]"
      data-name="search image"
      style={{ backgroundImage: `url('${imgSearchImage5}')` }}
    />
  );
}

function Container10() {
  return (
    <div className="h-[134px] relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <div className="absolute css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal h-8 leading-[16px] left-7 not-italic text-[#ffffff] text-[12px] text-left top-[42px] w-[127.65px]">
        <p className="block mb-0">Camera, Photo, Crew</p>
        <p className="block">Day Rate: $300</p>
      </div>
      <Link21 />
      <Link22 />
      <Link23 />
      <SearchImage5 />
    </div>
  );
}

function Item5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="absolute border-[#33383a] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Heading4Link() {
  return (
    <div
      className="absolute h-[23px] left-[198.72px] top-[17.5px] w-5"
      data-name="Heading 4 → Link"
    />
  );
}

function Link24() {
  return (
    <div
      className="absolute bottom-9 left-7 top-[83px] w-[30.51px]"
      data-name="Link"
    >
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link25() {
  return (
    <div
      className="absolute bottom-9 left-[58.51px] top-[83px] w-[49.95px]"
      data-name="Link"
    />
  );
}

function Link26() {
  return (
    <div
      className="absolute h-6 left-[258px] rounded-[30px] top-[89.72px] w-[76px]"
      data-name="Link"
    />
  );
}

function Container11() {
  return (
    <div className="h-[134px] relative shrink-0 w-full" data-name="Container">
      <Heading4Link />
      <div className="absolute css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal h-8 leading-[16px] left-7 not-italic text-[#ffffff] text-[12px] text-left top-[42px] w-[94.33px]">
        <p className="block mb-0">Photo</p>
        <p className="block">Day Rate: $1500</p>
      </div>
      <Link24 />
      <Link25 />
      <Link26 />
    </div>
  );
}

function Item6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="absolute border-[#33383a] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Heading4Link1() {
  return (
    <div
      className="absolute h-[23px] left-[158.86px] top-[17.5px] w-5"
      data-name="Heading 4 → Link"
    />
  );
}

function Link27() {
  return (
    <div
      className="absolute bottom-9 left-7 top-[83px] w-[30.51px]"
      data-name="Link"
    >
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link28() {
  return (
    <div
      className="absolute bottom-9 left-[58.51px] top-[83px] w-[49.95px]"
      data-name="Link"
    />
  );
}

function Link29() {
  return (
    <div
      className="absolute h-6 left-[258px] rounded-[30px] top-[89.72px] w-[76px]"
      data-name="Link"
    />
  );
}

function Container12() {
  return (
    <div className="h-[134px] relative shrink-0 w-full" data-name="Container">
      <Heading4Link1 />
      <div className="absolute css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal h-8 leading-[16px] left-7 not-italic text-[#ffffff] text-[12px] text-left top-[42px] w-[94.33px]">
        <p className="block mb-0">Producer</p>
        <p className="block">Day Rate: $1000</p>
      </div>
      <Link27 />
      <Link28 />
      <Link29 />
    </div>
  );
}

function Item7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="absolute border-[#33383a] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Heading4Link2() {
  return (
    <div
      className="absolute h-[23px] left-[184.34px] top-[17.5px] w-5"
      data-name="Heading 4 → Link"
    />
  );
}

function Link30() {
  return (
    <div
      className="absolute bottom-5 left-7 top-[99px] w-[30.51px]"
      data-name="Link"
    >
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link31() {
  return (
    <div
      className="absolute bottom-5 left-[58.51px] top-[99px] w-[50.95px]"
      data-name="Link"
    >
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link32() {
  return (
    <div
      className="absolute bottom-5 left-[109.45px] top-[99px] w-[40.29px]"
      data-name="Link"
    />
  );
}

function Link33() {
  return (
    <div
      className="absolute h-6 left-[258px] rounded-[30px] top-[89.72px] w-[76px]"
      data-name="Link"
    />
  );
}

function Container13() {
  return (
    <div className="h-[134px] relative shrink-0 w-full" data-name="Container">
      <Heading4Link2 />
      <div className="absolute css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[16px] left-7 not-italic text-[#ffffff] text-[12px] text-left top-[42px] w-[220.05px]">
        <p className="block mb-0">Production Company, Director, Video</p>
        <p className="block mb-0">Editors</p>
        <p className="block">Day Rate: $650</p>
      </div>
      <Link30 />
      <Link31 />
      <Link32 />
      <Link33 />
    </div>
  );
}

function Item8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="absolute border-[#33383a] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Heading4Link3() {
  return (
    <div
      className="absolute h-[23px] left-7 top-[37.5px] w-5"
      data-name="Heading 4 → Link"
    />
  );
}

function Link34() {
  return (
    <div
      className="absolute bottom-[19px] left-7 top-[135px] w-[30.51px]"
      data-name="Link"
    >
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link35() {
  return (
    <div
      className="absolute bottom-[19px] left-[58.51px] top-[135px] w-[50.95px]"
      data-name="Link"
    >
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link36() {
  return (
    <div
      className="absolute bottom-[19px] left-[109.45px] top-[135px] w-[40.29px]"
      data-name="Link"
    />
  );
}

function Link37() {
  return (
    <div
      className="absolute h-6 left-[258px] rounded-[30px] top-[89.72px] w-[76px]"
      data-name="Link"
    />
  );
}

function Container14() {
  return (
    <div className="h-[169px] relative shrink-0 w-full" data-name="Container">
      <Heading4Link3 />
      <div className="absolute css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal h-16 leading-[16px] left-7 not-italic text-[#ffffff] text-[12px] text-left top-[62px] w-[225.58px]">
        <p className="block mb-0">Director, Cinematographers / Directors</p>
        <p className="block mb-0">of Photography / DP, Television</p>
        <p className="block mb-0">Directors</p>
        <p className="block">Day Rate: $750</p>
      </div>
      <Link34 />
      <Link35 />
      <Link36 />
      <Link37 />
    </div>
  );
}

function Item9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="absolute border-[#33383a] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Heading4Link4() {
  return (
    <div
      className="absolute h-[23px] left-[203.47px] top-[17.5px] w-5"
      data-name="Heading 4 → Link"
    />
  );
}

function Link38() {
  return (
    <div
      className="absolute bottom-5 left-7 top-[99px] w-[30.51px]"
      data-name="Link"
    >
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link39() {
  return (
    <div
      className="absolute bottom-5 left-[58.51px] top-[99px] w-[49.95px]"
      data-name="Link"
    />
  );
}

function Link40() {
  return (
    <div
      className="absolute h-6 left-[258px] rounded-[30px] top-[89.72px] w-[76px]"
      data-name="Link"
    />
  );
}

function Container15() {
  return (
    <div className="h-[134px] relative shrink-0 w-full" data-name="Container">
      <Heading4Link4 />
      <div className="absolute css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal h-12 leading-[16px] left-7 not-italic text-[#ffffff] text-[12px] text-left top-[42px] w-[182.03px]">
        <p className="block mb-0">Production Company, Director,</p>
        <p className="block mb-0">Producer, Camera, Photo</p>
        <p className="block">Day Rate: $800</p>
      </div>
      <Link38 />
      <Link39 />
      <Link40 />
    </div>
  );
}

function Item10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="absolute border-[#33383a] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Heading4Link5() {
  return (
    <div
      className="absolute h-[23px] left-7 top-[37.5px] w-5"
      data-name="Heading 4 → Link"
    />
  );
}

function Link41() {
  return (
    <div
      className="absolute bottom-[19px] left-7 top-[103px] w-[30.51px]"
      data-name="Link"
    >
      <div className="absolute border-[#33383a] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link42() {
  return (
    <div
      className="absolute bottom-[19px] left-[58.51px] top-[103px] w-[49.95px]"
      data-name="Link"
    />
  );
}

function Link43() {
  return (
    <div
      className="absolute h-6 left-[258px] rounded-[30px] top-[89.72px] w-[76px]"
      data-name="Link"
    />
  );
}

function Container16() {
  return (
    <div className="h-[137px] relative shrink-0 w-full" data-name="Container">
      <Heading4Link5 />
      <div className="absolute css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal h-8 leading-[16px] left-7 not-italic text-[#ffffff] text-[12px] text-left top-[62px] w-[87.68px]">
        <p className="block mb-0">Artist</p>
        <p className="block">Day Rate: $800</p>
      </div>
      <Link41 />
      <Link42 />
      <Link43 />
    </div>
  );
}

function Item11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="absolute border-[#33383a] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-px px-0 relative w-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div
      className="absolute left-0 max-h-[710px] right-0 top-9"
      data-name="List"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
          <Item />
          <Item1 />
          <Item2 />
          <Item3 />
          <Item4 />
          <Item5 />
          <Item6 />
          <Item7 />
          <Item8 />
          <Item9 />
          <Item10 />
          <Item11 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="absolute bottom-[-0.539%] right-[7px] top-[4.852%] w-[7px]"
      data-name="Container"
    >
      <div
        className="absolute bg-[#f3811f] h-[70px] right-[3px] rounded-[2.5px] top-[13px] w-1"
        data-name="Background"
      />
    </div>
  );
}

function ListContainer() {
  return (
    <div
      className="absolute bg-[#080f11] h-[742px] left-0 overflow-clip top-0 w-[360px]"
      data-name="list container"
    >
      <div className="absolute css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal h-[22px] leading-[0] left-3.5 not-italic text-[#ffffff] text-[13.4531px] text-left top-[7px] w-[123.19px]">
        <p className="block leading-[22px]">704 Search Results</p>
      </div>
      <div
        className="absolute flex items-center justify-center left-[333px] max-w-[13px] translate-y-[-50%] w-[13px]"
        style={{ top: "calc(50% - 352px)" }}
      >
        <div className="flex-none rotate-[180deg]">
          <IconDownSvg1 />
        </div>
      </div>
      <List />
      <Container17 />
    </div>
  );
}

function MapContainer() {
  return (
    <div
      className="bg-[#6b6b6b] h-[742px] relative shrink-0 w-[1425px]"
      data-name="map container"
    >
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[594px] rounded-[25px] size-[50px] top-[258px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[1139px] rounded-[25px] size-[50px] top-[324px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[599px] rounded-[25px] size-[50px] top-[220px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[670px] rounded-[25px] size-[50px] top-[312px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[554px] rounded-[25px] size-[50px] top-[247px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[554px] rounded-[25px] size-[50px] top-[247px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[1072px] rounded-[25px] size-[50px] top-[254px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[1065px] rounded-[25px] size-[50px] top-[245px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[703px] rounded-[25px] size-[50px] top-[412px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[652px] rounded-[25px] size-[50px] top-[380px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[919px] rounded-[25px] size-[50px] top-44"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[796px] rounded-[25px] size-[50px] top-[226px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[931px] rounded-[25px] size-[50px] top-[199px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[981px] rounded-[25px] size-[50px] top-[225px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[830px] rounded-[25px] size-[50px] top-[153px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[950px] rounded-[25px] size-[50px] top-[137px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[970px] rounded-[25px] size-[50px] top-[159px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[1134px] rounded-[25px] size-[50px] top-[125px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[950px] rounded-[25px] size-[50px] top-[137px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[948px] rounded-[25px] size-[50px] top-[350px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[995px] rounded-[25px] size-[50px] top-[275px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[817px] rounded-[25px] size-[50px] top-[305px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[1210px] rounded-[25px] size-[50px] top-[280px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[1000px] rounded-[25px] size-[50px] top-[396px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[865px] rounded-[25px] size-[50px] top-[191px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[1220px] rounded-[25px] size-[50px] top-[438px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[941px] rounded-[25px] size-[50px] top-[269px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[1075px] rounded-[25px] size-[50px] top-[492px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[1068px] rounded-[25px] size-[50px] top-[292px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[579px] rounded-[25px] size-[50px] top-[174px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[653px] rounded-[25px] size-[50px] top-[153px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[529px] rounded-[25px] size-[50px] top-[330px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[715px] rounded-[25px] size-[50px] top-[184px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="[background-size:50px_50.7576px] absolute bg-[0%_0%] bg-repeat left-[710px] rounded-[25px] size-[50px] top-[270px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <BackgroundShadow />
      <ListContainer />
    </div>
  );
}

export default function Component1440WDefault() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="1440w default">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
          <Frame2 />
          <MapContainer />
        </div>
      </div>
    </div>
  );
}