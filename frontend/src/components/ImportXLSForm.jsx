import { useState } from "react";

const ImportXLSFormPopup = ({ onClose }) => {
  const [url, setUrl] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-10">
      <div className="bg-white rounded-lg shadow-lg w-[600px]">
        {/* Header */}
        <div className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center ">
          <h2 className="text-lg font-semibold">
            Create project: Import XLSForm
          </h2>
          <button onClick={onClose} className="text-white text-xl">
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <label className="block text-gray-700 mb-2">
            Enter a valid XLSForm URL in the field below.
          </label>
          <a
            href="#"
            className="text-blue-500 text-sm underline inline-block mb-3"
          >
            Having issues? See this help article.
          </a>
          <input
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="https://"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end bg-gray-100 px-4 py-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-blue-500  rounded-md mr-2"
          >
            Back
          </button>
          <button
            className={`px-4 py-2 text-white rounded-md ${
              url
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-blue-300 cursor-not-allowed"
            }`}
            disabled={!url}
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportXLSFormPopup;
