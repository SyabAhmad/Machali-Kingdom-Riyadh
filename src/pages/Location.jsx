function Location() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Visit Us</h1>
          <p className="text-xl text-gray-200">Authentic Mangalorean seafood in the heart of Riyadh</p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6">Machali Kingdom</h2>
              <p className="text-xl text-gray-600 mb-8">Al Malaz, Riyadh</p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white mr-4">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">Phone</p>
                    <p className="text-gray-600">+966 54 312 6968</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white mr-4">
                    🕐
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">Hours</p>
                    <p className="text-gray-600">12 PM – 1:30 AM (Daily)</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white mr-4">
                    ⭐
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">Rating</p>
                    <p className="text-gray-600">4.3 (900+ reviews)</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="tel:+966543126968"
                  className="bg-white text-[#1a1a1a] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition flex-1 text-center"
                >
                  Call Now
                </a>
                <a 
                  href="https://wa.me/966543126968"
                  target="_blank"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#20bd5a] transition flex-1 text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.730780025336!2d46.70554241414958!3d24.71877558448091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f3a4a0b9a8a81%3A0x8c1f5c8f5d5c5c5c!2sMachali%20Kingdom%20Riyadh!5e0!3m2!1sen!2ssaudiarabia!4v1715687123456!5m2!1sen!2ssaudiarabia" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">900+ satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-6">"The best seafood in Riyadh! The King Fish Tawa Fry is absolutely amazing. Will definitely come back."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">S</div>
                <div className="ml-4">
                  <p className="font-semibold">Samar</p>
                  <p className="text-gray-500">Family Visit</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-6">"Great variety of dishes and authentic flavors. The Pani Puri was the best I've had outside India!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div className="ml-4">
                  <p className="font-semibold">Ahmed</p>
                  <p className="text-gray-500">Group Visit</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-6">"Perfect for family gatherings. The Fish Thali is generous and delicious. Service is excellent too."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">R</div>
                <div className="ml-4">
                  <p className="font-semibold">Rahul</p>
                  <p className="text-gray-500">Family Visit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Location