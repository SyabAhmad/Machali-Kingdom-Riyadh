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
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Order Now</h1>
          <p className="text-xl text-gray-200">Order directly via WhatsApp – no waiting, no apps</p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition ${
                  activeCategory === cat.id 
                    ? 'bg-[#1a1a1a] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Select Your Items</h2>
              <div className="space-y-6">
                {menuData[activeCategory]?.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{item.name}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <p className="text-2xl font-bold text-[#1a1a1a]">{item.price} SAR</p>
                      </div>
                      <button
                        onClick={() => addToOrder(item)}
                        className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#20bd5a] transition"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Your Order</h2>
              
              {orderList.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <p>No items added yet. Browse the menu to add items.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {orderList.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b pb-4">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-gray-500">{item.price} SAR each</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromOrder(item.name)}
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                          >
                            −
                          </button>
                          <span className="font-semibold w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => addToOrder(item)}
                            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-6 mb-6">
                    <div className="flex justify-between text-2xl font-bold">
                      <span>Total</span>
                      <span>{getOrderTotal()} SAR</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={openWhatsApp}
                    className="w-full bg-[#25D366] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#20bd5a] transition"
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