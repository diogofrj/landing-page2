import * as React from 'react';

function MethodExplanation() {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8 my-10 mx-auto transform -translate-y-6 border-t-4 border-[#f8c304]">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#103259]">O Que é o Método Coluna Viva?</h2>
      
      <div className="bg-gradient-to-r from-[#eef6ff] to-[#e6f0ff] p-5 rounded-lg mb-6 border-l-4 border-[#103259]">
        <p className="text-lg text-gray-700 leading-relaxed">
          É um método <span className="font-bold text-[#103259]">cientificamente comprovado</span> que ensina passo a passo como eliminar as dores nas suas costas de forma <span className="font-bold text-[#103259]">100% natural</span>, sem depender de remédios ou cirurgias invasivas.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-[#eef6ff] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#e6f0ff]">
          <div className="text-[#f8c304] text-4xl mb-2 flex justify-center">
            <i className="fas fa-book-medical"></i>
          </div>
          <h3 className="text-xl font-bold text-center text-[#103259] mb-2">Desenvolvido por Especialistas</h3>
          <p className="text-gray-600 text-center">
            Criado por uma equipe multidisciplinar de fisioterapeutas e ortopedistas especialistas em coluna vertebral.
          </p>
        </div>
        
        <div className="bg-[#eef6ff] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#e6f0ff]">
          <div className="text-[#f8c304] text-4xl mb-2 flex justify-center">
            <i className="fas fa-dumbbell"></i>
          </div>
          <h3 className="text-xl font-bold text-center text-[#103259] mb-2">Exercícios Práticos</h3>
          <p className="text-gray-600 text-center">
            50 exercícios cuidadosamente selecionados para fortalecer, alongar e estabilizar sua coluna vertebral.
          </p>
        </div>
        
        <div className="bg-[#eef6ff] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#e6f0ff]">
          <div className="text-[#f8c304] text-4xl mb-2 flex justify-center">
            <i className="fas fa-video"></i>
          </div>
          <h3 className="text-xl font-bold text-center text-[#103259] mb-2">Vídeos Explicativos</h3>
          <p className="text-gray-600 text-center">
            Todos os exercícios acompanham vídeos detalhados com instruções passo a passo para executá-los corretamente.
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-lg font-semibold text-[#103259] bg-[#eef6ff] p-4 rounded-lg inline-block">
          Dedicando apenas <span className="text-[#f8c304] font-bold">2 minutos por dia</span>, você poderá finalmente se libertar das dores e recuperar sua qualidade de vida!
        </p>
      </div>
    </div>
  );
}

export default MethodExplanation;