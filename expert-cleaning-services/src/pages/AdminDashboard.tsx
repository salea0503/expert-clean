import { LayoutDashboard, Users, Calendar, Settings, RefreshCw, LogOut, Lock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<'partners' | 'attendance' | 'history'>('partners');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded check as requested
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const assignPartner = (partnerPhone: string, customerName: string, area: string, service: string) => {
    const mapLink = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(area);
    const message = `NAYA ORDER AAYA HAI\n\nCustomer: ${customerName}\nService: ${service}\nAddress: ${area}\n\nLocation Link: ${mapLink}\n\nChalte waqt batayein aur jaldi pahunchein!`;
    window.open(`https://wa.me/${partnerPhone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl w-full max-w-sm text-center border border-slate-100">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-emerald-800 mb-8 tracking-tight">Admin Login 👑</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Username (Admin Name)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            />
            <button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 mt-2">
              Login Karein
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-4 font-medium bg-red-50 py-2 rounded-lg">
                Galt Details! Phir se koshish karein.
              </p>
            )}
          </form>
          
          <div className="mt-6 pt-6 border-t border-slate-100">
            <Link to="/" className="text-sm text-slate-500 hover:text-emerald-700 font-medium transition-colors">
              &larr; Back to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex">
      {/* Sidebar */}
      <aside className="fixed w-64 h-screen bg-emerald-900 text-white flex flex-col shadow-xl z-20">
        <div className="p-6 border-b border-emerald-800">
          <h2 className="text-2xl font-bold tracking-tight">Admin Panel</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-emerald-800 rounded-xl font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-800/50 rounded-xl font-medium transition-colors text-emerald-100">
            <Users className="w-5 h-5" />
            Partners
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-800/50 rounded-xl font-medium transition-colors text-emerald-100">
            <Calendar className="w-5 h-5" />
            Bookings
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-800/50 rounded-xl font-medium transition-colors text-emerald-100">
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </nav>
        <div className="p-4 border-t border-emerald-800 space-y-2">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 hover:bg-red-500/20 text-red-300 hover:text-red-200 rounded-xl font-medium transition-colors w-full text-left">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
          <Link to="/" className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-800/50 rounded-xl font-medium transition-colors text-emerald-100 w-full text-left">
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-slate-800">Welcome to Dashboard 📊</h1>
          <button className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm active:scale-95">
            <RefreshCw className="w-4 h-4" />
            Data Update Karein
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-slate-500 font-medium mb-2 text-sm uppercase tracking-wider">Total Orders</h3>
            <p className="text-4xl font-black text-emerald-700">25</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-slate-500 font-medium mb-2 text-sm uppercase tracking-wider">Active Partners</h3>
            <p className="text-4xl font-black text-emerald-700">12</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-slate-500 font-medium mb-2 text-sm uppercase tracking-wider">Aaj ki Kamai</h3>
            <p className="text-4xl font-black text-emerald-700">₹18,200</p>
          </div>
        </div>

        {/* Aaj ke Orders (Navigation ke saath) */}
        <div className="bg-white p-5 rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.05)] mb-8">
          <h3 className="text-[#2e7d32] text-xl font-bold mb-4">📅 Aaj ke Orders (Navigation ke saath)</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm min-w-[500px]">
              <thead>
                <tr className="bg-[#f1f8e9] text-[#1b5e20]">
                  <th className="p-3 text-left rounded-tl-lg">Customer</th>
                  <th className="p-3 text-left">Area</th>
                  <th className="p-3 text-center rounded-tr-lg">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 border-b border-[#eee] font-medium text-slate-800 align-top">Rahul Sharma</td>
                  <td className="p-3 border-b border-[#eee] text-slate-600 align-top">HSR Layout, Sec 2</td>
                  <td className="p-3 border-b border-[#eee] text-center align-top">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=HSR+Layout+Sector+2+Bangalore" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-[#4285F4] hover:bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-bold transition-colors shadow-sm"
                    >
                      📍 Rasta Dekhein
                    </a>

                    <div className="bg-[#e3f2fd] p-3 rounded-lg mt-3 border border-[#2196f3] text-left">
                      <p className="m-0 mb-2 text-[13px] font-bold text-[#0d47a1]">👷 Partner ko Duty Bhejein:</p>
                      <button 
                        onClick={() => assignPartner('919876543210', 'Rahul Sharma', 'HSR Layout, Sec 2', '2 BHK Deep Cleaning')}
                        className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none px-3 py-2 rounded-md cursor-pointer font-bold text-xs w-full transition-colors shadow-sm"
                      >
                        📲 WhatsApp Partner
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 border-b border-[#eee] font-medium text-slate-800 align-top">Vikas Gupta</td>
                  <td className="p-3 border-b border-[#eee] text-slate-600 align-top">Peenya Industrial Area</td>
                  <td className="p-3 border-b border-[#eee] text-center align-top">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Peenya+Industrial+Area+Bangalore" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-[#4285F4] hover:bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-bold transition-colors shadow-sm"
                    >
                      📍 Rasta Dekhein
                    </a>

                    <div className="bg-[#e3f2fd] p-3 rounded-lg mt-3 border border-[#2196f3] text-left">
                      <p className="m-0 mb-2 text-[13px] font-bold text-[#0d47a1]">👷 Partner ko Duty Bhejein:</p>
                      <button 
                        onClick={() => assignPartner('919876543210', 'Vikas Gupta', 'Peenya Industrial Area', '1 BHK Deep Cleaning')}
                        className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none px-3 py-2 rounded-md cursor-pointer font-bold text-xs w-full transition-colors shadow-sm"
                      >
                        📲 WhatsApp Partner
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex flex-wrap gap-3 mb-6 border-b border-slate-100 pb-6">
            <button
              onClick={() => setActiveTab('partners')}
              className={`px-5 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'partners' ? 'bg-emerald-700 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              <Users className="w-4 h-4" /> Partners
            </button>
            <button
              onClick={() => setActiveTab('attendance')}
              className={`px-5 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'attendance' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              <CheckCircle2 className="w-4 h-4" /> Attendance
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-5 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 ${activeTab === 'history' ? 'bg-orange-500 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              <Calendar className="w-4 h-4" /> Booking History
            </button>
          </div>
          
          {activeTab === 'partners' && (
            <div className="overflow-x-auto animate-in fade-in duration-300">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Active Partners (Bangalore)</h3>
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b-2 border-slate-100">
                    <th className="py-3 px-4 font-semibold text-slate-700 rounded-tl-lg">Name</th>
                    <th className="py-3 px-4 font-semibold text-slate-700">Area</th>
                    <th className="py-3 px-4 font-semibold text-slate-700 rounded-tr-lg">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-800">Rahul Kumar</td>
                    <td className="py-4 px-4 text-slate-600">HSR Layout</td>
                    <td className="py-4 px-4 text-slate-600">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-800">Vikram Singh</td>
                    <td className="py-4 px-4 text-slate-600">Whitefield</td>
                    <td className="py-4 px-4 text-slate-600">⭐⭐⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="overflow-x-auto animate-in fade-in duration-300">
              <h3 className="text-xl font-bold text-slate-800 mb-4">📅 Aaj ki Attendance (March 11, 2026)</h3>
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-blue-50 border-b-2 border-blue-100">
                    <th className="py-3 px-4 font-semibold text-blue-800 rounded-tl-lg">Partner</th>
                    <th className="py-3 px-4 font-semibold text-blue-800">Login Time</th>
                    <th className="py-3 px-4 font-semibold text-blue-800 rounded-tr-lg">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-800">Rahul Kumar</td>
                    <td className="py-4 px-4 text-slate-600">08:30 AM</td>
                    <td className="py-4 px-4 font-bold text-emerald-600">Present</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-800">Vikram Singh</td>
                    <td className="py-4 px-4 text-slate-600">09:15 AM</td>
                    <td className="py-4 px-4 font-bold text-emerald-600">Present</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-800">Sameer Khan</td>
                    <td className="py-4 px-4 text-slate-600">-</td>
                    <td className="py-4 px-4 font-bold text-red-600">Absent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="overflow-x-auto animate-in fade-in duration-300">
              <h3 className="text-xl font-bold text-slate-800 mb-4">📜 Pichle Orders (Completed)</h3>
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-orange-50 border-b-2 border-orange-100">
                    <th className="py-3 px-4 font-semibold text-orange-800 rounded-tl-lg">Date</th>
                    <th className="py-3 px-4 font-semibold text-orange-800">Customer</th>
                    <th className="py-3 px-4 font-semibold text-orange-800">Service</th>
                    <th className="py-3 px-4 font-semibold text-orange-800 rounded-tr-lg">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-800">10 March</td>
                    <td className="py-4 px-4 text-slate-600">Amit Sharma (Indiranagar)</td>
                    <td className="py-4 px-4 text-slate-600">2 BHK Deep Clean</td>
                    <td className="py-4 px-4 font-bold text-slate-800">₹5,599</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-800">09 March</td>
                    <td className="py-4 px-4 text-slate-600">Priya Patel (Koramangala)</td>
                    <td className="py-4 px-4 text-slate-600">Kitchen Clean</td>
                    <td className="py-4 px-4 font-bold text-slate-800">₹1,499</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-800">08 March</td>
                    <td className="py-4 px-4 text-slate-600">John D'souza (Whitefield)</td>
                    <td className="py-4 px-4 text-slate-600">Full Villa</td>
                    <td className="py-4 px-4 font-bold text-slate-800">₹8,999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
