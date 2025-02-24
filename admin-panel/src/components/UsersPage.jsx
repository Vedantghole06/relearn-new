import React, { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const usersData = [
  {
    name: "Vedant Ghole",
    email: "vedantghole@gm.com",
    specialization: "Gynaecologist",
    country: "India",
  },
  {
    name: "Tanushree Mendhe",
    email: "tanushree@gm.com",
    specialization: "Psychologist",
    country: "India",
  },
  {
    name: "Yogesh Mishra",
    email: "yogesh@gmail.com",
    specialization: "Neurologist",
    country: "India",
  },
  {
    name: "Dhanesh Mate",
    email: "dm@gm.com",
    specialization: "Gynaecologist",
    country: "India",
  },
  {
    name: "Shruti Kamble",
    email: "tanu@gm.com",
    specialization: "Psychologist",
    country: "India",
  },
  {
    name: "Divyanshu Mishra",
    email: "md@gm.com",
    specialization: "Neurologist",
    country: "India",
  },
  {
    name: "Crish Garvin",
    email: "crish3@gm.com",
    specialization: "Gynaecologist",
    country: "India",
  },
  {
    name: "Kartik Lakudkar",
    email: "kar@gm.com",
    specialization: "Psychologist",
    country: "India",
  },
  {
    name: "Mansi App",
    email: "appbana@gm.com",
    specialization: "Neurologist",
    country: "India",
  },
];

const UsersPage = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(usersData);

  const handleDelete = (email) => {
    setUsers(users.filter((user) => user.email !== email));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Users</h1>

      {/* Search Bar */}
      <div className="mb-4 flex items-center bg-white shadow-sm rounded-lg px-4 py-2 w-80">
        <Search className="text-gray-500 mr-2" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((user, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg relative"
            >
              <div className="text-gray-700">
                <h2 className="font-semibold text-lg">{user.name}</h2>
                <p className="text-sm text-gray-500">E-mail</p>
                <p className="mb-2">{user.email}</p>
                <p className="text-sm text-gray-500">Specialization</p>
                <p className="mb-2">{user.specialization}</p>
                <p className="text-sm text-gray-500">Country</p>
                <p className="mb-4">{user.country}</p>
              </div>
              <button
                onClick={() => handleDelete(user.email)}
                className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 gap-2">
        <button className="p-2 border rounded-lg text-gray-500 hover:bg-gray-200">
          <ChevronLeft size={20} />
        </button>
        <span>Page 1 of 10</span>
        <button className="p-2 border rounded-lg text-gray-500 hover:bg-gray-200">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
