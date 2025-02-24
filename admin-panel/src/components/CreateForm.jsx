import { useState } from "react";

const CreateForm = () => {
  const [sections, setSections] = useState([
    {
      id: Date.now(),
      title: "Untitled Section",
      questions: [
        {
          id: Date.now(),
          questionText: "",
          type: "Short Answer",
        },
      ],
    },
  ]);

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: Date.now(),
        title: "Untitled Section",
        questions: [
          {
            id: Date.now(),
            questionText: "",
            type: "Short Answer",
          },
        ],
      },
    ]);
  };

  const deleteSection = (sectionId) => {
    setSections(sections.filter((section) => section.id !== sectionId));
  };

  const addQuestion = (sectionId) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            questions: [
              ...section.questions,
              {
                id: Date.now(),
                questionText: "",
                type: "Short Answer",
              },
            ],
          };
        }
        return section;
      })
    );
  };

  const deleteQuestion = (sectionId, questionId) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            questions: section.questions.filter(
              (question) => question.id !== questionId
            ),
          };
        }
        return section;
      })
    );
  };

  return (
    <div className="admin-panel-content p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Create Your Form
          </h1>
          <p className="text-gray-600 mb-6">
            Design a form by adding sections and questions.
          </p>

          {/* Form Title */}
          <input
            type="text"
            placeholder="Enter Form Title"
            className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />

          {/* Form Description */}
          <textarea
            placeholder="Enter Form Description"
            className="w-full mb-6 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            rows="3"
          />

          {/* Add Section Button */}
          <button
            onClick={addSection}
            className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
          >
            <span className="mr-1">+</span> Add Section
          </button>

          {/* Sections */}
          {sections.map((section) => (
            <div
              key={section.id}
              className="mb-6 p-6 border border-gray-200 rounded-lg bg-gray-50"
            >
              <h2 className="text-lg font-semibold mb-4">{section.title}</h2>

              {/* Questions */}
              {section.questions.map((question) => (
                <div
                  key={question.id}
                  className="mb-4 p-4 bg-white rounded-md shadow"
                >
                  <div className="flex gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Enter Question"
                      className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                    <select className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                      <option>Short Answer</option>
                      <option>Long Answer</option>
                      <option>Multiple Choice</option>
                    </select>
                    <button
                      onClick={() => deleteQuestion(section.id, question.id)}
                      className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      title="Delete Question"
                    >
                      ×
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Your answer"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    disabled
                  />
                </div>
              ))}

              {/* Add Question Button */}
              <button
                onClick={() => addQuestion(section.id)}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
              >
                <span className="mr-1">+</span> Add Question
              </button>

              {/* Delete Section Button */}
              <button
                onClick={() => deleteSection(section.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete Section
              </button>
            </div>
          ))}

          {/* Save Form Button */}
          <button className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Save Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
