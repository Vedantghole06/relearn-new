import { useState } from "react";

const patients = [
  "Vijay Pawar",
  "Rahul Sharma",
  "Amit Desai",
  "Suresh Patil",
  "Pooja Verma",
  "Neha Joshi",
  "Ramesh Gupta",
  "Anjali Mehta",
  "Deepak Singh",
  "Kiran Rao",
  "Manoj Thakur",
  "Sunita Yadav",
  "Rajesh Kulkarni",
  "Meena Nair",
  "Arun Kumar",
  "Shweta Shah",
  "Govind Iyer",
  "Preeti Saxena",
  "Nikhil Bansal",
  "Komal Tiwari",
];

export default function UserFormDataPage() {
  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filteredPatients = patients.filter((patient) =>
    patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 p-4 md:p-6 md:fixed md:inset-15 md:min-h-screen md:ml-[30vh] md:overflow-hidden">
      <h1 className="text-2xl font-bold mb-4 md:ml-4 text-center md:text-left">
        User Form Data
      </h1>
      <div className="flex flex-col md:flex-row  gap-4">
        {/* Patient List */}
        <div className="bg-white shadow-lg p-4 md:ml-4 rounded-lg w-full md:w-1/4 md:h-[80vh] overflow-hidden">
          <h2 className="text-lg font-semibold mb-2 text-center md:text-left">
            Patient Data
          </h2>
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border rounded mb-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="space-y-2 max-h-[200px] md:max-h-screen overflow-y-auto">
            {filteredPatients.map((patient, index) => (
              <div
                key={index}
                className={`p-2 border-b cursor-pointer hover:bg-gray-200 ${
                  selectedPatient === patient ? "bg-gray-300" : ""
                }`}
                onClick={() => setSelectedPatient(patient)}
              >
                {patient}
              </div>
            ))}
          </div>
        </div>
        {/* Patient Details */}
        <div className="bg-white shadow-lg p-4 rounded-lg w-full min-h-[200px] md:flex-1">
          {selectedPatient ? (
            <div>
              <h2 className="text-lg font-semibold mb-2">Patient Details</h2>
              <p className="text-gray-700">Name: {selectedPatient}</p>
              <p className="text-gray-600">Additional details go here...</p>
            </div>
          ) : (
            <p className="text-gray-500 text-center md:text-left">
              Select a patient to view details
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
