import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Machali Kingdom</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Authentic Mangalorean & Seafood Experience in Riyadh</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="bg-white text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              View Menu
            </Link>
            <Link to="/order" className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#20bd5a] transition">
              Order Now
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center text-white">
            <span className="text-4xl">⭐</span>
            <span className="text-2xl font-bold ml-2">4.3</span>
            <span className="text-gray-200 ml-2">(900+ reviews)</span>
          </div>
        </div>
      </section>

      {/* Discount Section */}
      <section className="py-16 bg-gradient-to-r from-[#f8f8f8] to-[#f0f0f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Special Offers</h2>
            <p className="text-xl text-gray-600">Limited time discounts on our most popular dishes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">15% OFF</h3>
              <p className="text-gray-600 mb-4">All Fish Dishes</p>
              <p className="text-gray-500 text-sm">Valid until May 31, 2024</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Free Delivery</h3>
              <p className="text-gray-600 mb-4">Orders over 100 SAR</p>
              <p className="text-gray-500 text-sm">Within Al Malaz area</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Family Bundle</h3>
              <p className="text-gray-600 mb-4">4 Dishes + Drinks</p>
              <p className="text-gray-500 text-sm">Only 180 SAR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Our Signature Dishes</h2>
            <p className="text-xl text-gray-600">Crafted with authentic Mangalorean spices and fresh seafood</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">King Fish Tawa Fry</h3>
              <p className="text-gray-600 text-lg mb-6">Fresh kingfish marinated in traditional spices and fried to perfection. Served with coconut chutney and lemon.</p>
              <p className="text-2xl font-bold text-[#1a1a1a]">28 SAR</p>
            </div>
            <div className="relative">
              <img src="/assets/hero.png" alt="King Fish Tawa Fry" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home