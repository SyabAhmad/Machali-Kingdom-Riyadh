import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#1a1a1a]">Machali Kingdom</h1>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#1a1a1a] transition">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-[#1a1a1a] transition">Menu</Link>
            <Link to="/order" className="text-gray-700 hover:text-[#1a1a1a] transition">Order</Link>
            <Link to="/location" className="text-gray-700 hover:text-[#1a1a1a] transition">Location</Link>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-[#1a1a1a]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header