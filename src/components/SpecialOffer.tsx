import * as React from "react";

function SpecialOffer() {
  return (
    <div className="w-full py-12 bg-gradient-to-b from-[#103259] to-[#184e8a] text-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Banner de oferta */}
        <div className="bg-[#f8c304] text-[#103259] py-3 px-4 rounded-t-lg text-center font-bold text-lg shadow-lg">
          🔥 OFERTA ESPECIAL POR TEMPO LIMITADO 🔥
        </div>
        
        {/* Conteúdo principal */}
        <div className="bg-white text-gray-800 p-8 rounded-b-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#103259]">
            Adquira Agora o Método <span className="text-[#f8c304]">Coluna Viva</span>
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#103259] border-b-2 border-[#eef6ff] pb-2">
              O que você vai receber:
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-[#f8c304] mr-3 mt-1">
                  <i className="fas fa-check-circle text-lg"></i>
                </div>
                <div>
                  <span className="font-semibold text-[#103259]">Programa Completo Coluna Sem Dor</span>
                  <p className="text-sm text-gray-600">Acesso completo a todo o conteúdo do método por 1 ano inteiro.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-[#f8c304] mr-3 mt-1">
                  <i className="fas fa-check-circle text-lg"></i>
                </div>
                <div>
                  <span className="font-semibold text-[#103259]">Bônus 1: E-book "Coluna Saudável"</span>
                  <p className="text-sm text-gray-600">Guia digital com dicas práticas para manter sua coluna livre de dores.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-[#f8c304] mr-3 mt-1">
                  <i className="fas fa-check-circle text-lg"></i>
                </div>
                <div>
                  <span className="font-semibold text-[#103259]">Bônus 2: 3 Sessões ao Vivo</span>
                  <p className="text-sm text-gray-600">Encontros online para tirar suas dúvidas com especialistas em coluna.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-[#f8c304] mr-3 mt-1">
                  <i className="fas fa-check-circle text-lg"></i>
                </div>
                <div>
                  <span className="font-semibold text-[#103259]">Bônus 3: Grupo VIP de Suporte</span>
                  <p className="text-sm text-gray-600">Comunidade exclusiva para compartilhar experiências e receber suporte.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="text-[#f8c304] mr-3 mt-1">
                  <i className="fas fa-check-circle text-lg"></i>
                </div>
                <div>
                  <span className="font-semibold text-[#103259]">Bônus 4: Acompanhamento Personalizado</span>
                  <p className="text-sm text-gray-600">Suporte via WhatsApp para acompanhar seu progresso durante 30 dias.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Preço */}
          <div className="bg-[#eef6ff] p-6 rounded-lg mb-6">
            <div className="text-center mb-4">
              <p className="text-[#103259] text-lg font-bold">Valor Total: <span className="line-through text-gray-500">R$ 997,00</span></p>
              <div className="text-3xl font-bold text-[#103259] mt-2">
                Por apenas
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 border-[#f8c304]">
                <p className="text-sm text-gray-600 mb-1">12x de</p>
                <p className="text-3xl font-bold text-[#103259]">R$ 29,64</p>
                <p className="text-sm text-gray-600">ou R$ 297,00 à vista</p>
              </div>
              
              <div className="text-center text-[#103259]">
                <p className="font-bold text-lg">Economize R$ 700,00</p>
                <p className="text-sm">70% de desconto</p>
              </div>
            </div>
            
            {/* Contador */}
            <div className="text-center text-sm text-[#103259] mb-4">
              <p>Esta oferta expira em:</p>
              <div className="flex justify-center gap-2 mt-2">
                <div className="bg-[#103259] text-white px-2 py-1 rounded">00</div>:
                <div className="bg-[#103259] text-white px-2 py-1 rounded">45</div>:
                <div className="bg-[#103259] text-white px-2 py-1 rounded">22</div>
              </div>
            </div>
          </div>
          
          {/* Botão de CTA */}
          <div className="text-center mb-8">
            <a 
              href="#comprar" 
              className="inline-block bg-gradient-to-r from-[#f8c304] to-[#e0a800] text-[#103259] font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-xl"
            >
              QUERO ACABAR COM MINHAS DORES AGORA →
            </a>
            <p className="text-sm text-gray-500 mt-2">Acesso imediato após confirmação do pagamento</p>
          </div>
          
          {/* Garantia e Segurança */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-200 pt-6">
            <div className="flex items-center">
              <div className="text-4xl text-[#103259] mr-3">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div>
                <p className="font-semibold text-[#103259]">Garantia de 7 dias</p>
                <p className="text-sm text-gray-600">Teste o método sem riscos</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              <i className="fab fa-cc-visa text-3xl text-gray-600"></i>
              <i className="fab fa-cc-mastercard text-3xl text-gray-600"></i>
              <i className="fab fa-cc-amex text-3xl text-gray-600"></i>
              <i className="fab fa-pix text-3xl text-gray-600"></i>
              <i className="fas fa-barcode text-3xl text-gray-600"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;