import { useState } from 'react'

function Order() {
  const [orderList, setOrderList] = useState([])
  const [showConfirmation, setShowConfirmation] = useState(false)

  const menuData = {
    fish: [
      { name: "King Fish Tawa Fry", price: 28, description: "Fresh kingfish marinated in traditional spices and fried to perfection" },
      { name: "Tawa Fish", price: 26, description: "Classic Mangalorean style fish fry with coconut and curry leaves" },
      { name: "Prawns Ghee Roast", price: 32, description: "Juicy prawns roasted in ghee with authentic spices" },
      { name: "Crab Ghee Roast", price: 35, description: "Fresh crab cooked in rich ghee and spices" }
    ],
    thali: [
      { name: "White Rice Thali", price: 18, description: "Complete meal with rice, sambar, curd, and 3 side dishes" },
      { name: "Fish Thali", price: 22, description: "White rice thali with added fish curry and fried fish" }
    ],
    bbq: [
      { name: "Mexican Alfaham", price: 22, description: "Grilled fish with Mexican spices and salsa" },
      { name: "Peri-Peri Alfaham", price: 22, description: "Spicy peri-peri grilled fish with garlic butter" }
    ],
    southIndian: [
      { name: "Neer Dosa", price: 10, description: "Thin, delicate rice crepes served with coconut chutney" },
      { name: "Idli", price: 8, description: "Steamed rice cakes with sambar and chutney" }
    ],
    snacks: [
      { name: "Pani Puri", price: 12, description: "Crispy puris filled with spicy water and tamarind chutney" },
      { name: "Dahi Puri", price: 12, description: "Crispy puris filled with yogurt, tamarind chutney, and spices" }
    ],
    drinks: [
      { name: "Fresh Juice", price: 8, description: "Seasonal fresh juice of the day" },
      { name: "Falooda", price: 10, description: "Traditional Indian dessert drink with noodles and rose syrup" }
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

  const [activeCategory, setActiveCategory] = useState('fish')

  const addToOrder = (item) => {
    const existing = orderList.find(o => o.name === item.name)
    if (existing) {
      setOrderList(orderList.map(o => 
        o.name === item.name ? { ...o, quantity: o.quantity + 1 } : o
      ))
    } else {
      setOrderList([...orderList, { ...item, quantity: 1 }])
    }
  }

  const removeFromOrder = (itemName) => {
    const existing = orderList.find(o => o.name === itemName)
    if (existing && existing.quantity > 1) {
      setOrderList(orderList.map(o => 
        o.name === itemName ? { ...o, quantity: o.quantity - 1 } : o
      ))
    } else {
      setOrderList(orderList.filter(o => o.name !== itemName))
    }
  }

  const getOrderTotal = () => {
    return orderList.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }

  const generateWhatsAppMessage = () => {
    if (orderList.length === 0) return ""
    let message = `Hi, I want to order:\n\n`
    orderList.forEach(item => {
      message += `• ${item.name} x${item.quantity}\n`
    })
    message += `\nTotal: ${getOrderTotal()} SAR\n\nName: \nLocation: \n\nPlease confirm.`
    return encodeURIComponent(message)
  }

  const openWhatsApp = () => {
    const phone = "+966543126968" // Removed spaces for WhatsApp
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen">
      <section className="relative h-80 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-[#25D366]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Order Now</h1>
            <p className="text-xl text-gray-400">Order directly via WhatsApp – no waiting, no apps</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Select Your Items</h2>
              <div className="space-y-4">
                {menuData[activeCategory]?.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#111111] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-white/5"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                        <p className="text-2xl font-bold text-[#25D366]">{item.price} SAR</p>
                      </div>
                      <button
                        onClick={() => addToOrder(item)}
                        className="bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#111111] rounded-2xl shadow-lg p-8 border border-white/5">
              <h2 className="text-3xl font-bold text-white mb-6">Your Order</h2>
              
              {orderList.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M12 22l-2-5h4l-2 5z" />
                  </svg>
                  <p>No items added yet. Browse the menu to add items.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {orderList.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-4">
                        <div>
                          <p className="font-medium text-white">{item.name}</p>
                          <p className="text-gray-500">{item.price} SAR each</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromOrder(item.name)}
                            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
                          >
                            −
                          </button>
                          <span className="font-semibold w-6 text-center text-white">{item.quantity}</span>
                          <button
                            onClick={() => addToOrder(item)}
                            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-white/10 pt-6 mb-6">
                    <div className="flex justify-between text-2xl font-bold">
                      <span className="text-white">Total</span>
                      <span className="text-[#25D366]">{getOrderTotal()} SAR</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={openWhatsApp}
                    className="w-full bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300"
                  >
                    Send Order via WhatsApp
                  </button>
                  
                  <p className="text-center text-gray-500 mt-4 text-sm">
                    Order directly via WhatsApp – no waiting, no apps
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Order