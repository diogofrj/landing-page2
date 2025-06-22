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
  `;

  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-[#f8c304]">Oferta Especial</span> Método Coluna Viva
          </h2>
          <p className="text-xl text-white/80 mb-2">
            De <span className="line-through">R$997,00</span> por apenas
          </p>
          <p className="text-4xl md:text-5xl font-bold text-[#f8c304] mb-4">
            12x R$19,90
          </p>
          <p className="text-2xl font-semibold text-white mb-8">
            ou R$199,00 à vista
          </p>
          
          <div className="mb-8">
            <p className="text-white mb-2">Essa oferta expira em:</p>
            <CountdownTimer className="justify-center" />
          </div>
          
          <a
            href="https://pay.kiwify.com.br/UQ3SQz3"
            className="bg-[#f8c304] text-black font-bold py-4 px-8 rounded-full text-xl inline-block transition-all hover:bg-yellow-400 hover:scale-105 transform duration-300 mb-6"
          >
            QUERO ACABAR COM MINHAS DORES AGORA
          </a>
          
          <div className="flex justify-center items-center text-white/80 space-x-2 mb-2">
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
            <span>Pagamento 100% seguro</span>
          </div>
          
          {/* Estilo para animação personalizada */}
          <style dangerouslySetInnerHTML={{ __html: animationStyle }} />
          
          {/* Selo de garantia com animação */}
          <div className="flex justify-center my-6">
            <img 
              src="/assets/images/garantia1.png" 
              alt="7 dias de garantia" 
              className="w-48 hover:scale-110 transition-all duration-500 garantia-animation"
            />
          </div>
          
          <div className="flex justify-center space-x-4">
            <img src="https://logowik.com/content/uploads/images/580_visa.jpg" alt="Visa" className="h-8 w-auto" />
            <img src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1313-j69pg4er.png" alt="Mastercard" className="h-8 w-auto" />
            <img src="https://logowik.com/content/uploads/images/amex-card1708.jpg" alt="American Express" className="h-8 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Logo_-_pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.png" alt="Pix" className="h-8 w-auto" />
            <img src="https://logodownload.org/wp-content/uploads/2019/09/boleto-logo.png" alt="Boleto" className="h-8 w-auto" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default SpecialOffer;
