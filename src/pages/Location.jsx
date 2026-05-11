function Location() {
  return (
    <div className="min-h-screen">
      <section className="relative h-80 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-[#25D366]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Visit Us</h1>
            <p className="text-xl text-gray-400">Authentic Mangalorean seafood in the heart of Riyadh</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Machali Kingdom</h2>
              <p className="text-xl text-gray-400 mb-8">Al Malaz, Riyadh</p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-[#111111] rounded-2xl flex items-center justify-center text-2xl mr-6 border border-white/10">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-gray-400">+966 54 312 6968</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-[#111111] rounded-2xl flex items-center justify-center text-2xl mr-6 border border-white/10">
                    🕐
                  </div>
                  <div>
                    <p className="font-semibold text-white">Hours</p>
                    <p className="text-gray-400">12 PM – 1:30 AM (Daily)</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-[#111111] rounded-2xl flex items-center justify-center text-2xl mr-6 border border-white/10">
                    ⭐
                  </div>
                  <div>
                    <p className="font-semibold text-white">Rating</p>
                    <p className="text-gray-400">4.8 (900+ reviews)</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="tel:+966543126968"
                  className="bg-[#111111] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1a1a1a] transition-all duration-300 border border-white/10 flex-1 text-center"
                >
                  Call Now
                </a>
                <a 
                  href="https://wa.me/966543126968"
                  target="_blank"
                  className="bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 flex-1 text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            
            <div className="bg-[#111111] rounded-2xl shadow-lg p-6 border border-white/5">
              <div className="h-80 rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.730780025336!2d46.70554241414958!3d24.71877558448091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f3a4a0b9a8a81%3A0x8c1f5c8f5d5c5c5c!2sMachali%20Kingdom%20Riyadh!5e0!3m2!1sen!2ssaudiarabia!4v1715687123456!5m2!1sen!2ssaudiarabia" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-400">Al Malaz, Riyadh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-400">900+ satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0a] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-white/5">
              <div className="flex items-center mb-4">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-400 mb-6">"The best seafood in Riyadh! The King Fish Tawa Fry is absolutely amazing. Will definitely come back."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#20bd5a] rounded-full flex items-center justify-center text-white font-bold">S</div>
                <div className="ml-4">
                  <p className="font-semibold text-white">Samar</p>
                  <p className="text-gray-500">Family Visit</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0a0a0a] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-white/5">
              <div className="flex items-center mb-4">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-400 mb-6">"Great variety of dishes and authentic flavors. The Pani Puri was the best I've had outside India!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div className="ml-4">
                  <p className="font-semibold text-white">Ahmed</p>
                  <p className="text-gray-500">Group Visit</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0a0a0a] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 border border-white/5">
              <div className="flex items-center mb-4">
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-400 mb-6">"Perfect for family gatherings. The Fish Thali is generous and delicious. Service is excellent too."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">R</div>
                <div className="ml-4">
                  <p className="font-semibold text-white">Rahul</p>
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