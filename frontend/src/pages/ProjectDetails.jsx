import { useState } from 'react';
import Summary from './Summary';
import FormPage from './FormPage';
import DataPage from './DataPage';
import SettingsPage from './SettingPage';

const ProjectDashboard = () => {
    const [activePage, setActivePage] = useState('SUMMARY');

    // Render the active page based on state
    const renderPage = () => {
        switch (activePage) {
            case 'SUMMARY':
                return <Summary />;
            case 'FORM':
                return <FormPage />;
            case 'DATA':
                return <DataPage />;
            case 'SETTINGS':
                return <SettingsPage />;
            default:
                return <Summary />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-6xl mx-auto">
                {/* Navigation Tabs */}
                <nav className="flex border-b mb-6 overflow-x-auto">
                    {['SUMMARY', 'FORM', 'DATA', 'SETTINGS'].map((page) => (
                        <button
                            key={page}
                            onClick={() => setActivePage(page)}
                            className={`px-6 py-2 whitespace-nowrap ${activePage === page
                                ? 'text-blue-500 border-b-2 border-blue-500'
                                : 'text-gray-600'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </nav>

                {/* Page Content */}
                {renderPage()}
            </div>
        </div>
    );
};

export default ProjectDashboard;