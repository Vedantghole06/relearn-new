import { useState, useEffect } from "react";
import { getForms } from "../api";

export default function FormDataPage() {
  const [search, setSearch] = useState("");
  const [selectedForm, setSelectedForm] = useState(null);
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      const data = await getForms();
      setForms(data);
    };
    fetchForms();
  }, []);

  const filteredForms = forms.filter((form) =>
    form.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 p-4 md:p-6 md:fixed md:inset-15 md:min-h-screen md:ml-[30vh] md:overflow-hidden">
      <h1 className="text-2xl font-bold mb-4 md:ml-4 text-center md:text-left">
        Form Data
      </h1>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Form List */}
        <div className="bg-white shadow-lg p-4 md:ml-4 rounded-lg w-full md:w-1/4 md:h-[80vh] overflow-hidden">
          <h2 className="text-lg font-semibold mb-2 text-center md:text-left">
            Forms
          </h2>
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border rounded mb-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="space-y-2 max-h-[200px] md:max-h-screen overflow-y-auto">
            {filteredForms.map((form, index) => (
              <div
                key={index}
                className={`p-2 border-b cursor-pointer hover:bg-gray-200 ${
                  selectedForm === form ? "bg-gray-300" : ""
                }`}
                onClick={() => setSelectedForm(form)}
              >
                {form.title}
              </div>
            ))}
          </div>
        </div>
        {/* Form Details */}
        <div className="bg-white shadow-lg p-4 rounded-lg w-full min-h-[200px] md:flex-1">
          {selectedForm ? (
            <div>
              <h2 className="text-lg font-semibold mb-2">Form Details</h2>
              <p className="text-gray-700">Title: {selectedForm.title}</p>
              <p className="text-gray-600">
                Description: {selectedForm.description}
              </p>
              {selectedForm.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mt-4">
                  <h3 className="text-md font-semibold">{section.title}</h3>
                  {section.questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="ml-4 mt-2">
                      <p className="text-gray-700">{question.text}</p>
                      {question.options.length > 0 && (
                        <ul className="list-disc list-inside">
                          {question.options.map((option, optionIndex) => (
                            <li key={optionIndex} className="text-gray-600">
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center md:text-left">
              Select a form to view details
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
