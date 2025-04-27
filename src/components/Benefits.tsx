import * as React from "react";

function Benefits() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 bg-black">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Principais Benefícios do Método
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mobilidade Card */}
        <div className="bg-[#111] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#222]">
          <div className="h-3 bg-[#f8c304]"></div>
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#1c1c1c] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#f8c304]">Mobilidade</h3>
            <p className="text-center text-gray-300">
              Recupere a liberdade de movimentos sem dores, devolvendo a flexibilidade natural ao seu corpo.
            </p>
          </div>
        </div>

        {/* Estabilidade Card */}
        <div className="bg-[#111] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#222]">
          <div className="h-3 bg-[#f8c304]"></div>
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#1c1c1c] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#f8c304]">Estabilidade</h3>
            <p className="text-center text-gray-300">
              Tenha uma postura mais firme e segura no dia a dia, prevenindo lesões e desconfortos.
            </p>
          </div>
        </div>

        {/* Fortalecimento Card */}
        <div className="bg-[#111] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#222]">
          <div className="h-3 bg-[#f8c304]"></div>
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#1c1c1c] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4v16M15 4v16" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#f8c304]">Fortalecimento</h3>
            <p className="text-center text-gray-300">
              Músculos mais fortes e preparados para enfrentar os desafios do dia a dia com vigor e resistência.
            </p>
          </div>
        </div>
        {/* Tratamento Card */}
        <div className="bg-[#111] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#222]">
          <div className="h-3 bg-[#f8c304]"></div>
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#1c1c1c] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11a4 4 0 105-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#f8c304]">Tratamento</h3>
            <p className="text-center text-gray-300">
              Trate sua hérnia de disco de forma natural e sem cirurgia.
            </p>
          </div>
        </div>
        {/* Prevenção Card */}
        <div className="bg-[#111] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#222]">
          <div className="h-3 bg-[#f8c304]"></div>
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#1c1c1c] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#f8c304]">Prevenção</h3>
            <p className="text-center text-gray-300">
              Previna a progressão da hérnia de disco e o surgimento dela.
            </p>
          </div>
        </div>        
        {/* Atividade Card */}
        <div className="bg-[#111] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#222]">
          <div className="h-3 bg-[#f8c304]"></div>
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#1c1c1c] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#f8c304]">Atividade</h3>
            <p className="text-center text-gray-300">
              Volte a ter uma vida mais ativa e saudável livre de dores que hoje te impedem de fazer as atividades que mais gosta.
            </p>
          </div>
        </div>                
      </div>
    </div>
  );
}

export default Benefits;