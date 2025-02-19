import { useState } from "react"
import { Search, Settings, LogOut } from "lucide-react"

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen)
  }

  return (
    <header className="bg-[#2F3542] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="" className="h-8 w-8" />
            <span className="text-2xl font-bold text-[#29ABE2] ml-2">Relearn</span>
          </div>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-[400px] bg-[#404857] rounded-md pl-10 pr-4 py-2 focus:outline-none"
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
  )
}

