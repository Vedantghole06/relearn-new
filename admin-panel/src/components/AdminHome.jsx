import React, { useState } from "react";
import {
  Menu,
  X,
  User,
  FormInput,
  Users2Icon,
  BookTemplate,
  DatabaseIcon,
  DatabaseZapIcon,
  LogOut,
} from "lucide-react";
import UsersPage from "./UsersPage";
import Profile from "./Profile";
import CreateForm from "./CreateForm";
import FormDataPage from "./FormDataPage";
import UserFormDataPage from "./UserFormDatapage";
import LogoutConfirmationModal from "./LogoutConfirmationModal";
import { useNavigate } from "react-router-dom";
import { logout } from "../api";

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("profile");
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("token");
      localStorage.removeItem("tokenTime");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const renderContent = () => {
    switch (activeContent) {
      case "profile":
        return <Profile />;
      case "user":
        return <UsersPage />;
      case "create-form":
        return <CreateForm />;
      case "templates":
        return <h2 className="text-2xl font-semibold">Templates List</h2>;
      case "form-data":
        return <FormDataPage />;
      case "users-form-data":
        return <UserFormDataPage />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`
          fixed md:sticky top-0 left-0 h-screen w-64 bg-white shadow-lg z-40 
          transform transition-transform duration-300 ease-in-out
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>

        {/* Sidebar Navigation */}
        <nav className="mt-4 px-4">
          <ul>
            <li
              className={`mb-4 flex items-center cursor-pointer p-2 rounded-lg ${
                activeContent === "profile"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveContent("profile")}
            >
              <User className="mr-2" size={20} /> Profile
            </li>
            <li
              className={`mb-4 flex items-center cursor-pointer p-2 rounded-lg ${
                activeContent === "user"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveContent("user")}
            >
              <Users2Icon className="mr-2" size={20} />
              Users
            </li>
            <li
              className={`mb-4 flex items-center cursor-pointer p-2 rounded-lg ${
                activeContent === "create-form"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveContent("create-form")}
            >
              <FormInput className="mr-2" size={20} /> Create Form
            </li>
            <li
              className={`mb-4 flex items-center cursor-pointer p-2 rounded-lg ${
                activeContent === "templates"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveContent("templates")}
            >
              <BookTemplate className="mr-2" size={20} /> Templates
            </li>
            <li
              className={`mb-4 flex items-center cursor-pointer p-2 rounded-lg ${
                activeContent === "form-data"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveContent("form-data")}
            >
              <DatabaseIcon className="mr-2" size={20} /> Form Data
            </li>
            <li
              className={`mb-4 flex items-center cursor-pointer p-2 rounded-lg ${
                activeContent === "users-form-data"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveContent("users-form-data")}
            >
              <DatabaseZapIcon className="mr-2" size={20} /> Users Form Data
            </li>
            <li
              className="mb-4 flex items-center cursor-pointer p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              onClick={() => setIsLogoutModalOpen(true)}
            >
              <LogOut className="mr-2" size={20} />
              <span className="text-blue-500">Logout</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation Bar */}
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-30">
          <div className="flex items-center justify-between p-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Title */}
            <h1 className="text-xl font-bold ml-2"></h1>

            {/* Profile Section */}
            <div className="flex items-center space-x-5">
              <div className="text-right"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 mt-16">{renderContent()}</div>
      </div>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <LogoutConfirmationModal
          onConfirm={handleLogout}
          onCancel={() => setIsLogoutModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminPanel;
