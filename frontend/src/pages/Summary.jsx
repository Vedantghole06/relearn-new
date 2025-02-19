import {
    FileText, Edit, Eye, Table, BarChart2, Download, Map, Users, Image
} from 'lucide-react';

const Summary = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
            {/* Project Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-gray-700 font-medium mb-4">Project Information</h2>

                <div className="mb-6">
                    <h3 className="text-sm text-gray-500 mb-1">Description</h3>
                    <p className="text-gray-700">demo description</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                        <h3 className="text-sm text-gray-500 mb-1">Status</h3>
                        <span className="inline-flex items-center text-blue-500">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            deployed
                        </span>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500 mb-1">Questions</h3>
                        <p>5</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500 mb-1">Owner</h3>
                        <p>me</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                        <h3 className="text-sm text-gray-500 mb-1">Last modified</h3>
                        <p>Last Wednesday at 1:35 PM</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500 mb-1">Last deployed</h3>
                        <p>February 5, 2025</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500 mb-1">Latest submission</h3>
                        <p>February 5, 2025</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-sm text-gray-500 mb-1">Sector</h3>
                        <p>Health Services / Public Health</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500 mb-1">Country</h3>
                        <p>India</p>
                    </div>
                </div>
            </div>

            {/* Submissions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-gray-700 font-medium mb-4">Submissions</h2>

                <div className="flex space-x-4 mb-8 overflow-x-auto">
                    <button className="px-4 py-2 bg-blue-50 text-blue-500 rounded-full text-sm whitespace-nowrap">Past 7 days</button>
                    <button className="px-4 py-2 text-gray-600 text-sm whitespace-nowrap">Past 31 days</button>
                    <button className="px-4 py-2 text-gray-600 text-sm whitespace-nowrap">Past 3 months</button>
                    <button className="px-4 py-2 text-gray-600 text-sm whitespace-nowrap">Past 12 months</button>
                </div>

                <div className="text-center py-8 text-gray-500">
                    No chart data available for current period.
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <h3 className="text-4xl font-light mb-2">0</h3>
                        <p className="text-gray-500">Feb 8, 2025 – Today</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-light mb-2 text-blue-500">1</h3>
                        <p className="text-gray-500">Total</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-gray-700 font-medium mb-4">Quick Links</h2>
                <div className="space-y-4">
                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-50 rounded">
                        <FileText className="w-5 h-5 mr-3 text-gray-400" />
                        <span>Collect data</span>
                    </button>
                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-50 rounded">
                        <Users className="w-5 h-5 mr-3 text-gray-400" />
                        <span>Share project</span>
                    </button>
                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-50 rounded">
                        <Edit className="w-5 h-5 mr-3 text-gray-400" />
                        <span>Edit form</span>
                    </button>
                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-50 rounded">
                        <Eye className="w-5 h-5 mr-3 text-gray-400" />
                        <span>Preview form</span>
                    </button>
                </div>
            </div>

            {/* Data */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-gray-700 font-medium mb-4">Data</h2>
                <div className="space-y-4">
                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-50 rounded">
                        <Table className="w-5 h-5 mr-3 text-gray-400" />
                        <span>Table</span>
                    </button>
                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-50 rounded">
                        <BarChart2 className="w-5 h-5 mr-3 text-gray-400" />
                        <span>Reports</span>
                    </button>
                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-50 rounded">
                        <Image className="w-5 h-5 mr-3 text-gray-400" />
                        <span>Gallery</span>
                    </button>
                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-50 rounded">
                        <Download className="w-5 h-5 mr-3 text-gray-400" />
                        <span>Downloads</span>
                    </button>
                    <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-50 rounded">
                        <Map className="w-5 h-5 mr-3 text-gray-400" />
                        <span>Map</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Summary
