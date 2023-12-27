import { FC } from "react";

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  isError?: boolean
}


export const Modal: FC<ModalProps> = ({ isOpen, onClose, isError }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div
              className="relative bg-white rounded-lg p-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={onClose}
                >
                  &times;
                </button>
              </div>
              <div className="mt-4">
                <p>{isError ? "something went wrong" : "Success"}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
