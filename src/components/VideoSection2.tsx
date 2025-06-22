import React, { useState } from 'react';

function VideoSection2() {
  const [videoError, setVideoError] = useState(false);
  
  // ID do YouTube Short
  const videoId = "zMDBd-7jbGg";
  
  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="w-full bg-gradient-to-br from-[#f5f7fa] to-[#e0f2fe] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            {/* Veja Mais Resultados */}
          </h2>
          <div className="w-24 h-1 bg-[#f8c304] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {/* Confira este depoimento rápido de sucesso com o Método Coluna Viva */}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <div className="relative w-full max-w-sm mx-auto bg-gray-900 rounded-lg overflow-hidden" style={{ aspectRatio: '9/16' }}>
            {!videoError ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&fs=1&cc_load_policy=0&iv_load_policy=3&enablejsapi=0&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                title="Método Coluna Viva - Depoimento"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                onError={handleVideoError}
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#f8c304] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white mb-2">Vídeo temporariamente indisponível</p>
                  <p className="text-gray-400 text-sm">Clique no botão abaixo para assistir no YouTube</p>
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
              {/* <span className="text-gray-500 text-sm">Depoimento real</span> */}
            </div>
            <p className="text-lg text-gray-700 mb-4">
              {/* Mais um resultado incrível com o <span className="font-bold text-[#f8c304]">Método Coluna Viva</span> */}
            </p>
            <div className="inline-flex items-center gap-2 bg-[#f8c304]/10 text-[#f8c304] px-4 py-2 rounded-full border border-[#f8c304]/30">
              <span className="text-xl">🎯</span>
              <span className="font-semibold">Transformação real em pouco tempo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection2; 