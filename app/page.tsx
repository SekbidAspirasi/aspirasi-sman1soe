'use client';

import React, { useState } from 'react';

const App = () => {
  const [showAbout, setShowAbout] = useState(false);
  
  // State untuk form aspirasi
  const [nama, setNama] = useState('');
  const [aspirasi, setAspirasi] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Fungsi kirim data ke Google Sheets
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aspirasi.trim()) return;

    setLoading(true);
    setSuccessMessage('');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxdyhSvIt-Y9arNwrBlzNDpZpfGJLx3goqI7eMKHMa5oX9buk5g-Pg_41u5WI7Xgcg76Q/exec';
    
    const formData = new URLSearchParams();
    formData.append('Nama / Kelas', nama ? nama : 'Anonim / Rahasia');
    formData.append('Aspirasi', aspirasi);

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      setSuccessMessage('Berhasil! Aspirasi kamu telah dikirim secara privat ke Admin.');
      setNama('');
      setAspirasi('');
    } catch (error) {
      console.error('Error!', error);
      alert('Gagal mengirim aspirasi. Coba sesaat lagi ya.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#100000] to-[#500000] flex flex-col items-center justify-center p-4 md:p-6 lg:p-10 font-sans">
      {/* Main white card container */}
      <div className="bg-white w-full max-w-[1500px] rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-5 shadow-2xl relative mb-10">
        
        {/* Hero Section Wrapper */}
        <div className="relative w-full min-h-[650px] md:min-h-[750px] lg:min-h-[800px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-gray-900 flex flex-col justify-center py-16 md:py-20">
          
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1523808540583-8d90118c9f17?w=2076&auto=format&fit=crop"
            alt="Siswa SMA Negeri 1 Soe"
            className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-1000"
          />

          {/* Dark Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

          {/* Floating Navbar (Clean & Minimalist: Logo Only) */}
          <div className="absolute top-6 md:top-8 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-20">
            <nav className="bg-white rounded-full h-16 md:h-[72px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center justify-between px-6 md:px-8">
              
              {/* Logo Container */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-red-500 flex items-center justify-center bg-gray-50 overflow-hidden shadow-sm">
                  <img
                    src="/logo.png"
                    alt="Logo SMAN 1 Soe"
                    className="w-[90%] h-[90%] object-contain"
                  />
                </div>
                <span className="font-extrabold text-black uppercase tracking-wider text-xs md:text-sm">
                  SMAN 1 SOE
                </span>
              </div>

              {/* Status Badge */}
              <div className="text-xs font-semibold text-gray-500 bg-gray-100 px-4 py-2 rounded-full uppercase tracking-widest hidden sm:block">
                Platform Aspirasi Siswa
              </div>

            </nav>
          </div>

          {/* Hero Content (Left Aligned) */}
          <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 mt-12 md:mt-8">
            <div className="max-w-4xl">
              
              {/* Sub-heading */}
              <p className="text-white/80 text-xs md:text-sm lg:text-base font-semibold tracking-[0.25em] mb-4 md:mb-6 uppercase flex items-center">
                <span className="w-8 h-[2px] bg-white/50 mr-4"></span>
                Menyalurkan Suara & Aspirasi
              </p>

              {/* Main Heading */}
              <h1 className="text-white text-[3rem] leading-[0.9] sm:text-7xl lg:text-[6rem] xl:text-[7rem] font-black uppercase tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Aspirasi Siswa
                </span>
                <span className="block">
                  SMA Negeri 1
                </span>
                <span className="block text-[#E31837] drop-shadow-[0_0_15px_rgba(227,24,55,0.5)]">
                  Soe
                </span>
              </h1>

              {/* Action Buttons */}
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
                <a
                  href="#kirim"
                  className="bg-[#E31837] text-white px-8 md:px-10 py-4 md:py-4.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-red-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(227,24,55,0.4)] flex items-center justify-center group"
                >
                  Kirim Aspirasi
                  <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>

                {/* Tombol Interaktif Tentang Kami */}
                <button 
                  onClick={() => setShowAbout(!showAbout)}
                  className="bg-white text-black px-8 md:px-10 py-4 md:py-4.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] flex items-center justify-center cursor-pointer"
                >
                  {showAbout ? 'Tutup Tentang Kami' : 'Tentang Kami'}
                </button>
              </div>

              {/* Kotak Informasi Tentang Kami */}
              {showAbout && (
                <div className="mt-6 mb-4 bg-black/85 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl max-w-2xl text-white transition-all duration-500 shadow-2xl">
                  <h3 className="text-xl font-black text-[#E31837] mb-2 uppercase tracking-wider">Tentang Platform Aspirasi</h3>
                  <p className="text-sm text-gray-200 leading-relaxed mb-4">
                    Platform resmi siswa SMA Negeri 1 Soe untuk menyalurkan kritik, saran, dan ide kreatif secara aman, transparan, dan privat langsung kepada pengurus OSIS. Dan dikelola secara profesional oleh Sekbid Aspirasi serta kerja sama antara Ketua Osis dan Wakil Ketua Osis SMA Negeri 1 Soe.
                  </p>
                  <div className="border-t border-white/10 pt-3 text-xs text-gray-400">
                    📍 Jl. Prof. Dr. W. Z. Yohanes No. 33, Soe, Kab. Timor Tengah Selatan, NTT.
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* SECTION FORMULIR ASPIRASI PRIVAT */}
      <div id="kirim" className="w-full max-w-4xl bg-black/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-white mb-12">
        <div className="text-center mb-8">
          <span className="text-[#E31837] font-bold text-xs tracking-[0.3em] uppercase bg-red-950/50 px-4 py-1.5 rounded-full border border-red-900/50">
            Formulir Rahasia & Aman
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-4">
            Sampaikan Aspirasi Kamu
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
            Identitas kamu aman. Masukan ini hanya akan diterima langsung oleh pengurus admin (OSIS/pihak berwenang).
          </p>
        </div>

        {successMessage && (
          <div className="mb-6 bg-green-500/20 border border-green-500/50 text-green-300 p-4 rounded-2xl text-center text-sm font-semibold animate-pulse">
            ✨ {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
              Nama / Kelas <span className="text-gray-500 font-normal">(Opsional / Boleh dikosongkan untuk Anonim)</span>
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Contoh: Budi - XII IPA 1 (atau biarkan kosong)"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#E31837] transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
              Isi Kritik, Saran, atau Aspirasi <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              value={aspirasi}
              onChange={(e) => setAspirasi(e.target.value)}
              placeholder="Tuliskan aspirasi, ide, atau saran kemajuan sekolah dengan sopan dan jelas di sini..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#E31837] transition-colors text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E31837] text-white font-bold py-4 rounded-2xl uppercase tracking-widest text-sm hover:bg-red-700 transition-all duration-300 shadow-[0_10px_20px_rgba(227,24,55,0.3)] hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
          >
            {loading ? 'Mengirim Aspirasi...' : 'Kirim Aspirasi Secara Privat 🚀'}
          </button>
        </form>
      </div>

    </div>
  );
};

export default App;