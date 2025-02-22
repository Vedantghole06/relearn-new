import { ChevronDown } from "lucide-react";

const BookContent = () => (
  <div className="min-h-min bg-gray-50 p-4 md:p-6">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">My Library</h1>

    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left py-3 px-4 font-medium text-gray-700">
              Type
            </th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">
              Name
            </th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">
              Items
            </th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">
              Owner
            </th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">
              Languages
            </th>
            <th className="text-left py-3 px-4 font-medium text-gray-700">
              <div className="flex items-center gap-1">
                Last Modified
                <ChevronDown className="w-4 h-4" />
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>

    <div className="mt-8 text-center">
      <p className="text-lg text-gray-700 mb-4">
        Let's get started by creating your first library question, block,
        template or collection. Click the New button to create it.
      </p>
      <p className="text-sm text-gray-600 italic">
        Advanced users: You can also drag and drop XLSForms here and they will
        be uploaded and converted to library items.
      </p>
    </div>
  </div>
);

export default BookContent;
