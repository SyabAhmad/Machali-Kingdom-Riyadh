import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Header() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/order', label: 'Order' },
    { path: '/location', label: 'Location' }
  ]

  const isHomePage = location.pathname === '/'

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled || !isHomePage
        ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl py-3 border-b border-white/5' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shadow-xl border border-white/10">
                <span className="text-white font-bold text-xl">MK</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366]/20 to-[#20bd5a]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Machali Kingdom
              </h1>
              <p className="text-xs text-gray-400 tracking-wide uppercase">
                Authentic Mangalorean
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              to="/order"
              className="ml-2 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:from-[#22c55e] hover:to-[#16a34a] transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.163-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.406-1.681-1.775-.2-.372-.022-.57.151-.74.151-.15.332-.391.497-.586.166-.195.221-.33.331-.549.11-.22.055-.411-.027-.576-.082-.166-.739-1.768-1.008-2.413-.262-.628-.529-.542-.72-.533-.184.009-.396.008-.608.008-.211 0-.554.08-.843.389-.29.309-1.23 1.203-1.23 2.935 0 1.732 1.258 3.405 1.431 3.64.174.235 2.478 3.782 6.014 5.306 2.495 1.076 3.002 1.288 4.025 1.226.817-.05 1.734-.708 2.093-1.392.359-.684.359-1.269.252-1.457-.107-.188-.396-.297-.693-.446z"/>
              </svg>
              Order Now
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/98 backdrop-blur-xl shadow-2xl rounded-b-2xl py-4 px-4 animate-slideDown border-t border-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/order"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-3 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white text-center py-3 rounded-lg font-semibold text-sm"
            >
              Order Now
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header