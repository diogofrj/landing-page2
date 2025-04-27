import * as React from "react";
import { useState } from "react";

function SummaryFAQ() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto bg-black shadow-xl rounded-lg p-8 my-10 border-t-4 border-[#f8c304]">
      <h2 className="text-3xl font-bold mb-6 text-white">Resumo: você não precisa mais sofrer!</h2>
      <p className="mb-8 text-gray-300 leading-relaxed">
        Se você está cansado de sofrer com dores nas costas, saiba que há uma
        solução! O método <span className="font-bold text-[#f8c304]">Coluna Viva</span> é um tratamento 
        <span className="font-bold text-[#f8c304]"> 100% natural e eficaz</span> que
        vai te ajudar a se livrar das dores e recuperar sua qualidade de vida.
      </p>
      
      <h3 className="text-2xl font-bold mb-6 text-white">Dúvidas frequentes</h3>
      
      <div className="space-y-4">
        {/* Accordion 1 */}
        <div className="border border-[#333] rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-5 bg-[#111] text-white font-bold"
            onClick={() => setIsOpen1(!isOpen1)}
          >
            <span>Este método realmente funciona?</span>
            <span className="text-[#f8c304] text-2xl">{isOpen1 ? "-" : "+"}</span>
          </button>
          
          {isOpen1 && (
            <div className="p-5 border-t border-[#333] bg-[#1c1c1c]">
              <p className="text-gray-300 leading-relaxed">
                Sim! O método <span className="font-bold text-[#f8c304]">Coluna Viva</span> é um tratamento comprovado e já
                ajudou milhares de pessoas a se livrarem das dores nas costas. Com
                ele, você terá acesso a técnicas e exercícios que vão fortalecer,
                alongar e estabilizar sua coluna, proporcionando alívio imediato e
                duradouro.
              </p>
            </div>
          )}
        </div>

        {/* Accordion 2 */}
        <div className="border border-[#333] rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-5 bg-[#111] text-white font-bold"
            onClick={() => setIsOpen2(!isOpen2)}
          >
            <span>Como vou receber o acesso ao método?</span>
            <span className="text-[#f8c304] text-2xl">{isOpen2 ? "-" : "+"}</span>
          </button>
          
          {isOpen2 && (
            <div className="p-5 border-t border-[#333] bg-[#1c1c1c]">
              <p className="text-gray-300 leading-relaxed">
                Você receberá o acesso imediato ao método por e-mail, assim que a
                compra for aprovada. Tudo será enviado para seu endereço de
                e-mail, e você poderá acessar o método a qualquer hora e em
                qualquer lugar através de nossa plataforma exclusiva, disponível tanto no 
                computador quanto no celular.
              </p>
            </div>
          )}
        </div>

        {/* Accordion 3 */}
        <div className="border border-[#333] rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-5 bg-[#111] text-white font-bold"
            onClick={() => setIsOpen3(!isOpen3)}
          >
            <span>Este método é seguro?</span>
            <span className="text-[#f8c304] text-2xl">{isOpen3 ? "-" : "+"}</span>
          </button>
          
          {isOpen3 && (
            <div className="p-5 border-t border-[#333] bg-[#1c1c1c]">
              <p className="text-gray-300 leading-relaxed">
                Sim, o método <span className="font-bold text-[#f8c304]">Coluna Viva</span> é um tratamento 100% natural e
                seguro. Todos os exercícios e técnicas foram desenvolvidos pela 
                <span className="font-bold text-white"> Dra. Carla Veiga</span>, uma das maiores especialistas em coluna do Brasil, 
                com mais de 15 anos de experiência. As técnicas são totalmente seguras 
                e eficazes, adaptadas para diferentes níveis de condicionamento físico.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-[#111] rounded-lg text-center border border-[#333]">
        <p className="text-white font-semibold">
          Sua compra é <span className="text-[#f8c304] font-bold">100% segura e garantida</span>. Caso o método não funcione para
          você, basta solicitar o reembolso em até <span className="text-[#f8c304] font-bold">7 dias</span>.
        </p>
      </div>
    </div>
  );
}

export default SummaryFAQ;