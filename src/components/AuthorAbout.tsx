import * as React from "react";

function AuthorAbout() {
  return (
    <div className="w-full bg-gradient-to-br from-[#eef6ff] to-[#e6f0ff] py-10 px-6 rounded-lg shadow-lg border-t-4 border-[#f8c304] max-w-4xl mx-auto my-10">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#103259] shadow-lg mb-6 md:mb-0 md:mr-8">
          <img
            src="/assets/images/carla-about.jpg"
            alt="Dra. Carla Veiga"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 text-[#103259]">Dra. Carla Veiga</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Fisioterapeuta especialista em coluna com mais de 15 anos de experiência. 
            Criadora do método <span className="font-bold text-[#103259]">Coluna Viva</span>, 
            um tratamento <span className="font-bold text-[#f8c304]">100% natural e eficaz</span> que 
            já ajudou milhares de pessoas a se livrarem das dores nas costas e 
            recuperarem sua qualidade de vida.
          </p>
          <div className="mt-4 pt-4 border-t border-[#103259]/20">
            <p className="text-[#103259] font-semibold">
              "Minha missão é ajudar as pessoas a viverem sem dor, com movimentos livres e plena qualidade de vida."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorAbout;