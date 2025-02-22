import React, { useState } from "react";

const UploadLib = ({ onClose }) => {
  const [isTemplate, setIsTemplate] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
      <div className="bg-white shadow-lg w-[600px]">
        {/* Header */}
        <div className=" bg-blue-400 text-white px-6 py-4 flex justify-between items-center ">
          <h2 className="text-lg font-semibold">
            Create Project: Upload XLSForm
          </h2>
          <button
            onClick={onClose}
            className="text-white text-2xl hover:opacity-80"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            Import an XLSForm from your computer.
          </p>

          {/* Drag and Drop Area */}
          <div className="border-2 border-dashed border-blue-400 bg-gray-100 p-10 flex flex-col items-center justify-center text-gray-600 cursor-pointer hover:bg-gray-200 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/724/724933.png"
              alt="XLS Icon"
              className="w-12 h-12 mb-2"
            />
            <p className="text-sm text-center">
              Drag and drop the XLSForm file here or click to browse
            </p>
          </div>

          {/* Checkbox */}
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="uploadTemplate"
              checked={isTemplate}
              onChange={() => setIsTemplate(!isTemplate)}
              className="mr-2 w-4 h-4 cursor-pointer accent-blue-500"
            />
            <label
              htmlFor="uploadTemplate"
              className="text-gray-700 text-sm cursor-pointer"
            >
              Upload as template
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Note that this will be ignored when uploading a collection file.{" "}
            <a href="#" className="text-blue-500 underline hover:text-blue-600">
              Learn more
            </a>
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end px-4 py-4 ">
          <button
            onClick={onClose}
            className="px-4 py-2 text-blue-500 bg-gray-200 rounded-md hover:bg-gray-300 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadLib;
