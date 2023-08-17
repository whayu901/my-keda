import React, { memo } from "react";

interface ModalGeneralProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const ModalGeneral: React.FC<ModalGeneralProps> = (props) => {
  if (props.isOpen === false) {
    return null;
  }

  return (
    <div
      id="modal"
      className="fixed top-0 left-0 w-full h-full p-8 overflow-auto"
    >
      <div className="flex justify-center">
        <div className="p-4 bg-white w-1/2 rounded-md">
          <div>
            <p className="text-lg font-semibold text-slate-600">Pop Up</p>
          </div>

          <div className="border-b-[1px] border-stone-500 my-3" />

          <div className="text-lg font-base text-center text-slate-600">
            {props.message}
          </div>
          <button
            className="bg-primary w-full mt-4 py-2 rounded-lg text-white font-bold"
            onClick={props.onClose}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ModalGeneral);
