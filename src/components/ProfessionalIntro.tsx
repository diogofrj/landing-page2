import * as React from "react";

function ProfessionalIntro() {
  return (
    <div className="w-full bg-gray-200 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Olá! Muito Prazer!</h2>
        
        <div className="flex justify-center mb-8">
          <div className="rounded-lg overflow-hidden max-w-md">
            <img 
              src="/assets/images/carla-veiga.jpg" 
              alt="Carla Veiga Fisioterapeuta" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <p className="text-xl font-semibold mb-6 text-gray-800">
          Eu sou a Carla Veiga, fisioterapeuta especializada em coluna vertebral.
        </p>
        
        <p className="text-lg mb-6 text-gray-700">
          Nos últimos <span className="font-bold">2 anos</span>, ajudei <span className="font-bold">mais de 5 mil pessoas</span> a se livrarem das dores na lombar, ciático 
          e cervical com um método simples, prático e 100% baseado em movimento: o <span className="font-bold">Protocolo 
          Coluna Sem Dor</span>.
        </p>
        
        <p className="text-lg mb-8 text-gray-700">
          E o melhor: sem depender de remédios, sem passar por cirurgias invasivas e <span className="font-bold">sem precisar 
          gastar fortunas em sessões intermináveis de fisioterapia</span>.
        </p>
        
        <p className="text-lg mb-6 text-gray-700">
          Hoje, além de aplicar esse protocolo com meus próprios pacientes no consultório...
        </p>
        
        <p className="text-lg mb-8 text-gray-700">
          ...eu ensino <span className="font-bold">pessoas comuns, de qualquer idade</span>, a aliviar a dor, recuperar a mobilidade e 
          voltar a viver com liberdade — tudo isso no conforto de casa, com acompanhamento em 
          vídeo e um passo a passo que realmente funciona.
        </p>
        
        <p className="text-lg font-semibold mb-6 text-gray-800">
          Esse é o método que eu mesma aplico na minha rotina e indico para quem quer 
          resultados reais e duradouros.
        </p>
        
        <p className="text-lg mb-12 text-gray-700">
          Nos vemos lá dentro do programa!<br/>
          — <span className="font-semibold">Fisioterapeuta Carla Veiga</span>
        </p>
        
        <div className="flex justify-center">
          <a
            href="https://pay.kiwify.com.br/UQ3SQz3"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full text-xl inline-block transition-all hover:scale-105 transform duration-300"
          >
            OK! ME CONVENCEU!
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalIntro; 