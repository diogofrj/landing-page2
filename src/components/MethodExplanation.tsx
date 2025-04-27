import * as React from 'react';

function MethodExplanation() {
  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">O Que é o Método Coluna Viva?</h2>
        
        <div className="bg-[#1c1c1c] p-5 rounded-lg mb-10 border-l-4 border-[#f8c304]">
          <p className="text-lg text-gray-300 leading-relaxed">
            É um método <span className="font-bold text-[#f8c304]">cientificamente comprovado</span> que ensina passo a passo como eliminar as dores nas suas costas de forma <span className="font-bold text-[#f8c304]">100% natural.</span><br></br>
            Utilizamos técnicas de movimentos específicos que atuam na causa da dor conseguindo identificar qual o movimento responsável por ajudar no tratamento da sua dor. Estudos recentes mostram que tratamentos específicos para dores crônicas na coluna podem <span className="font-bold text-[#f8c304]">reduzir os sintomas em até 70%</span>, permitindo que os pacientes voltem a ter uma vida normal sem depender de medicamentos ou cirurgias invasivas.
  
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-[#1c1c1c] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#333333]">
            <div className="text-[#f8c304] text-4xl mb-2 flex justify-center">
              <i className="fas fa-book-medical"></i>
            </div>
            <h3 className="text-xl font-bold text-center text-[#f8c304] mb-2">Desenvolvido por Especialistas</h3>
            <p className="text-gray-300 text-center">
              Criado pela Dra. Carla Veiga, Especialista em Coluna Vertebral.
            </p>
          </div>
          
          <div className="bg-[#1c1c1c] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#333333]">
            <div className="text-[#f8c304] text-4xl mb-2 flex justify-center">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h3 className="text-xl font-bold text-center text-[#f8c304] mb-2">Exercícios Práticos</h3>
            <p className="text-gray-300 text-center">
              Série de exercícios cuidadosamente selecionados para fortalecer, alongar e estabilizar sua coluna vertebral.
            </p>
          </div>
          
          <div className="bg-[#1c1c1c] p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#333333]">
            <div className="text-[#f8c304] text-4xl mb-2 flex justify-center">
              <i className="fas fa-video"></i>
            </div>
            <h3 className="text-xl font-bold text-center text-[#f8c304] mb-2">Vídeos Explicativos</h3>
            <p className="text-gray-300 text-center">
              Todos os exercícios acompanham vídeos detalhados com instruções passo a passo para executá-los corretamente.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-white bg-[#1c1c1c] p-4 rounded-lg inline-block">
            Dedicando apenas <span className="text-[#f8c304] font-bold">2 minutos por dia</span>, você poderá finalmente se libertar das dores e recuperar sua qualidade de vida!
          </p>
        </div>
      </div>
    </div>
  );
}

export default MethodExplanation;