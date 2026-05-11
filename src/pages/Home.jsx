import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#25D366]/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-16">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10">
                <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-gray-300">Now Serving in Riyadh</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                <span className="block text-white">Authentic</span>
                <span className="block bg-gradient-to-r from-[#25D366] via-[#34d399] to-[#25D366] bg-clip-text text-transparent">
                  Mangalorean
                </span>
                <span className="block text-white">Seafood</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed max-w-lg">
                Taste the authentic flavors of coastal Karnataka — fresh catch, traditional spices, recipes from the heart of Mangalore.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link 
                  to="/menu" 
                  className="group px-7 py-3.5 bg-white text-[#0a0a0a] rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-white/10"
                >
                  <span className="flex items-center justify-center gap-2">
                    View Menu
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
                
                <Link 
                  to="/order" 
                  className="group px-7 py-3.5 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/30 flex items-center justify-center gap-2.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.163-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.406-1.681-1.775-.2-.372-.022-.57.151-.74.151-.15.332-.391.497-.586.166-.195.221-.33.331-.549.11-.22.055-.411-.027-.576-.082-.166-.739-1.768-1.008-2.413-.262-.628-.529-.542-.72-.533-.184.009-.396.008-.608.008-.211 0-.554.08-.843.389-.29.309-1.23 1.203-1.23 2.935 0 1.732 1.258 3.405 1.431 3.64.174.235 2.478 3.782 6.014 5.306 2.495 1.076 3.002 1.288 4.025 1.226.817-.05 1.734-.708 2.093-1.392.359-.684.359-1.269.252-1.457-.107-.188-.396-.297-.693-.446z"/>
                  </svg>
                  Order on WhatsApp
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Customer" className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] object-cover" />
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Customer" className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] object-cover" />
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="Customer" className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] object-cover" />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" alt="Customer" className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] object-cover" />
                  </div>
                  <span className="text-sm text-gray-400">900+ happy customers</span>
                </div>
                
                <div className="w-px h-6 bg-white/10"></div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="font-semibold text-white">4.8</span>
                  <span className="text-gray-500 text-sm">(Google)</span>
                </div>
              </div>
            </div>

            <div className={`relative hidden lg:block transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                  <img 
                    src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&q=80"
                    alt="Mangalorean Seafood Platter" 
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-40 h-40 bg-gradient-to-br from-[#25D366]/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-2xl"></div>

                <div className="absolute -top-6 -left-6 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#25D366] to-[#20bd5a] rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">100% Halal</p>
                      <p className="text-xs text-gray-400">Certified</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-sm">🐟</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Fresh Catch</p>
                      <p className="text-xs text-gray-400">Daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </section>

      {/* Discount Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#25D366] font-semibold text-sm uppercase tracking-wider">Special Offers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Limited Time Deals</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Don't miss out on our exclusive offers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-[#111111] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#25D366]/10 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-[#25D366]/20 to-transparent rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🐟</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">15% OFF</h3>
                <p className="text-lg text-gray-400 mb-2">All Fish Dishes</p>
                <p className="text-gray-500 text-sm">Valid until May 31, 2024</p>
              </div>
            </div>
            
            <div className="group relative bg-[#111111] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🚚</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Free Delivery</h3>
                <p className="text-lg text-gray-400 mb-2">Orders over 100 SAR</p>
                <p className="text-gray-500 text-sm">Within Al Malaz area</p>
              </div>
            </div>
            
            <div className="group relative bg-[#111111] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-white/10 to-transparent rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Family Bundle</h3>
                <p className="text-lg text-gray-400 mb-2">4 Dishes + Drinks</p>
                <p className="text-gray-500 text-sm">Only 180 SAR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#25D366] font-semibold text-sm uppercase tracking-wider">Our Signature</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Famous Dishes</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Crafted with authentic Mangalorean spices and fresh seafood</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">King Fish Tawa Fry</h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">Fresh kingfish marinated in traditional Mangalorean spices and fried to perfection. Served with coconut chutney and lemon wedges.</p>
              <p className="text-3xl font-bold text-[#25D366] mb-8">28 SAR</p>
              <div>
                <Link 
                  to="/menu" 
                  className="inline-flex items-center text-white font-semibold hover:text-[#25D366] group"
                >
                  View All Fish Dishes
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&q=80" alt="King Fish Tawa Fry" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-r from-[#25D366]/20 to-transparent rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#25D366] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Trusted by 900+ Customers</h2>
            <p className="text-xl text-gray-400">Authentic flavors, exceptional service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#111111] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/5">
              <div className="flex items-center mb-4">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">"The best seafood in Riyadh! The King Fish Tawa Fry is absolutely amazing. Will definitely come back."</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Samar" className="w-12 h-12 rounded-full object-cover" />
                <div className="ml-4">
                  <p className="font-semibold text-white">Samar</p>
                  <p className="text-gray-500 text-sm">Family Visit</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#111111] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/5">
              <div className="flex items-center mb-4">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">"Great variety of dishes and authentic flavors. The Pani Puri was the best I've had outside India!"</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="Ahmed" className="w-12 h-12 rounded-full object-cover" />
                <div className="ml-4">
                  <p className="font-semibold text-white">Ahmed</p>
                  <p className="text-gray-500 text-sm">Group Visit</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#111111] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/5">
              <div className="flex items-center mb-4">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">"Perfect for family gatherings. The Fish Thali is generous and delicious. Service is excellent too."</p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" alt="Rahul" className="w-12 h-12 rounded-full object-cover" />
                <div className="ml-4">
                  <p className="font-semibold text-white">Rahul</p>
                  <p className="text-gray-500 text-sm">Family Visit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home