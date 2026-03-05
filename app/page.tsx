'use client'
import { useState } from 'react'
import Link from 'next/link'
import { BarChart3, TrendingDown, Users, Leaf } from 'lucide-react'

export default function Home() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerUser = async () => {
    if (!username || !email || !password) {
      alert("Please fill all fields")
      return
    }

    try {
      const res = await fetch("http://localhost/nextjsbackend/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })
    const data = await res.json()
      alert(JSON.stringify(data))

      // clear fields after success
      setUsername("")
      setEmail("")
      setPassword("")

    } catch (error) {
      console.error(error)
      alert("Server error")
    }
  }
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-emerald-600">FoodWaste AI</span>
          </div>
          <div className="flex gap-4">
            <Link href="/predict" className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Start Predicting
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
              Predict & Reduce Hostel Food Wastage
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Use AI-powered predictions to optimize meal planning, reduce waste, and save costs for your hostel mess operations.
            </p>
            <div className="flex gap-4">
              <Link href="/predict" className="px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-lg">
                Get Started
              </Link>
              <Link href="/dashboard" className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-lg">
                View Dashboard
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-8 text-white shadow-lg">
              <TrendingDown className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">45%</h3>
              <p className="text-emerald-100">Average Waste Reduction</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white shadow-lg">
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-blue-100">Active Hostels</p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-8 text-white shadow-lg">
              <BarChart3 className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">99%</h3>
              <p className="text-amber-100">Prediction Accuracy</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-8 text-white shadow-lg">
              <Leaf className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">₹2M+</h3>
              <p className="text-purple-100">Cost Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white border-t border-emerald-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Smart Prediction', desc: 'AI analyzes historical patterns to predict meal waste' },
              { title: 'Real-time Analytics', desc: 'Live dashboard with actionable insights' },
              { title: 'Cost Optimization', desc: 'Optimize purchasing to minimize losses' },
              { title: 'Easy Integration', desc: 'Simple setup with your existing systems' },
              { title: 'Detailed Reports', desc: 'Comprehensive reports and analytics' },
              { title: 'Mobile Friendly', desc: 'Access predictions on any device' },
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-emerald-50 to-transparent rounded-xl border border-emerald-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Reduce Waste?</h2>
          <p className="text-xl text-emerald-100 mb-8">Start making data-driven decisions today</p>
          <Link href="/predict" className="inline-block px-10 py-4 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-bold text-lg">
            Begin Prediction
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 FoodWaste AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
