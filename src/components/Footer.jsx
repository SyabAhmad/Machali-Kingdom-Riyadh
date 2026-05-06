import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Machali Kingdom</h3>
            <p className="text-gray-300">Authentic Mangalorean & Seafood Experience in Riyadh</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-white transition">Menu</Link></li>
              <li><Link to="/order" className="text-gray-300 hover:text-white transition">Order</Link></li>
              <li><Link to="/location" className="text-gray-300 hover:text-white transition">Location</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+966 54 312 6968</li>
              <li>Al Malaz, Riyadh</li>
              <li>12 PM – 1:30 AM</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">WhatsApp</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white transition">TikTok</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Machali Kingdom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer