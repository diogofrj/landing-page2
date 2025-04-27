import * as React from "react";

function Bonuses() {
  return (
    <div className="w-full bg-gradient-to-br from-[#103259] to-[#184e8a] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          <span className="text-[#f8c304]">Bônus Exclusivos</span> para Você
        </h2>
        
        <div className="space-y-6 md:space-y-8">
          {/* Bônus 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#eef6ff] flex items-center justify-center mb-4 md:mb-0 md:mr-8 flex-shrink-0 border-2 border-[#f8c304]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#103259]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#103259] mb-2">Bônus 1 - Livro digital</h3>
              <p className="text-gray-700">E-book: O guia completo para uma coluna sem dores. Com técnicas avançadas e dicas práticas para seu dia a dia.</p>
            </div>
          </div>

          {/* Bônus 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#eef6ff] flex items-center justify-center mb-4 md:mb-0 md:mr-8 flex-shrink-0 border-2 border-[#f8c304]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#103259]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#103259] mb-2">Bônus 2 - Lives de aprofundamento</h3>
              <p className="text-gray-700">Lives mensais exclusivas para tirar todas as suas dúvidas sobre o método e aprender técnicas avançadas diretamente com a Dra. Carla Veiga.</p>
            </div>
          </div>

          {/* Bônus 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#eef6ff] flex items-center justify-center mb-4 md:mb-0 md:mr-8 flex-shrink-0 border-2 border-[#f8c304]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#103259]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#103259] mb-2">Bônus 3 - Grupo VIP</h3>
              <p className="text-gray-700">Grupo secreto exclusivo para você interagir com outros membros, trocar experiências e tirar dúvidas. Uma comunidade de apoio para sua jornada!</p>
            </div>
          </div>

          {/* Bônus 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#eef6ff] flex items-center justify-center mb-4 md:mb-0 md:mr-8 flex-shrink-0 border-2 border-[#f8c304]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#103259]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#103259] mb-2">Bônus 4 - Acompanhamento personalizado</h3>
              <p className="text-gray-700">Acesso direto aos profissionais especializados para acompanhar seu progresso por 30 dias e garantir os melhores resultados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bonuses;