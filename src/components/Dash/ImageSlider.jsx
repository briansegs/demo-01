import { sliderData } from "../../constants/Dash/hero";

const ImageSlider = () => {
  return (
    <>
      <div className="relative flex-1">
        <div className="flex w-full lg:h-[60vh] h-full overflow-x-auto">
          {sliderData.map(({ id, href, src, styles }) => (
            <a key={id} href={href} className="w-full flex-shrink-0">
              <img
                src={src}
                className={`w-[171vh] h-full object-fit rounded-[10px] shadow-[10px_10px_10px_black] ${styles}`}
              />
            </a>
          ))}
        </div>

        <div className="border-white border-[1px] w-fit h-[4vh] pl-1 pr-3 bg-black absolute text-white rounded-tr-[10px] rounded-tl-[10px] bottom-10 sm:right-96 right-20">
          <p>Hover & Scroll {">>>"}</p>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
