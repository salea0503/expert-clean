import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle, Sparkles, Star, ShieldCheck, Clock, Camera } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const [partnerName, setPartnerName] = useState("");
  const [partnerExp, setPartnerExp] = useState("Cleaning Expert");
  const [partnerFile, setPartnerFile] = useState<File | null>(null);

  const [bookingName, setBookingName] = useState("");
  const [bookingService, setBookingService] = useState("1 BHK Deep Clean (₹2,999)");
  const [bookingAddress, setBookingAddress] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingError, setBookingError] = useState(false);

  const whatsappNumber = "918822485417"; // Updated to actual number
  const whatsappMessage = encodeURIComponent("Mujhe Cleaning Service Book Karni Hai");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleBooking = () => {
    if (!bookingName || !bookingAddress) {
      setBookingError(true);
      return;
    }
    setBookingError(false);
    const message = `*NAYA ORDER*\n*Naam:* ${bookingName}\n*Area:* ${bookingAddress}\n*Service:* ${bookingService}\n---\n_Booking from Expert Clean Website_`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const partnerMessage = `Mujhe Partner Banna Hai`;
  const partnerWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(partnerMessage)}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200">
      {/* Header / Logo Section */}
      <header className="bg-white py-5 border-b-2 border-[#ddd] text-center font-sans">
        <div 
          className="w-40 h-40 mx-auto mb-4 rounded-full flex items-center justify-center relative border-4 border-white shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
          style={{ background: 'radial-gradient(circle, #2E7D32 0%, #006064 100%)' }}
        >
          <div className="absolute w-[150px] h-[150px] rounded-full border-[3px] border-[#D4AF37] opacity-50"></div>
          <div className="text-center z-10">
            <div className="text-white text-[50px] leading-none">🏠</div>
            <div 
              className="text-[#D4AF37] text-[20px] font-bold -mt-1"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            >
              ✨
            </div>
          </div>
        </div>

        <h1 className="m-0 text-[#1B5E20] text-[26px] font-extrabold tracking-tighter uppercase">
          Expert Clean
        </h1>
        
        <p className="my-1 text-[#006064] text-[13px] font-bold uppercase">
          BENGALURU | 8822485417
        </p>

        <p className="mt-2.5 text-[#555] text-[10px] font-semibold uppercase tracking-wider">
          Cleaning | Maintenance | Partner Model
        </p>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2070&q=80"
            alt="Clean kitchen"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="w-full max-w-md mx-auto px-4 relative z-10 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl text-center"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-2 tracking-tight">
              Ab Aapka Ghar Chamkega! ✨
            </h1>
            <p className="text-slate-500 text-sm font-medium mb-6">
              Bangalore's Trusted Deep Cleaning Services
            </p>

            <div className="text-left mb-6 space-y-2">
              <div className="flex justify-between items-center p-3 hover:bg-[#f1f8e9] rounded-xl transition-colors border-b border-slate-100 last:border-0">
                <div>
                  <div className="font-semibold text-slate-800 text-sm sm:text-base">🏠 1 BHK Full Deep Clean</div>
                  <div className="text-xs text-slate-500">1 Bed + 1 Hall + 1 Kitchen + 1 Bath</div>
                </div>
                <div className="font-extrabold text-emerald-700 text-base sm:text-lg">₹2,999</div>
              </div>

              <div className="flex justify-between items-center p-3 hover:bg-[#f1f8e9] rounded-xl transition-colors border-b border-slate-100 last:border-0">
                <div>
                  <div className="font-semibold text-slate-800 text-sm sm:text-base">🏢 2 BHK Full Deep Clean</div>
                  <div className="text-xs text-slate-500">2 Bed + 1 Hall + 1 Kitchen + 2 Bath</div>
                </div>
                <div className="font-extrabold text-emerald-700 text-base sm:text-lg">₹5,599</div>
              </div>

              <div className="flex justify-between items-center p-3 hover:bg-[#f1f8e9] rounded-xl transition-colors border-b border-slate-100 last:border-0">
                <div className="font-semibold text-slate-800 text-sm sm:text-base">🍳 Kitchen Deep Clean Only</div>
                <div className="font-extrabold text-emerald-700 text-base sm:text-lg">₹1,499</div>
              </div>

              <div className="flex justify-between items-center p-3 hover:bg-[#f1f8e9] rounded-xl transition-colors border-b border-slate-100 last:border-0">
                <div className="font-semibold text-slate-800 text-sm sm:text-base">🚿 Bathroom Sanitization</div>
                <div className="font-extrabold text-emerald-700 text-base sm:text-lg">₹599</div>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-2xl border-2 border-emerald-600 text-left shadow-lg shadow-emerald-900/5">
              <h2 className="text-emerald-800 text-center mt-0 text-xl font-bold mb-1">📅 Abhi Book Karein</h2>
              <p className="text-center text-sm text-slate-500 mb-5">Apni details bhariye, hum aapko turant call karenge.</p>

              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-1 block">Aapka Naam:</label>
                  <input 
                    type="text" 
                    placeholder="Apna naam likhein" 
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 mb-1 block">Service Chunein:</label>
                  <select 
                    value={bookingService}
                    onChange={(e) => setBookingService(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white"
                  >
                    <option>1 BHK Deep Clean (₹2,999)</option>
                    <option>2 BHK Deep Clean (₹5,599)</option>
                    <option>Kitchen Cleaning (₹1,499)</option>
                    <option>Bathroom Cleaning (₹599)</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 mb-1 block">Bangalore ka Area (Address):</label>
                  <input 
                    type="text" 
                    placeholder="HSR, Whitefield, etc." 
                    value={bookingAddress}
                    onChange={(e) => setBookingAddress(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 mb-1 block">Booking Date:</label>
                  <input 
                    type="date" 
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>

                {bookingError && (
                  <p className="text-red-500 text-sm font-medium mt-1">Kripya Naam aur Address bhariye!</p>
                )}

                <button 
                  onClick={handleBooking}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full font-bold text-lg cursor-pointer mt-2 shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-1"
                >
                  WhatsApp par Confirm Karein ✅
                </button>
                
                <p className="text-[12px] text-[#d32f2f] font-bold text-center mt-1">
                  📍 Tip: Booking ke baad WhatsApp par 'Location' button se apna ghar share karein.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center shadow-sm">
              <p className="font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
                <Camera className="w-5 h-5 text-blue-600" />
                Photo ya Video Upload Karein
              </p>
              
              <input 
                type="file" 
                accept="image/*, video/*" 
                id="fileInput" 
                className="hidden" 
                onChange={handleFileChange}
              />
              
              <label 
                htmlFor="fileInput" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold cursor-pointer inline-block text-sm transition-colors shadow-md shadow-blue-600/20"
              >
                File Chuniye (Photo/Video)
              </label>

              {selectedFile ? (
                <div className="mt-4 p-3 bg-emerald-100 text-emerald-800 rounded-xl text-sm font-medium border border-emerald-200 flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  File select ho gayi hai! ({selectedFile.name})
                </div>
              ) : (
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                  *Aap gallery se select kar sakte hain ya naya video record kar sakte hain.
                </p>
              )}
            </div>

            <p className="text-xs text-slate-400 mt-6 font-medium leading-relaxed">
              No Hidden Charges | Professional Equipment | Eco-Friendly<br/>
              <b className="text-slate-500">All Over Bangalore: HSR, Koramangala, Whitefield</b>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We offer a wide range of cleaning solutions tailored to your needs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Full Home Deep Cleaning",
                desc: "Intensive cleaning of every nook and corner of your house.",
                img: "https://images.unsplash.com/photo-1527515637-ed24050a4170?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Kitchen & Bathroom Cleaning",
                desc: "Removal of hard water stains, sanitization, and descaling.",
                img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Sofa & Carpet Shampooing",
                desc: "Deep shampooing and stain removal for your upholstery.",
                img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Move-in / Move-out Cleaning",
                desc: "Make your new or old home spotless before the big move.",
                img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <img src={service.img} alt={service.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.desc}</p>
                  <a href={whatsappUrl} className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1">
                    Book this <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Best Rates (Starting From)</h2>
            <p className="text-slate-600">Transparent pricing with no hidden charges.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-emerald-50 border-b border-emerald-100">
                  <th className="py-5 px-6 font-semibold text-emerald-800">Service Type</th>
                  <th className="py-5 px-6 font-semibold text-emerald-800 text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 text-slate-700 font-medium">1 BHK Full Deep Clean</td>
                  <td className="py-5 px-6 text-slate-900 font-bold text-right text-lg">₹2,999</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 text-slate-700 font-medium">2 BHK Full Deep Clean</td>
                  <td className="py-5 px-6 text-slate-900 font-bold text-right text-lg">₹5,599</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 text-slate-700 font-medium">Kitchen Deep Clean Only</td>
                  <td className="py-5 px-6 text-slate-900 font-bold text-right text-lg">₹1,499</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 text-slate-700 font-medium">Bathroom Sanitization</td>
                  <td className="py-5 px-6 text-slate-900 font-bold text-right text-lg">₹599</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Bangalore Trusts Us</h2>
              <p className="text-slate-400 mb-8 text-lg">
                We don't just clean; we care for your home. Our trained professionals use the best equipment to ensure a hygienic environment.
              </p>
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "Background Verified Staff", desc: "Every cleaner undergoes strict background checks." },
                  { icon: Sparkles, title: "Premium Products", desc: "We use safe, non-toxic, and highly effective cleaning agents." },
                  { icon: Clock, title: "On-Time Service", desc: "We value your time and always arrive as scheduled." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{feature.title}</h4>
                      <p className="text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1628177142898-93e46e646088?q=80&w=1000&auto=format&fit=crop" 
                alt="Professional cleaner" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="font-bold text-2xl">4.9/5</p>
                <p className="text-slate-500 text-sm">Based on 2,000+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-200">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">⭐ Hamare Customers Kya Kehte Hain</h2>
              <p className="text-slate-500 font-medium">Bangalore ke 500+ gharon ka bharosa</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  text: "Maine 2BHK deep cleaning karwayi thi. Team bahut hi professional thi aur kitchen toh bilkul naya jaisa chamak gaya! Highly recommended in HSR Layout.",
                  author: "Rajesh Sharma, HSR Layout"
                },
                {
                  text: "Baki apps se kaafi sasta aur achha kaam. 1 BHK ki safai bahut hi bariki se ki. Agli baar bhi yahin se book karungi.",
                  author: "Priya Das, Indiranagar"
                },
                {
                  text: "On time service! Bathroom ki tiles bilkul saaf ho gayi. Staff ka behaviour bhi bahut achha tha.",
                  author: "Ahmed, Peenya"
                }
              ].map((review, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-yellow-400"
                >
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-3 text-sm sm:text-base leading-relaxed">"{review.text}"</p>
                  <p className="font-bold text-emerald-800 text-xs sm:text-sm">
                    — {review.author}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10 pt-8 border-t border-slate-100">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Mera Review:")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:text-blue-700 font-bold text-sm sm:text-base transition-colors"
              >
                + Apna Review Likhein
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-24 bg-orange-50 border-t border-orange-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-orange-400 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-orange-600 mb-2 text-center">🤝 Hamare Partner Banein</h2>
              <p className="text-center text-slate-600 mb-8 font-medium">Bangalore mein hamare saath jud kar paise kamayein.</p>

              <div className="space-y-5 max-w-md mx-auto">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Aapka Naam:</label>
                  <input 
                    type="text" 
                    placeholder="Apna pura naam likhein" 
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Kaam ka Anubhav (Experience):</label>
                  <select 
                    value={partnerExp}
                    onChange={(e) => setPartnerExp(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                  >
                    <option>Cleaning Expert</option>
                    <option>Driver / Delivery</option>
                    <option>Electrician / Plumber</option>
                    <option>Naya (Fresher)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Aadhar Card / Photo Upload:</label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setPartnerFile(e.target.files[0]);
                      }
                    }}
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 transition-all cursor-pointer border border-slate-200 rounded-xl p-1"
                  />
                  {partnerFile && (
                    <p className="text-xs text-emerald-600 mt-2 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3 h-3" /> File select ho gayi hai! ({partnerFile.name})
                    </p>
                  )}
                </div>

                <p className="text-xs text-slate-500 text-center mt-4 leading-relaxed">
                  *Form bharne ke baad niche button dabayein aur WhatsApp par apni details bhejien.
                </p>

                <a 
                  href={partnerWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#ff9800] hover:bg-[#e65100] text-white px-6 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-1 mt-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  Details WhatsApp par Bhejein
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready for a spotless home?</h2>
          <p className="text-emerald-100 text-xl mb-10">
            Join thousands of happy customers in Bangalore. Book your cleaning service today in just a few clicks.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp
          </a>
          <p className="text-sm text-emerald-200 mt-6 font-medium">
            *No Hidden Charges | All Over Bangalore: HSR, Koramangala, Whitefield
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-6 text-white">
            <Sparkles className="w-6 h-6 text-emerald-500" />
            <span className="font-bold text-xl tracking-tight">Expert Cleaning</span>
          </div>
          <p className="mb-6">Serving all major areas in Bangalore.</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} Expert Cleaning Services. All rights reserved.</p>
        </div>
      </footer>

      {/* Secret Admin Login Button */}
      <Link 
        to="/admin" 
        className="fixed bottom-3 right-3 text-[10px] opacity-30 hover:opacity-100 transition-opacity cursor-pointer text-slate-500 hover:text-emerald-600 font-medium z-50 bg-white/50 px-2 py-1 rounded"
      >
        Admin Login
      </Link>
    </div>
  );
}
