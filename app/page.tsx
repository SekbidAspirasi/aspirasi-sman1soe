import React from 'react';

const App = () => {
  return (
    // Outer container matching the red background context of the reference
    <div className="min-h-screen bg-gradient-to-br from-[#8B0000] to-[#5C0000] flex items-center justify-center p-4 md:p-6 lg:p-10 font-sans selection:bg-red-600 selection:text-white overflow-hidden">
      
      { }
      {/* Main white card container */}
      <div className="bg-white w-full max-w-[1500px] rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-5 shadow-2xl relative">

        {}
        {/* Hero Section Wrapper */}
        <div className="relative w-full h-[650px] md:h-[750px] lg:h-[800px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-gray-900">
          
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
            alt="Siswa SMA Negeri 1 Soe" 
            className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-[10s] ease-in-out"
          />
          {/* Dark Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20"></div>

          {}
          {/* Floating Navbar */}
          <div className="absolute top-6 md:top-8 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] max-w-6xl z-50">
            <nav className="bg-white rounded-full h-16 md:h-[72px] shadow-[8_10px_30px_rgba(0,0,0,0.15)] flex items-center justify-between px-6 md:px-10">
  {/* Left: Protruding Logo Container */}
  <div className="relative flex-shrink-0 w-16 md:w-20 h-full flex items-center">
    <div className="absolute left-[-10px] md:left-[-15px] top-1/2 -translate-y-1/2 w-[85px] h-[85px] md:w-[110px] md:h-[110px]">
      <div className="w-full h-full rounded-full border border-red-100 flex items-center justify-center p-2 bg-gray-50 overflow-hidden shadow-md">
        <img 
          src="/logo.png" 
          alt="Logo SMAN 1 Soe" 
          className="w-[90%] h-[90%] object-contain group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
    </div>
  </div>

  {/* Center: Navigation Links */}
  <div className="flex items-center justify-center space-x-7 xl:space-x-10 pl-16">
    {['Beranda', 'Tentang Kami', 'Sekolah Kami'].map((item, index) => (
      <a 
        key={index}
        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-[10px] xl:text-[11px] font-bold uppercase text-black tracking-[0.15em] hover:text-[#E31837] transition relative group"
      >
        {item}
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#E31837] group-hover:w-full transition-all duration-300"></span>
      </a>
    ))}
  </div>
</nav>
          </div>

          {}
          {/* Hero Content (Left Aligned) */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20">
            <div className="max-w-4xl">
              {/* Sub-heading */}
              <p className="text-white/90 text-xs md:text-sm lg:text-base font-semibold tracking-[0.25em] mb-4 md:mb-6 uppercase flex items-center animate-fade-in-up">
                <span className="w-8 h-[2px] bg-white/50 mr-4"></span>
                Menyalurkan Suara & Aspirasi
              </p>
              
              {/* Main Heading matching the tight, bold style of the reference */}
              <h1 className="text-white text-[3.5rem] leading-[0.9] sm:text-7xl lg:text-[6rem] xl:text-[7rem] font-black uppercase tracking-tighter mb-8 md:mb-10 drop-shadow-lg">
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
              
              {}
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
                <a 
                  href="#kirim" 
                  className="bg-[#E31837] text-white px-8 md:px-10 py-4 md:py-4.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-[#B3122A] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(227,24,55,0.4)] flex items-center justify-center gap-2"
                >
                  Kirim Aspirasi
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
                <a 
                  href="#tentang" 
                  className="bg-white text-black px-8 md:px-10 py-4 md:py-4.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] flex items-center justify-center"
                >
                  Tentang Kami
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;