import { useState } from 'react';
import { Globe } from 'lucide-react';

const FormPage = () => {
    const [allowAnonymous, setAllowAnonymous] = useState(false);

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
            <h2 className="text-gray-700 text-lg">Current Version</h2>
            {/* Header Section */}
            <div className="flex items-center bg-white justify-between border-b p-4">
                <div className="flex items-center gap-2">
                    <span className="text-gray-700">v1</span>
                    <span className="text-gray-500">Last Modified: Last Wednesday at 1:35 PM - 5 questions</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                    REDEPLOY
                </button>
            </div>

            {/* Languages Section */}
            <div className="flex items-center justify-between bg-white p-4">
                <div className="space-y-1">
                    <h2 className="text-gray-700 font-medium">Languages:</h2>
                    <p className="text-gray-500">This project has no languages defined yet</p>
                </div>
                <Globe className="text-blue-500 w-6 h-6" />
            </div>

            {/* Collect Data Section */}
            <div className="space-y-4">
                <h2 className="text-gray-700 text-lg">Collect data</h2>

                {/* Dropdown and Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="relative flex-grow">
                        <select className="w-full appearance-none bg-white border rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Online-Offline (multiple submission)</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-blue-500 bg-blue-100 rounded-md transition-colors">Copy</button>
                        <button className="px-4 py-2 text-blue-500 bg-blue-100 rounded-md transition-colors">Open</button>
                    </div>
                </div>

                <p className="text-gray-600">
                    This allows online and offline submissions and is the best option for collecting data in the field.
                </p>

                {/* Toggle Switch */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setAllowAnonymous(!allowAnonymous)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${allowAnonymous ? 'bg-teal-400' : 'bg-gray-200'}`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${allowAnonymous ? 'translate-x-6' : 'translate-x-1'}`}
                        />
                    </button>
                    <span className="text-gray-700">
                        Allow submissions to this form without a username and password
                    </span>
                    <button className="text-blue-500 hover:text-blue-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormPage;
