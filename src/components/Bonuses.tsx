import * as React from "react";

function Bonuses() {
  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          <span className="text-[#f8c304]">Bônus Exclusivos</span> para Você
        </h2>
        
        <div className="space-y-6 md:space-y-8">
          {/* Bônus 1 */}
          <div className="bg-[#111] rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/30 flex items-center justify-center mb-4 md:mb-0 md:mr-8 flex-shrink-0 border-2 border-[#f8c304]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#f8c304] mb-2">Bônus 1 - Livro digital</h3>
              <p className="text-white/80">E-book: Método Coluna Viva - Tratamento de Dor Lombar com Movimento Preferencial da Coluna.</p>
            </div>
          </div>

          {/* Bônus 2 */}
          <div className="bg-[#111] rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/30 flex items-center justify-center mb-4 md:mb-0 md:mr-8 flex-shrink-0 border-2 border-[#f8c304]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#f8c304] mb-2">Bônus 2 - Livro digital</h3>
              <p className="text-white/80">E-book: Ergonomia - Posições que evitam dores na coluna no dia a dia.</p>
            </div>
          </div>

          {/* Bônus 3 */}
          <div className="bg-[#111] rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/30 flex items-center justify-center mb-4 md:mb-0 md:mr-8 flex-shrink-0 border-2 border-[#f8c304]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#f8c304] mb-2">Bônus 3 - Livro digital</h3>
              <p className="text-white/80">E-book: Exercícios para deixar sua coluna 100% saudável. (sem equipamentos)</p>
            </div>
          </div>

          {/* Bônus 4 */}
          <div className="bg-[#111] rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/30 flex items-center justify-center mb-4 md:mb-0 md:mr-8 flex-shrink-0 border-2 border-[#f8c304]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#f8c304] mb-2">Bônus 4 - Guia de Testes</h3>
              <p className="text-white/80">Guia de testes para você descobrir seu movimento preferencial pelo método Coluna Viva.</p>
            </div>
          </div>
          {/* Bônus 5 */}
          <div className="bg-[#111] rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/30 flex items-center justify-center mb-4 md:mb-0 md:mr-8 flex-shrink-0 border-2 border-[#f8c304]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#f8c304] mb-2">Comunidade exclusiva</h3>
              <p className="text-white/80">Acesso a uma comunidade exclusiva do Método Coluna Viva. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bonuses;