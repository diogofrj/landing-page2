import React, { useState } from 'react';

function VideoSection() {
  const [videoError, setVideoError] = useState(false);
  
  // ID do vídeo do YouTube - vamos testar com um vídeo que funciona primeiro
  const videoId = "lF-AV9giMcw"; // Vídeo de teste temporário
  
  const handleVideoError = () => {
    setVideoError(true);
  };


  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-[#f8c304]">
            Veja Como Funciona na Prática
          </h2>
          <div className="w-24 h-1 bg-[#f8c304] mx-auto mb-4"></div>
          <p className="text-white max-w-2xl mx-auto">
            Assista ao vídeo e descubra como o Método Coluna Viva pode transformar sua vida
          </p>
        </div>
        
        <div className="bg-[#111] p-6 rounded-lg shadow-xl border border-[#f8c304]/20 hover:shadow-2xl transition-shadow duration-300">
          <div className="relative w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden" style={{ aspectRatio: '9/16' }}>
            {!videoError ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&fs=1&cc_load_policy=0&iv_load_policy=3&enablejsapi=0&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                title="Método Coluna Viva - Demonstração"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                onError={handleVideoError}
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#f8c304] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white mb-2">Vídeo temporariamente indisponível</p>
                  <p className="text-gray-400 text-sm">Clique no botão abaixo para assistir</p>
                  <a 
                    href={`https://www.youtube.com/shorts/${videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-[#f8c304] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#f8c304]/90 transition-colors"
                  >
                    Assistir no YouTube
                  </a>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-[#f8c304] text-lg">★</span>
                ))}
              </div>
              {/* <span className="text-gray-300 text-sm">Avaliação dos nossos clientes</span> */}
            </div>
            <p className="text-lg text-gray-300 mb-4">
              {/* Descubra como o <span className="font-bold text-[#f8c304]">Método Coluna Viva</span> pode transformar sua vida */}
            </p>
            <div className="inline-flex items-center gap-2 bg-[#f8c304]/10 text-[#f8c304] px-4 py-2 rounded-full border border-[#f8c304]/30">
              <span className="text-xl">⚡</span>
              <span className="font-semibold">Resultados comprovados em poucos minutos por dia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;