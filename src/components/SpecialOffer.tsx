import * as React from "react";
import CountdownTimer from "./CountdownTimer";

function SpecialOffer() {
  // Estilo CSS para animação personalizada
  const animationStyle = `
    @keyframes moveBackAndForth {
      0% {
        transform: translateZ(0) scale(1);
      }
      50% {
        transform: translateZ(20px) scale(1.1);
      }
      100% {
        transform: translateZ(0) scale(1);
      }
    }
    .garantia-animation {
      animation: moveBackAndForth 2s infinite;
      transform-style: preserve-3d;
      perspective: 1000px;
    }
    @keyframes pulse-border {
      0% {
        box-shadow: 0 0 0 0 rgba(248, 195, 4, 0.7);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(248, 195, 4, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(248, 195, 4, 0);
      }
    }
    .pulse-border {
      animation: pulse-border 2s infinite;
    }
  `;

  return (
    <div className="w-full bg-black py-16 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-b from-[#0c1a2a] to-[#103259] rounded-2xl p-8 border border-[#f8c304]/30 shadow-2xl">
          <div className="text-center mb-12">
            <div className="bg-[#f8c304] text-[#103259] font-bold py-2 px-6 rounded-full inline-block mb-6 transform -rotate-2 shadow-lg">
              OFERTA EXCLUSIVA
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              <span className="text-[#f8c304]">Método Coluna Viva</span>
            </h2>
            
            <div className="my-8 flex flex-col items-center justify-center">
              <div className="bg-black/50 px-8 py-4 rounded-lg mb-2">
                <p className="text-xl text-white/80 mb-2">
                  De <span className="line-through">R$997</span> por apenas
                </p>
                <p className="text-4xl md:text-6xl font-bold text-[#f8c304] mb-2">
                  12x R$20,37
                </p>
                <p className="text-2xl font-semibold text-white mb-2">
                  ou R$197 à vista
                </p>
              </div>
              
              <div className="mb-8 bg-[#103259]/70 p-4 rounded-lg border border-[#f8c304]/20">
                <p className="text-white font-semibold mb-2">Essa oferta expira em:</p>
                <CountdownTimer className="justify-center" />
              </div>
            </div>
            
            <a
              href="https://pay.kiwify.com.br/UQ3SQz3"
              className="bg-[#f8c304] text-black font-bold py-5 px-10 rounded-full text-xl md:text-2xl inline-block transition-all hover:bg-yellow-400 hover:scale-105 transform duration-300 mb-6 uppercase tracking-wide pulse-border"
            >
              Quero Acabar Com Minhas Dores Agora!
            </a>
            
            <div className="flex justify-center flex-wrap gap-4 mb-6">
              <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#f8c304]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">Satisfação Garantida</span>
              </div>
              <div className="flex items-center bg-black/40 px-4 py-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f8c304]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="ml-2">Acesso Imediato</span>
              </div>
            </div>
            
            {/* Estilo para animação personalizada */}
            <style dangerouslySetInnerHTML={{ __html: animationStyle }} />
            
            {/* Selo de garantia com animação */}
            <div className="flex justify-center my-6">
              <div className="bg-white p-4 rounded-full">
                <img 
                  src="/assets/images/garantia1.png" 
                  alt="7 dias de garantia" 
                  className="w-48 garantia-animation"
                />
              </div>
            </div>
            
            <div className="mt-8 bg-black/50 p-4 rounded-lg inline-block">
              <p className="mb-4 font-medium">Aceitamos todas as formas de pagamento:</p>
              <div className="flex justify-center space-x-4 flex-wrap gap-2">
                <img src="https://logowik.com/content/uploads/images/580_visa.jpg" alt="Visa" className="h-8 w-auto bg-white rounded p-1" />
                <img src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1313-j69pg4er.png" alt="Mastercard" className="h-8 w-auto bg-white rounded p-1" />
                <img src="https://logowik.com/content/uploads/images/amex-card1708.jpg" alt="American Express" className="h-8 w-auto bg-white rounded p-1" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Logo_-_pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.png" alt="Pix" className="h-8 w-auto bg-white rounded p-1" />
                <img src="https://logodownload.org/wp-content/uploads/2019/09/boleto-logo.png" alt="Boleto" className="h-8 w-auto bg-white rounded p-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
