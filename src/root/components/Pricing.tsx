import React, { memo } from "react";
import { AiOutlineCheck } from "react-icons/ai";

import { TierData } from "../mocks/TierData";

const Pricing = () => {
  return (
    <section id="pricing" className="pt-36 h-screen">
      <div className="container">
        <h1 className="text-center w-full font-bold text-xl">
          Pilih Tier Yang Ingin Anda Gunakan
        </h1>

        <div className="pt-9 flex gap-5 justify-center">
          {TierData.map((item, index) => (
            <div
              key={index}
              className="border border-neutral-300 rounded-lg p-4 w-full relative md:hover:scale-105 transition-transform"
            >
              {item.isFavorite && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
                  <span className="bg-orange-400 rounded-lg px-9 py-2 text-white font-bold">
                    Paling Laris
                  </span>
                </div>
              )}
              <div className="pt-5">
                <span className="text-center text-xl font-bold flex justify-center">
                  {item.name}
                </span>
                <div className="pt-5">
                  <span className="text-center font-bold text-xl flex justify-center">
                    <span className="font-medium text-base">Rp. </span>
                    {item.pricing}
                  </span>
                </div>

                <div className="flex justify-center py-5">
                  <button
                    className={`${
                      item.isFavorite ? "bg-orange-500" : "bg-cyan-300"
                    } text-white px-9 py-2 rounded-lg`}
                  >
                    Pilih Paket
                  </button>
                </div>
              </div>

              <div className="pt-5">
                <div className="pb-5">
                  <span className="font-bold">Fitur Unggulan</span>
                </div>
                {item.feature.map((feature, ix) => (
                  <div className="flex gap-3 items-center">
                    <AiOutlineCheck color="#00B090" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Pricing);
