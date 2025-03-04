import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { getAllUsers, deleteUserById, logout } from "../api";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUserById(id);
      fetchUsers(); // Refresh the user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };


  useEffect(() => {
    fetchUsers();
    const interval = setInterval(fetchUsers, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

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
        {filteredUsers.map((user, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg relative"
          >
            <div className="text-gray-700">
              <h2 className="font-semibold text-lg">{user.name}</h2>
              <p className="text-sm text-gray-500">E-mail</p>
              <p className="mb-2">{user.email}</p>
              <p className="text-sm text-gray-500">Specialization</p>
              <p className="mb-2">{user.sector}</p>
              <p className="text-sm text-gray-500">Country</p>
              <p className="mb-4">{user.country}</p>
              <button
                onClick={() => handleDelete(user._id)}
                className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
