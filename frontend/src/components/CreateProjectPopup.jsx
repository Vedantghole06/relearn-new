import React from "react";

const CreateProjectPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-10">
      <div className="bg-white  shadow-lg w-[600px]">
        {/* Header */}
        <div className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center ">
          <h2 className="text-lg font-semibold">
            Create project: Choose template
          </h2>
          <button onClick={onClose} className="text-white text-xl">
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-700">
            You have no templates. Go to Library and create some.
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end bg-gray-100 px-4 py-3 rounded-b-lg">
          <button
            className="px-4 py-2 text-blue-500    rounded-md mr-2 hover:bg-gray-300"
            onClick={onClose}
          >
            Back
          </button>
          <button
            className="px-4 py-2 text-white bg-blue-400 rounded-md cursor-not-allowed"
            disabled
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPopup;
