export default function CircleImage({
  imageUrl = "",
  sideImages = [],
  className = "",
}) {
  return (
    <div
      className={`lg:order-2 ${
        sideImages.length !== 0 && "pl-[10%] my-8"
      } ${className}`}
    >
      <div
        className={`relative w-full aspect-square mx-auto shadow-2xl rounded-full`}
      >
        <div
          className={`flex items-center justify-center w-full h-full bg-primary rounded-full overflow-hidden`}
        >
          <div className="flex items-center justify-center w-[92%] h-[92%] border-[24px] border-secondary border-b-transparent rotate-45 rounded-full m-auto">
            <div className="flex items-center justify-center w-[90%] h-[90%] border-[14px] border-backround border-t-transparent rounded-full m-auto">
              <div className="w-[96%] h-[96%] flex justify-center items-center overflow-hidden rounded-full border-4 -rotate-45 border-backround bg-background">
                <img
                  className="w-full h-full object-cover"
                  src={imageUrl}
                  alt="security photo"
                />
              </div>
            </div>
          </div>
        </div>
        {sideImages.length === 2 && (
          <>
            <div className="absolute -left-[10%] bottom-[42%] w-[45%] h-[45%] flex justify-center items-center overflow-hidden rounded-full border-4 border-backround shadow-2xl bg-background">
              <img
                className="w-full h-full object-cover"
                src={sideImages[0]}
                alt="security photo"
              />
            </div>
            <div className="absolute -left-[7%] top-[47%] w-[40%] h-[40%] flex justify-center items-center overflow-hidden rounded-full border-4 border-backround shadow-2xl bg-background">
              <img
                className="w-full h-full object-cover"
                src={sideImages[1]}
                alt="security photo"
              />
            </div>
          </>
        )}
        {sideImages.length === 3 && (
          <>
            <div className="absolute -left-[4%] top-0 w-[45%] h-[45%] flex justify-center items-center overflow-hidden rounded-full border-4 border-backround shadow-2xl bg-background">
              <img
                className="w-full h-full object-cover"
                src={sideImages[0]}
                alt="security photo"
              />
            </div>
            <div className="absolute -left-[8%] top-1/2 w-[40%] h-[40%] -translate-y-1/2 flex justify-center items-center overflow-hidden rounded-full border-4 border-backround shadow-2xl bg-background">
              <img
                className="w-full h-full object-cover"
                src={sideImages[1]}
                alt="security photo"
              />
            </div>
            <div className="absolute left-0 bottom-[5%] w-[35%] h-[35%] flex justify-center items-center overflow-hidden rounded-full border-4 border-backround shadow-2xl bg-background">
              <img
                className="w-full h-full object-cover"
                src={sideImages[2]}
                alt="security photo"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
