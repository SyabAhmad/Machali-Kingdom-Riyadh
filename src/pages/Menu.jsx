import { useState } from 'react'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('fish')

  const menuData = {
    fish: [
      { name: "King Fish Tawa Fry", price: 28, description: "Fresh kingfish marinated in traditional spices and fried to perfection", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&q=80" },
      { name: "Tawa Fish", price: 26, description: "Classic Mangalorean style fish fry with coconut and curry leaves", image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80" },
      { name: "Prawns Ghee Roast", price: 32, description: "Juicy prawns roasted in ghee with authentic spices", image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=600&q=80" },
      { name: "Crab Ghee Roast", price: 35, description: "Fresh crab cooked in rich ghee and spices", image: "https://images.unsplash.com/photo-1559742811-822873691df8?w=600&q=80" }
    ],
    thali: [
      { name: "White Rice Thali", price: 18, description: "Complete meal with rice, sambar, curd, and 3 side dishes", image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e9?w=600&q=80" },
      { name: "Fish Thali", price: 22, description: "White rice thali with added fish curry and fried fish", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80" }
    ],
    bbq: [
      { name: "Mexican Alfaham", price: 22, description: "Grilled fish with Mexican spices and salsa", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80" },
      { name: "Peri-Peri Alfaham", price: 22, description: "Spicy peri-peri grilled fish with garlic butter", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" }
    ],
    southIndian: [
      { name: "Neer Dosa", price: 10, description: "Thin, delicate rice crepes served with coconut chutney", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=80" },
      { name: "Idli", price: 8, description: "Steamed rice cakes with sambar and chutney", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80" }
    ],
    snacks: [
      { name: "Pani Puri", price: 12, description: "Crispy puris filled with spicy water and tamarind chutney", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80" },
      { name: "Dahi Puri", price: 12, description: "Crispy puris filled with yogurt, tamarind chutney, and spices", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80" }
    ],
    drinks: [
      { name: "Fresh Juice", price: 8, description: "Seasonal fresh juice of the day", image: "https://images.unsplash.com/photo-1622543764370-2f7a3b1a1aa4?w=600&q=80" },
      { name: "Falooda", price: 10, description: "Traditional Indian dessert drink with noodles and rose syrup", image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&q=80" }
    ]
  }

  const categories = [
    { id: 'fish', name: 'Fish', emoji: '🐟' },
    { id: 'thali', name: 'Thali & Meals', emoji: '🍛' },
    { id: 'bbq', name: 'BBQ / Grills', emoji: '🍢' },
    { id: 'southIndian', name: 'South Indian', emoji: '🥘' },
    { id: 'snacks', name: 'Chaat / Snacks', emoji: '🥟' },
    { id: 'drinks', name: 'Drinks', emoji: '🥤' }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative h-80 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-[#25D366]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl text-gray-400">Authentic Mangalorean seafood & South Indian specialties</p>
          </div>
        </div>
      </section>

      <section className="sticky top-[72px] bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 z-10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-3 pb-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2.5 px-5 py-2.5 rounded-lg whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? 'bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-lg">{cat.emoji}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData[activeCategory]?.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#111111] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group border border-white/5"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <span className="text-2xl font-bold text-[#25D366]">{item.price} SAR</span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                  
                  <button
                    onClick={() => {}}
                    className="w-full bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu