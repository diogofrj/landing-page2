import * as React from "react";

function Benefits() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#103259]">
        Principais Benefícios do Método
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mobilidade Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="h-3 bg-[#f8c304]"></div>
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#eef6ff] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#103259]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#103259]">Mobilidade</h3>
            <p className="text-center text-gray-600">
              Recupere a liberdade de movimentos sem dores, devolvendo a flexibilidade natural ao seu corpo.
            </p>
          </div>
        </div>

        {/* Estabilidade Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="h-3 bg-[#f8c304]"></div>
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#eef6ff] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#103259]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#103259]">Estabilidade</h3>
            <p className="text-center text-gray-600">
              Tenha uma postura mais firme e segura no dia a dia, prevenindo lesões e desconfortos.
            </p>
          </div>
        </div>

        {/* Fortalecimento Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="h-3 bg-[#f8c304]"></div>
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#eef6ff] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#103259]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#103259]">Fortalecimento</h3>
            <p className="text-center text-gray-600">
              Músculos mais fortes e preparados para enfrentar os desafios do dia a dia com vigor e resistência.
            </p>
          </div>
        </div>
        {/* Tratamento Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="h-3 bg-[#f8c304]"></div>
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#eef6ff] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#103259]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#103259]">Tratamento</h3>
            <p className="text-center text-gray-600">
              Trate sua hérnia de disco de forma natural e sem cirurgia.
            </p>
          </div>
        </div>
        {/* Prevenção Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="h-3 bg-[#f8c304]"></div>
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#eef6ff] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#103259]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#103259]">Prevenção</h3>
            <p className="text-center text-gray-600">
              Previna a progressão da hérnia de disco e o surgimento dela.
            </p>
          </div>
        </div>        
        {/* Atividade Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="h-3 bg-[#f8c304]"></div>
          <div className="p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#eef6ff] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#103259]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#103259]">Atividade</h3>
            <p className="text-center text-gray-600">
              Volte a ter uma vida mais ativa e saudável livre de dores que hoje te impedem de fazer as atividades que mais gosta.
            </p>
          </div>
        </div>                
      </div>
    </div>
  );
}

export default Benefits;