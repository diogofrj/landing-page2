import * as React from "react";

function Testimonials() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 bg-gradient-to-b from-white to-[#eef6ff]">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#103259]">
        Veja os depoimentos de quem já experimentou
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Depoimento 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#f8c304] hover:shadow-xl transition-shadow duration-300">
          <p className="mb-6 text-gray-700 leading-relaxed italic">
            "Eu estou muito bem graças ao seu método. As dores na coluna sumiram
            depois de 10 dias praticando as técnicas. O método é realmente
            incrível!"
          </p>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#103259] mr-4">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Maria Silva"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-[#103259]">Maria Silva</p>
              <p className="text-sm text-gray-500">Professora • 42 anos</p>
            </div>
          </div>
        </div>
        
        {/* Depoimento 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#f8c304] hover:shadow-xl transition-shadow duration-300">
          <p className="mb-6 text-gray-700 leading-relaxed italic">
            "Estou praticando as técnicas que você ensina todos os dias. Estou
            muito feliz com os resultados. As dores na coluna já eram!"
          </p>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#103259] mr-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="José Santos"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-[#103259]">José Santos</p>
              <p className="text-sm text-gray-500">Engenheiro • 38 anos</p>
            </div>
          </div>
        </div>
        
        {/* Depoimento 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#f8c304] hover:shadow-xl transition-shadow duration-300">
          <p className="mb-6 text-gray-700 leading-relaxed italic">
            "Tenho muito a te agradecer! As dores eram fortes e constantes e hoje
            eu me sinto muito bem. O seu método realmente funciona."
          </p>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#103259] mr-4">
              <img
                src="https://randomuser.me/api/portraits/women/47.jpg"
                alt="Ana Pereira"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-[#103259]">Ana Pereira</p>
              <p className="text-sm text-gray-500">Advogada • 45 anos</p>
            </div>
          </div>
        </div>
        
        {/* Depoimento 4 */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#f8c304] hover:shadow-xl transition-shadow duration-300">
          <p className="mb-6 text-gray-700 leading-relaxed italic">
            "Já indiquei o seu trabalho para várias pessoas porque o resultado é
            inacreditável. Me sinto outra pessoa!"
          </p>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#103259] mr-4">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Carlos Lima"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-[#103259]">Carlos Lima</p>
              <p className="text-sm text-gray-500">Empresário • 52 anos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;