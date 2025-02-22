import { useState } from "react";
import {
    Search,
    X,
    Pencil,
    Upload,
    Link,
    LogOut,
    Settings,
    Paperclip,
} from "lucide-react";
import ClipboardContent from "../components/ClipboardContent";
import BookContent from "../components/BookContent";
import LeftSidebar from "../components/LeftSidebar";
import SecondarySidebar from "../components/SecondarySidebar";
import CreateProjectPopup from "../components/CreateProjectPopup";
import UploadXLSFormPopup from "../components/UploadXLSFormPopup";
import ImportXLSForm from "../components/ImportXLSForm";
import ProjectPopup from "../components/ProjectPopup";

export default function Home() {
    const [isTemplatePopupOpen, setIsTemplatePopupOpen] = useState(false);
    const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false);
    const [isCreateProjectPopupOpen, setIsCreateProjectPopupOpen] = useState(false);
    const [isBuildFromScratch, setIsBuildFromScratch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isFieldsOpen, setIsFieldsOpen] = useState(false);
    const [selectedFields, setSelectedFields] = useState([]);
    const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
    const [isNewProjectLibraryModalOpen, setIsNewProjectLibraryModalOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("clipboard");
    // const [isClipboardTemplateOpen, setIsClipboardTemplateOpen] = useState(false)

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleFieldSelection = (field) => {
        setSelectedFields((prev) =>
            prev.some((f) => f.name === field)
                ? prev.filter((f) => f.name !== field)
                : [...prev, { name: field, checked: true }]
        );
    };

    const renderContent = () => {
        switch (activeSection) {
            case "clipboard":
                return (
                    <ClipboardContent
                        isFilterOpen={isFilterOpen}
                        setIsFilterOpen={setIsFilterOpen}
                        isFieldsOpen={isFieldsOpen}
                        setIsFieldsOpen={setIsFieldsOpen}
                        selectedFields={selectedFields}
                        setSelectedFields={setSelectedFields}
                    />
                );
            case "book":
                return <BookContent />;
            default:
                return (
                    <ClipboardContent
                        isFilterOpen={isFilterOpen}
                        setIsFilterOpen={setIsFilterOpen}
                        isFieldsOpen={isFieldsOpen}
                        setIsFieldsOpen={setIsFieldsOpen}
                        selectedFields={selectedFields}
                        setSelectedFields={setSelectedFields}
                    />
                );
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-[#2F3542] text-white p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <img src="/placeholder.svg" alt="" className="h-8 w-8" />
                            <span className="text-2xl font-bold text-[#29ABE2] ml-2">
                                Relearn
                            </span>
                        </div>
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full md:w-[400px] bg-[#404857] rounded-md pl-10 pr-4 py-2 focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 relative">
                        <button
                            onClick={toggleProfile}
                            className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center hover:bg-purple-700 transition-colors"
                        >
                            <span className="text-white font-semibold">V</span>
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 top-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-700 z-50">
                                <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100">
                                    <Settings className="h-4 w-4 mr-2" />
                                    Account Settings
                                </button>
                                <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 text-red-600">
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div className="flex flex-1">
                {/* Left Sidebar */}
                <LeftSidebar
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />

                {/* Secondary Sidebar */}
                <SecondarySidebar
                    activeSection={activeSection}
                    setIsNewProjectModalOpen={setIsNewProjectModalOpen}
                    setIsNewProjectLibraryModalOpen={setIsNewProjectLibraryModalOpen}
                />

                {/* Main Content */}
                <main className="flex-1 overflow-x-hidden">{renderContent()}</main>
            </div>

            {/* Modals */}
            {isNewProjectModalOpen && (
                <div className="fixed inset-0 bg-gray-300 bg-opacity-95 flex items-start justify-center pt-16 z-50">
                    <div className="bg-white rounded-lg w-full max-w-2xl mx-4">
                        <div className="flex items-center bg-blue-400 justify-between p-6 border-b">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Create project: Choose a source
                            </h2>
                            <button
                                onClick={() => setIsNewProjectModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6">
                            <p className="text-gray-600 mb-8">
                                Choose one of the options below to continue. You will be
                                prompted to enter name and other details in further steps.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button
                                    className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex flex-col items-center"
                                    onClick={() => setIsBuildFromScratch(true)}
                                >
                                    <Pencil className="w-8 h-8 text-gray-600 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-700">
                                        Build from scratch
                                    </h3>
                                </button>
                                {isBuildFromScratch && <ProjectPopup onClose={() => (setIsBuildFromScratch(false))} />}

                                <button
                                    className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex flex-col items-center"
                                    onClick={() => setIsTemplatePopupOpen(true)}
                                >
                                    <span className="w-8 h-8 bg-gray-600 text-white flex items-center justify-center font-bold rounded mb-4">
                                        T
                                    </span>
                                    <h3 className="text-lg font-medium text-gray-700">
                                        Use a template
                                    </h3>
                                </button>

                                {isTemplatePopupOpen && (
                                    <CreateProjectPopup
                                        onClose={() => setIsTemplatePopupOpen(false)}
                                    />
                                )}

                                {/* Upload Button */}
                                <button
                                    className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex flex-col items-center"
                                    onClick={() => setIsUploadPopupOpen(true)}
                                >
                                    <Upload className="w-8 h-8 text-gray-600 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-700">
                                        Upload an XLSForm
                                    </h3>
                                </button>

                                {isUploadPopupOpen && (
                                    <UploadXLSFormPopup
                                        onClose={() => setIsUploadPopupOpen(false)}
                                    />
                                )}
                                <button
                                    className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex flex-col items-center"
                                    onClick={() => setIsCreateProjectPopupOpen(true)}
                                >
                                    <Link className="w-8 h-8 text-gray-600 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-700">
                                        Import an XLSForm via URL
                                    </h3>
                                </button>
                                {isCreateProjectPopupOpen && (
                                    <ImportXLSForm
                                        onClose={() => setIsCreateProjectPopupOpen(false)}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isNewProjectLibraryModalOpen && (
                <div className="fixed inset-0 bg-gray-300 bg-opacity-95 flex items-start justify-center pt-16 z-50">
                    <div className="bg-white rounded-lg w-full max-w-2xl mx-4">
                        <div className="flex items-center bg-blue-400 justify-between p-6 border-b">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                Create project: Choose a source
                            </h2>
                            <button
                                onClick={() => setIsNewProjectLibraryModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6">
                            <p className="text-gray-600 mb-8">
                                Choose one of the options below to continue. You will be
                                prompted to enter name and other details in further steps.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex flex-col items-center">
                                    <Paperclip className="w-8 h-8 text-gray-600 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-700">
                                        Question Block
                                    </h3>
                                </button>

                                <button className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex flex-col items-center">
                                    <button className="w-8 h-8 bg-gray-600 text-white flex items-center justify-center font-bold rounded mb-4">
                                        T
                                    </button>
                                    <h3 className="text-lg font-medium text-gray-700">
                                        Template
                                    </h3>
                                </button>

                                <button className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex flex-col items-center">
                                    <Upload className="w-8 h-8 text-gray-600 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-700">Upload</h3>
                                </button>

                                <button className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left flex flex-col items-center">
                                    <Link className="w-8 h-8 text-gray-600 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-700">
                                        Collections
                                    </h3>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Filter Popup */}
            {isFilterOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-95 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Filter</h3>
                            <button
                                onClick={() => setIsFilterOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Filter by
                                </label>
                                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                    <option>Select field</option>
                                    <option>Project Name</option>
                                    <option>Description</option>
                                    <option>Status</option>
                                    <option>Owner</option>
                                    <option>Date Modified</option>
                                    <option>Date Deployed</option>
                                    <option>Sector</option>
                                    <option>Country</option>
                                    <option>Languages</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Condition
                                </label>
                                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                    <option>Select condition</option>
                                    <option>Contains</option>
                                    <option>Does not contain</option>
                                    <option>Ends with</option>
                                    <option>Is</option>
                                    <option>Is not</option>
                                    <option>Starts with</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Value
                                </label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                    placeholder="Enter value"
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                                    Reset
                                </button>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Fields Popup */}
            {isFieldsOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-95 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Select Fields</h3>
                            <button
                                onClick={() => setIsFieldsOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Project Name",
                                "Description",
                                "Status",
                                "Owner",
                                "Date Modified",
                                "Date Deployed",
                                "Sector",
                                "Country",
                                "Languages",
                            ].map((field) => (
                                <div key={field} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedFields.some((f) => f.name === field)}
                                        onChange={() => handleFieldSelection(field)}
                                        className="rounded border-gray-300"
                                    />
                                    <span className="ml-2">{field}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end space-x-4 mt-6">
                            <button className="px-4 py-2 text-red-600 bg-red-100 hover:bg-red-200 rounded-md">
                                Reset
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
