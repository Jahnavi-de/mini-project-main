'use client'

import Link from 'next/link'
import { ArrowLeft, TrendingDown, AlertCircle, CheckCircle2 } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const wasteData = [
  { date: 'Mon', waste: 45, target: 30 },
  { date: 'Tue', waste: 38, target: 30 },
  { date: 'Wed', waste: 52, target: 30 },
  { date: 'Thu', waste: 41, target: 30 },
  { date: 'Fri', waste: 58, target: 30 },
  { date: 'Sat', waste: 35, target: 30 },
  { date: 'Sun', waste: 28, target: 30 },
]

const mealWasteData = [
  { meal: 'Breakfast', waste: 12 },
  { meal: 'Lunch', waste: 28 },
  { meal: 'Dinner', waste: 22 },
  { meal: 'Snacks', waste: 8 },
]

export default function DashboardPage() {
  const totalWaste = wasteData.reduce((sum, item) => sum + item.waste, 0)
  const avgWaste = (totalWaste / wasteData.length).toFixed(1)
  const totalCost = Math.round(totalWaste * 25)

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="p-2 hover:bg-white rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Weekly waste management analytics and insights</p>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-emerald-500">
            <p className="text-gray-600 text-sm font-medium mb-2">Total Weekly Waste</p>
            <p className="text-3xl font-bold text-gray-900">{totalWaste} kg</p>
            <p className="text-emerald-600 text-sm mt-2 flex items-center gap-1">
              <TrendingDown className="w-4 h-4" /> 12% from last week
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm font-medium mb-2">Average Daily Waste</p>
            <p className="text-3xl font-bold text-gray-900">{avgWaste} kg</p>
            <p className="text-gray-500 text-sm mt-2">Target: 30 kg/day</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-amber-500">
            <p className="text-gray-600 text-sm font-medium mb-2">Estimated Cost</p>
            <p className="text-3xl font-bold text-gray-900">₹{totalCost}</p>
            <p className="text-amber-600 text-sm mt-2">₹25 per kg</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border-l-4 border-purple-500">
            <p className="text-gray-600 text-sm font-medium mb-2">Efficiency Score</p>
            <p className="text-3xl font-bold text-gray-900">78%</p>
            <p className="text-purple-600 text-sm mt-2">
              <CheckCircle2 className="w-4 h-4 inline mr-1" /> Good performance
            </p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Weekly Trend */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Weekly Waste Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={wasteData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="waste"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Actual Waste"
                  dot={{ fill: '#10b981', r: 5 }}
                  activeDot={{ r: 7 }}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#d1d5db"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Target"
                  dot={{ fill: '#d1d5db', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Waste by Meal Type */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Waste by Meal Type</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mealWasteData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="meal" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="waste" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts & Recommendations */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Alerts</h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900">High Waste on Friday</p>
                  <p className="text-red-700 text-sm">Waste exceeded target by 93%. Review menu planning.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-900">Lunch Waste Increasing</p>
                  <p className="text-yellow-700 text-sm">Lunch waste has increased by 25% over 2 weeks.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recommendations</h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-900">Optimize Portion Sizes</p>
                  <p className="text-emerald-700 text-sm">Reduce lunch portions by 10% to match actual consumption.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-900">Menu Diversification</p>
                  <p className="text-emerald-700 text-sm">Offer more menu variety on Fridays to increase consumption.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex justify-center">
          <Link href="/predict" className="px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-lg">
            Make New Prediction
          </Link>
        </div>
      </div>
    </main>
  )
}
