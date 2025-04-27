import * as React from "react";

function Bonuses() {
  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-white">
            <span className="text-[#f8c304]">Bônus Exclusivos</span> para Você
          </h2>
          <div className="w-24 h-1 bg-[#f8c304] mx-auto mb-4"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Além do método completo, você também receberá estes materiais exclusivos para potencializar seus resultados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bônus 1 */}
          <div className="bg-[#111] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-3 bg-[#f8c304]"></div>
            <div className="p-6 flex flex-col md:flex-row items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/30 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#f8c304] mb-2">E-book: Tratamento de Dor Lombar</h3>
                <p className="text-white/80">Método Coluna Viva - Tratamento de Dor Lombar com Movimento Preferencial da Coluna.</p>
              </div>
            </div>
          </div>

          {/* Bônus 2 */}
          <div className="bg-[#111] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-3 bg-[#f8c304]"></div>
            <div className="p-6 flex flex-col md:flex-row items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/30 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#f8c304] mb-2">Guia da Postura Perfeita</h3>
                <p className="text-white/80">Aprenda a manter a postura ideal durante o dia inteiro, evitando lesões e promovendo a saúde da coluna.</p>
              </div>
            </div>
          </div>

          {/* Bônus 3 */}
          <div className="bg-[#111] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-3 bg-[#f8c304]"></div>
            <div className="p-6 flex flex-col md:flex-row items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/30 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#f8c304] mb-2">Exercícios Sem Equipamentos</h3>
                <p className="text-white/80">E-book: Método Coluna Viva - Exercícios para deixar sua coluna 100% saudável sem precisar de equipamentos.</p>
              </div>
            </div>
          </div>

          {/* Bônus 4 */}
          <div className="bg-[#111] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-3 bg-[#f8c304]"></div>
            <div className="p-6 flex flex-col md:flex-row items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/30 flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#f8c304] mb-2">Guia de Testes Personalizados</h3>
                <p className="text-white/80">Descubra seu movimento preferencial através de testes específicos do método Coluna Viva para resultados personalizados.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a 
            href="#comprar" 
            className="inline-block bg-gradient-to-r from-[#f8c304] to-[#ffd700] hover:from-[#ffd700] hover:to-[#f8c304] text-black font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            QUERO GARANTIR MEUS BÔNUS HOJE!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bonuses;