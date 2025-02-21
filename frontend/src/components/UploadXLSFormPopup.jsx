import React from "react";

const UploadXLSFormPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-10">
      <div className="bg-white  shadow-lg w-[600px]">
        {/* Header */}
        <div className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center ">
          <h2 className="text-lg font-semibold">
            Create project: Upload XLSForm
          </h2>
          <button onClick={onClose} className="text-white text-xl">
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            Import an XLSForm from your computer.
          </p>

          {/* Drag and Drop Area */}
          <div className="border-2 border-dashed border-blue-400 bg-gray-100  p-10 flex flex-col items-center justify-center text-gray-600 cursor-pointer hover:bg-gray-200 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732220.png"
              alt="XLS Icon"
              className="w-12 h-12 mb-2"
            />
            <p className="text-sm">
              Drag and drop the XLSForm file here or click to browse
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end bg-gray-100 px-4 py-3 rounded-b-lg">
          <button
            onClick={onClose}
            className="px-4 py-2 text-blue-500 bg-gray-200 rounded-md"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadXLSFormPopup;
