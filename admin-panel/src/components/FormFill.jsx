import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFormByLink, submitFormResponse } from "../api";

const FormFill = () => {
  const { link } = useParams();
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    const fetchForm = async () => {
      const data = await getFormByLink(link);
      setForm(data);
    };
    fetchForm();
  }, [link]);

  const handleChange = (questionId, value) => {
    console.log("Question ID:", questionId); // Log the question ID
    setResponses({
      ...responses,
      [questionId]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseData = {
      formLink: link,
      responses: Object.keys(responses).map((questionId) => ({
        questionId,
        answer: responses[questionId],
      })),
    };
    console.log("Submitting data:", responseData); // Log the data being submitted
    await submitFormResponse(responseData);
    alert("Form submitted successfully!");
  };

  if (!form) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          {form.title}
        </h1>
        <p className="text-gray-600 mb-8 text-center text-lg">
          {form.description}
        </p>
        <form onSubmit={handleSubmit}>
          {form.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>
              {section.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="mb-6">
                  <label className="block text-gray-700 mb-2">
                    {question.text}
                  </label>
                  {question.type === "Short Answer" && (
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      onChange={(e) =>
                        handleChange(question._id, e.target.value)
                      }
                    />
                  )}
                  {question.type === "Long Answer" && (
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      rows="4"
                      onChange={(e) =>
                        handleChange(question._id, e.target.value)
                      }
                    />
                  )}
                  {(question.type === "Multiple Choice" ||
                    question.type === "Checkbox") && (
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center">
                          <input
                            type={
                              question.type === "Multiple Choice"
                                ? "radio"
                                : "checkbox"
                            }
                            className="mr-2"
                            name={question._id}
                            value={option}
                            onChange={(e) =>
                              handleChange(question._id, e.target.value)
                            }
                          />
                          <label className="text-gray-700">{option}</label>
                        </div>
                      ))}
                    </div>
                  )}
                  {question.type === "Decimal" && (
                    <input
                      type="number"
                      step="0.01"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      onChange={(e) =>
                        handleChange(question._id, e.target.value)
                      }
                    />
                  )}
                  {question.type === "Number" && (
                    <input
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      onChange={(e) =>
                        handleChange(question._id, e.target.value)
                      }
                    />
                  )}
                  {question.type === "File" && (
                    <input
                      type="file"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      onChange={(e) =>
                        handleChange(question._id, e.target.files[0])
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 text-lg font-medium flex items-center justify-center gap-2 mb-8"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormFill;
