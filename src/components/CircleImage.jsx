export default function CircleImage({ imageUrl = "", sideImages = [] }) {
  return (
    <div className="lg:order-2 pl-[10%]">
      <div
        className={`relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] my-8 mx-auto shadow-2xl rounded-full`}
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
