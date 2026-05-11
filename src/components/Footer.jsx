import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] border border-gray-700 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-sm">MK</span>
              </div>
              <h3 className="text-2xl font-bold">Machali Kingdom</h3>
            </div>
            <p className="text-gray-300 mb-6">Authentic Mangalorean & Seafood Experience in Riyadh</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.06c0 2.255 1.579 4.133 3.677 4.562-.679.595-1.515 1.032-2.437 1.218-.701-.752-1.555-1.218-2.528-1.305-.665.988-1.512 1.819-2.518 2.43-.596-.062-1.17-.17-1.722-.318v.085c0 3.144 2.08 5.805 4.795 6.419-1.074.292-2.226.442-3.418.442-.255 0-.502-.018-.742-.046 1.442.919 3.16 1.442 5.032 1.442 6.04 0 9.342-5.032 9.342-9.342 0-.142-.003-.283-.008-.422.652-.464 1.219-1.051 1.672-1.726-.613.272-1.268.422-1.948.431z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1-.455-1-1.109 0-.654.393-1.109 1-1.109s1 .455 1 1.109c0 .654-.393 1.109-1 1.109zm1 6h-2v-6h2v6z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1-.455-1-1.109 0-.654.393-1.109 1-1.109s1 .455 1 1.109c0 .654-.393 1.109-1 1.109zm1 6h-2v-6h2v6z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-white transition duration-300">Menu</Link></li>
              <li><Link to="/order" className="text-gray-300 hover:text-white transition duration-300">Order</Link></li>
              <li><Link to="/location" className="text-gray-300 hover:text-white transition duration-300">Location</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-400 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-gray-300">+966 54 312 6968</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-400 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-gray-300">Al Malaz, Riyadh</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-400 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-gray-300">12 PM – 1:30 AM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.06c0 2.255 1.579 4.133 3.677 4.562-.679.595-1.515 1.032-2.437 1.218-.701-.752-1.555-1.218-2.528-1.305-.665.988-1.512 1.819-2.518 2.43-.596-.062-1.17-.17-1.722-.318v.085c0 3.144 2.08 5.805 4.795 6.419-1.074.292-2.226.442-3.418.442-.255 0-.502-.018-.742-.046 1.442.919 3.16 1.442 5.032 1.442 6.04 0 9.342-5.032 9.342-9.342 0-.142-.003-.283-.008-.422.652-.464 1.219-1.051 1.672-1.726-.613.272-1.268.422-1.948.431z"/>
                </svg>
                <span className="text-gray-300">Instagram</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.06c0 2.255 1.579 4.133 3.677 4.562-.679.595-1.515 1.032-2.437 1.218-.701-.752-1.555-1.218-2.528-1.305-.665.988-1.512 1.819-2.518 2.43-.596-.062-1.17-.17-1.722-.318v.085c0 3.144 2.08 5.805 4.795 6.419-1.074.292-2.226.442-3.418.442-.255 0-.502-.018-.742-.046 1.442.919 3.16 1.442 5.032 1.442 6.04 0 9.342-5.032 9.342-9.342 0-.142-.003-.283-.008-.422.652-.464 1.219-1.051 1.672-1.726-.613.272-1.268.422-1.948.431z"/>
                </svg>
                <span className="text-gray-300">TikTok</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1-.455-1-1.109 0-.654.393-1.109 1-1.109s1 .455 1 1.109c0 .654-.393 1.109-1 1.109zm1 6h-2v-6h2v6z"/>
                </svg>
                <span className="text-gray-300">WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Machali Kingdom. All rights reserved. Crafted with authenticity in Riyadh.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer