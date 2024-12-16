const Languages = ({ data }) => {
  return (
    <div className="bg-black lg:w-72 w-full lg:h-[60vh] h-full flex flex-col rounded-[10px]">
      <p className="text-[#f2f2f2] lg:mb-[10vh] pl-2">Choose Your Language</p>

      <div className="flex lg:flex-col flex-row sm:gap-4 gap-6 px-6 lg:py-0 py-6">
        {data.map(({ src, name, href }) => (
          <div key={name} className="flex gap-4 items-center group">
            <img
              src={src}
              className="size-[5vh] object-cover rounded-full shadow-[2px_2px_5px_white] group-hover:shadow-[2px_2px_5px_#60b3d1]"
            />

            <div className="sm:flex flex-col gap-1 hidden">
              <div className="h-[1.5px] bg-white" />
              <a href={href} className="text-[#f2f2f2] text-[25px]">
                {name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
