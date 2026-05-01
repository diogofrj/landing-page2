import * as React from 'react';

function MethodExplanation() {
  return (
    <div className="w-full bg-gradient-to-br from-black via-[#111111] to-[#1a1a1a] flex flex-col items-center py-16 px-4 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          O Que é o <span className="text-[#f8c304]">Método Coluna Viva</span>?
        </h2>
        
        <div className="bg-[#0c1a2a] p-6 rounded-lg mb-10 border-l-4 border-[#f8c304] shadow-xl">
          <p className="text-lg text-gray-300 leading-relaxed">
            É um método <span className="font-bold text-[#f8c304]">cientificamente comprovado</span> que ensina passo a passo como eliminar as dores nas suas costas de forma <span className="font-bold text-[#f8c304]">100% natural.</span><br></br>
            Utilizamos técnicas de movimentos específicos que atuam na causa da dor conseguindo identificar qual o movimento responsável por ajudar no tratamento da sua dor. Estudos recentes mostram que tratamentos específicos para dores crônicas na coluna podem <span className="font-bold text-[#f8c304]">reduzir os sintomas em até 70%</span>, permitindo que os pacientes voltem a ter uma vida normal sem depender de medicamentos ou cirurgias invasivas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-b from-[#0c1a2a] to-[#103259] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#f8c304]/20 transform hover:-translate-y-1 hover:border-[#f8c304]/50">
            <div className="text-[#f8c304] text-4xl mb-4 flex justify-center">
              <i className="fas fa-book-medical"></i>
            </div>
            <h3 className="text-xl font-bold text-center text-[#f8c304] mb-3">Desenvolvido por Especialistas</h3>
            <p className="text-gray-300 text-center">
              Criado pela Dra. Carla Veiga, Especialista em Coluna Vertebral com mais de 15 anos de experiência.
            </p>
          </div>
          
          <div className="bg-gradient-to-b from-[#0c1a2a] to-[#103259] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#f8c304]/20 transform hover:-translate-y-1 hover:border-[#f8c304]/50">
            <div className="text-[#f8c304] text-4xl mb-4 flex justify-center">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h3 className="text-xl font-bold text-center text-[#f8c304] mb-3">Exercícios Práticos</h3>
            <p className="text-gray-300 text-center">
              Série de exercícios cuidadosamente selecionados para fortalecer, alongar e estabilizar sua coluna vertebral.
            </p>
          </div>
          
          <div className="bg-gradient-to-b from-[#0c1a2a] to-[#103259] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#f8c304]/20 transform hover:-translate-y-1 hover:border-[#f8c304]/50">
            <div className="text-[#f8c304] text-4xl mb-4 flex justify-center">
              <i className="fas fa-video"></i>
            </div>
            <h3 className="text-xl font-bold text-center text-[#f8c304] mb-3">Vídeos Explicativos</h3>
            <p className="text-gray-300 text-center">
              Todos os exercícios acompanham vídeos detalhados com instruções passo a passo para executá-los corretamente.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#103259] to-[#0c1a2a] p-6 rounded-lg inline-block shadow-lg border border-[#f8c304]/30">
            <p className="text-xl font-semibold text-white">
              Dedicando apenas <span className="text-[#f8c304] font-bold">2 minutos por dia</span>, você poderá finalmente se libertar das dores e recuperar sua qualidade de vida!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MethodExplanation;