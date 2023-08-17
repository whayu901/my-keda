import React, { memo } from "react";

const Hero = () => {
  return (
    <section>
      <span className="absolute w-[50%] scale-150 md:scale-100 left-0 -translate-y-1/2 -translate-x-1/4">
        <svg
          data-testid="svg-element"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#56CFEA"
            d="M27.4,-37.2C37.9,-30.1,50.5,-25.3,59,-15.3C67.6,-5.3,72.2,9.8,67.7,21.5C63.3,33.3,49.8,41.6,36.9,48.7C24.1,55.8,12.1,61.7,-3.6,66.6C-19.3,71.6,-38.5,75.6,-49.5,67.8C-60.4,60.1,-63.1,40.8,-61.4,24.9C-59.7,9.1,-53.7,-3.2,-47.4,-13.2C-41.1,-23.2,-34.6,-30.9,-26.6,-38.8C-18.7,-46.7,-9.3,-54.9,-0.4,-54.3C8.5,-53.7,16.9,-44.3,27.4,-37.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </span>
      <div className="container pt-36">
        <div className="flex flex-wrap">
          <div className="md:w-1/2" />
          <div className="md:w-1/2 pt-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laudantium officiis laborum minus necessitatibus nihil ipsa, dolor
            ut dolorum. Asperiores, quisquam debitis voluptatibus ab aspernatur
            assumenda maiores cum nulla adipisci?
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center flex-wrap">
        <div className="flex flex-col w-full md:w-1/2 md:pl-[90px] mt-5">
          <span className="italic flex justify-center md:justify-normal">
            "Execepeteur sint occaecat cupidatat non proident"
          </span>
          <div className="flex justify-center md:justify-normal">
            <img src="data.png" alt="data" className="h-36 md:h-64 w-auto" />
          </div>
        </div>

        <div className="md:w-1/2 hidden md:block md:-right-5">
          <img src="magicPattern.png" alt="magic pattern" />
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
