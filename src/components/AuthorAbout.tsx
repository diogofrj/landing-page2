import * as React from "react";

function AuthorAbout() {
  return (
    <div className="w-full bg-black py-16 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Conheça a <span className="text-[#f8c304]">Especialista</span>
        </h2>
        
        <div className="bg-gradient-to-b from-[#0c1a2a] to-[#103259] p-8 rounded-lg shadow-xl border border-[#f8c304]/30">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#f8c304] shadow-lg mb-6 md:mb-0 md:mr-8 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/images/carla-about.jpg"
                alt="Dra. Carla Veiga"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-[#f8c304]">Dra. Carla Veiga</h2>
              <p className="text-white/90 leading-relaxed text-lg">
                Fisioterapeuta especialista em coluna com mais de 15 anos de experiência. 
                Criadora do método <span className="font-bold text-[#f8c304]">Coluna Viva</span>, 
                um tratamento <span className="font-bold text-white">100% natural e eficaz</span> que 
                já ajudou milhares de pessoas a se livrarem das dores nas costas e 
                recuperarem sua qualidade de vida.
              </p>
              <div className="mt-6 pt-4 border-t border-[#f8c304]/30">
                <p className="text-white italic font-medium">
                  "<span className="text-[#f8c304]">Minha missão</span> é ajudar as pessoas a viverem sem dor, com movimentos livres e plena qualidade de vida."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-xl text-white/80 mb-6">
            Aprenda com quem realmente entende sobre tratamento natural de dores nas costas
          </p>
          <a
            href="https://pay.kiwify.com.br/UQ3SQz3"
            className="bg-[#f8c304] text-black font-bold py-4 px-8 rounded-full text-xl inline-block transition-all hover:bg-yellow-400 hover:scale-105 transform duration-300"
          >
            QUERO ACABAR COM MINHAS DORES AGORA
          </a>
        </div>
      </div>
    </div>
  );
}

export default AuthorAbout;