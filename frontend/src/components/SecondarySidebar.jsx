import { Rocket, FileText, Archive } from "lucide-react"
import { Link } from "react-router-dom"

const SecondarySidebar = ({ activeSection, setIsNewProjectModalOpen, setIsNewProjectLibraryModalOpen, }) => {
    const renderContent = () => {
        switch (activeSection) {
            // case "clipboard":
            //     return (
            //         <>
            //             <button
            //                 onClick={() => setIsNewProjectModalOpen(true)}
            //                 className="w-full bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-400 transition-colors"
            //             >
            //                 NEW
            //             </button>
            //             <nav className="space-y-1">
            //                 <Link to ="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            //                     <Rocket className="h-5 w-5 text-gray-500" />
            //                     <span>Deployed</span>
            //                     <span className="ml-auto bg-gray-200 rounded-full px-2.5 py-0.5 text-sm">1</span>
            //                 </Link>
            //                 <Link to ="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            //                     <FileText className="h-5 w-5 text-gray-500" />
            //                     <span>Draft</span>
            //                     <span className="ml-auto bg-gray-200 rounded-full px-2.5 py-0.5 text-sm">0</span>
            //                 </Link>
            //                 <Link to ="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            //                     <Archive className="h-5 w-5 text-gray-500" />
            //                     <span>Archived</span>
            //                     <span className="ml-auto bg-gray-200 rounded-full px-2.5 py-0.5 text-sm">0</span>
            //                 </Link>
            //             </nav>
            //         </>
            //     )

            case "book":
                return (
                    <>
                        <button
                            onClick={() => setIsNewProjectLibraryModalOpen(true)}
                            className="w-full bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-400 transition-colors"
                        >
                            NEW
                        </button>
                        <nav className="space-y-1">
                            <Link to="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <Rocket className="h-5 w-5 text-gray-500" />
                                <span>My Library</span>
                                <span className="ml-auto bg-gray-200 rounded-full px-2.5 py-0.5 text-sm">1</span>
                            </Link>
                            <Link to="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <FileText className="h-5 w-5 text-gray-500" />
                                <span>Public Library</span>
                                <span className="ml-auto bg-gray-200 rounded-full px-2.5 py-0.5 text-sm">0</span>
                            </Link>
                        </nav>
                    </>
                )
            default:
                return (
                    <>
                        <button
                            onClick={() => setIsNewProjectModalOpen(true)}
                            className="w-full bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-400 transition-colors"
                        >
                            NEW
                        </button>
                        <nav className="space-y-1">
                            <Link to="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <Rocket className="h-5 w-5 text-gray-500" />
                                <span>Deployed</span>
                                <span className="ml-auto bg-gray-200 rounded-full px-2.5 py-0.5 text-sm">1</span>
                            </Link>
                            <Link to="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <FileText className="h-5 w-5 text-gray-500" />
                                <span>Draft</span>
                                <span className="ml-auto bg-gray-200 rounded-full px-2.5 py-0.5 text-sm">0</span>
                            </Link>
                            <Link to="#" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                                <Archive className="h-5 w-5 text-gray-500" />
                                <span>Archived</span>
                                <span className="ml-auto bg-gray-200 rounded-full px-2.5 py-0.5 text-sm">0</span>
                            </Link>
                        </nav>
                    </>
                )
        }
    }

    return (
        <aside className="w-60 bg-gray-50 border-r border-gray-300 shadow-xl hidden md:block">
            <div className="p-4 space-y-6">{renderContent()}</div>
        </aside>
    )
}

export default SecondarySidebar

