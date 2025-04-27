import * as React from 'react';

function Hero() {
  return (
    <div className="w-full bg-gradient-to-br from-black via-[#111111] to-[#1a1a1a] flex flex-col items-center py-16 px-4 text-white">
      {/* Logo e título principal */}
      <div className="flex flex-col items-center mb-10">
        <img 
          src="/assets/images/logo.png" 
          alt="Instituto Carla Veiga" 
          className="h-28 md:h-36 mb-6 drop-shadow-lg"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-center tracking-tight">
          <span className="text-[#f8c304] text-shadow-lg">Método</span> <span className="text-white text-shadow-lg">Coluna</span> <span className="text-[#f8c304] text-shadow-lg">Viva</span>
        </h1>
      </div>
      
      {/* Banner principal com faixa dourada */}
      <div className="relative w-full max-w-4xl mx-auto mb-8">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#f8c304] via-[#ffd700] to-[#f8c304]"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#f8c304] via-[#ffd700] to-[#f8c304]"></div>
        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-[#f8c304] via-[#ffd700] to-[#f8c304]"></div>
        <div className="absolute right-0 top-0 w-2 h-full bg-gradient-to-b from-[#f8c304] via-[#ffd700] to-[#f8c304]"></div>
        
        <div className="py-6 px-4 md:px-8 bg-black bg-opacity-70 backdrop-blur-sm">
          <h2 className="text-xl md:text-2xl text-center leading-relaxed">
            <span className="font-bold text-[#f8c304] block mb-4 text-2xl md:text-3xl tracking-wide uppercase">
              Elimine as dores nas costas em apenas 2 minutos por dia
            </span>
            <span className="text-white text-opacity-90">
              Descubra o Método <span className="font-bold text-[#f8c304]">100% Natural</span> com 50 Exercícios Passo a Passo (Com Vídeos Explicativos) para Acabar com Dores Lombares, Hérnia de Disco e Tensão Muscular
            </span>
          </h2>
          
          {/* Badges de credibilidade */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center bg-black bg-opacity-50 p-2 rounded-full border border-[#f8c304]/30">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f8c304] text-black font-bold text-lg">✓</span>
              <span className="ml-2 text-[#f8c304]">Método Exclusivo</span>
            </div>
            <div className="flex items-center bg-black bg-opacity-50 p-2 rounded-full border border-[#f8c304]/30">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f8c304] text-black font-bold text-lg">✓</span>
              <span className="ml-2 text-[#f8c304]">100% Natural</span>
            </div>
            <div className="flex items-center bg-black bg-opacity-50 p-2 rounded-full border border-[#f8c304]/30">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f8c304] text-black font-bold text-lg">✓</span>
              <span className="ml-2 text-[#f8c304]">RETIRAR</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Container para os dispositivos digitais - Layout totalmente responsivo */}
      <div className="mb-16 w-full max-w-3xl mx-auto">
        {/* Desktop layout - escondido em mobile */}
        <div className="hidden md:block relative h-[500px]">
          {/* Livro - com ID único: book-cover-image */}
          <div className="absolute left-[35%] transform -translate-x-1/2 w-80 h-96 bg-black rounded-lg shadow-2xl rotate-3 border-t-8 border-r-8 border-[#f8c304] z-10">
            {/* Capa do livro */}
            <div className="absolute inset-0 bg-black rounded-l-lg rounded-br-lg flex flex-col justify-between p-6">
              <div className="text-center">
                <h3 className="text-[#f8c304] text-3xl font-bold mt-4">MÉTODO</h3>
                <h3 className="text-[#f8c304] text-3xl font-bold">COLUNA</h3>
                <h3 className="text-[#f8c304] text-3xl font-bold">VIVA</h3>
              </div>
              
              {/* Imagem principal do livro - ID: book-cover-image */}
              <div id="book-cover-image-desktop" className="flex justify-center mb-4">
                <img 
                  src="https://blogfisioterapia.com.br/wp-content/uploads/2018/01/exerc%C3%ADcios-de-rota%C3%A7%C3%A3o-capa.jpg" 
                  alt="Método Coluna Viva - Livro" 
                  className="h-52 drop-shadow-lg object-cover border border-[#f8c304]/50 rounded-md"
                />
              </div>
              
              <p className="text-right text-[#f8c304] text-sm -mt-4">DRA. CARLA VEIGA</p>
            </div>
          </div>
          
          {/* Tablet ao lado - com ID único: tablet-image */}
          <div className="absolute right-[10%] top-16 w-48 h-72 bg-black rounded-lg shadow-xl -rotate-6 z-20 border-2 border-[#f8c304]/60">
            <div className="absolute inset-0 m-1 bg-black rounded-lg flex flex-col items-center justify-between p-3">
              <div className="w-6 h-1 bg-[#f8c304]/40 rounded-full mt-1"></div>
              <div className="text-center">
                <h4 className="text-[#f8c304] text-xl font-bold">MÉTODO</h4>
                <h4 className="text-[#f8c304] text-xl font-bold">COLUNA</h4>
                <h4 className="text-[#f8c304] text-xl font-bold">VIVA</h4>
                
                {/* Imagem do tablet - ID: tablet-image */}
                <div id="tablet-image-desktop" className="mt-2 rounded-md overflow-hidden border border-[#f8c304]/30">
                  <img 
                    src="https://static.wixstatic.com/media/2b36cb_012d5be6152d480f9c17487a708d1e34~mv2.png" 
                    alt="Método Coluna Viva - Tablet" 
                    className="h-28 mx-auto object-cover"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-1 mb-1">
                <span className="w-2 h-2 bg-[#f8c304]/40 rounded-full"></span>
                <span className="w-6 h-2 bg-[#f8c304]/40 rounded-full"></span>
              </div>
            </div>
          </div>
          
          {/* Telefone em frente - com ID único: phone-image */}
          <div className="absolute right-[25%] bottom-10 w-32 h-60 bg-black rounded-2xl shadow-xl rotate-3 z-30 border-2 border-[#f8c304]/70">
            <div className="absolute inset-0 m-1 bg-black rounded-xl flex flex-col items-center justify-between p-2">
              <div className="w-4 h-1 bg-[#f8c304]/40 rounded-full mt-1"></div>
              <div className="text-center">
                <h5 className="text-[#f8c304] text-sm font-bold">MÉTODO</h5>
                <h5 className="text-[#f8c304] text-sm font-bold">COLUNA</h5>
                <h5 className="text-[#f8c304] text-sm font-bold">VIVA</h5>
                
                {/* Imagem do telefone - ID: phone-image */}
                <div id="phone-image-desktop" className="mt-1 rounded-md overflow-hidden border border-[#f8c304]/30">
                  <img 
                    src="https://blogfisioterapia.com.br/wp-content/uploads/2018/01/exerc%C3%ADcios-de-rota%C3%A7%C3%A3o-capa.jpg" 
                    alt="Método Coluna Viva - Mobile" 
                    className="h-24 mx-auto object-cover"
                  />
                </div>
              </div>
              <div className="w-8 h-1 bg-[#f8c304]/40 rounded-full mb-1"></div>
            </div>
          </div>
          
          {/* Efeito de brilho */}
          <div className="absolute left-20 top-10 w-32 h-32 bg-[#f8c304]/20 rounded-full filter blur-xl opacity-70 z-0"></div>
          <div className="absolute right-20 bottom-10 w-40 h-40 bg-[#f8c304]/20 rounded-full filter blur-xl opacity-70 z-0"></div>
        </div>
        
        {/* Mobile layout - mostrado apenas em telas pequenas */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* Livro para mobile */}
          <div className="relative w-64 h-80 bg-black rounded-lg shadow-2xl rotate-3 border-t-8 border-r-8 border-[#f8c304]">
            <div className="absolute inset-0 bg-black rounded-l-lg rounded-br-lg flex flex-col justify-between p-6">
              <div className="text-center">
                <h3 className="text-[#f8c304] text-2xl font-bold mt-4">MÉTODO</h3>
                <h3 className="text-[#f8c304] text-2xl font-bold">COLUNA</h3>
                <h3 className="text-[#f8c304] text-2xl font-bold">VIVA</h3>
              </div>
              
              <div id="book-cover-image-mobile" className="flex justify-center mb-4">
                <img 
                  src="https://blogfisioterapia.com.br/wp-content/uploads/2018/01/exerc%C3%ADcios-de-rota%C3%A7%C3%A3o-capa.jpg" 
                  alt="Método Coluna Viva - Livro" 
                  className="h-40 drop-shadow-lg object-cover border border-[#f8c304]/50 rounded-md"
                />
              </div>
              
              <p className="text-right text-[#f8c304] text-xs -mt-4">DRA. CARLA VEIGA</p>
            </div>
          </div>
          
          {/* Container para tablet e telefone lado a lado em mobile */}
          <div className="flex justify-center gap-4 w-full">
            {/* Tablet para mobile */}
            <div className="relative w-32 h-48 bg-black rounded-lg shadow-xl -rotate-6 border-2 border-[#f8c304]/60">
              <div className="absolute inset-0 m-1 bg-black rounded-lg flex flex-col items-center justify-between p-2">
                <div className="w-5 h-1 bg-[#f8c304]/40 rounded-full mt-1"></div>
                <div className="text-center">
                  <h4 className="text-[#f8c304] text-xs font-bold">MÉTODO</h4>
                  <h4 className="text-[#f8c304] text-xs font-bold">COLUNA</h4>
                  <h4 className="text-[#f8c304] text-xs font-bold">VIVA</h4>
                  
                  <div id="tablet-image-mobile" className="mt-1 rounded-md overflow-hidden border border-[#f8c304]/30">
                    <img 
                      src="https://static.wixstatic.com/media/2b36cb_012d5be6152d480f9c17487a708d1e34~mv2.png" 
                      alt="Método Coluna Viva - Tablet" 
                      className="h-16 mx-auto object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-center gap-1 mt-1 mb-1">
                  <span className="w-1.5 h-1.5 bg-[#f8c304]/40 rounded-full"></span>
                  <span className="w-4 h-1.5 bg-[#f8c304]/40 rounded-full"></span>
                </div>
              </div>
            </div>
            
            {/* Telefone para mobile */}
            <div className="relative w-20 h-36 bg-black rounded-2xl shadow-xl rotate-3 border-2 border-[#f8c304]/70">
              <div className="absolute inset-0 m-1 bg-black rounded-xl flex flex-col items-center justify-between p-1.5">
                <div className="w-3 h-0.5 bg-[#f8c304]/40 rounded-full mt-0.5"></div>
                <div className="text-center">
                  <h5 className="text-[#f8c304] text-[10px] font-bold">MÉTODO</h5>
                  <h5 className="text-[#f8c304] text-[10px] font-bold">COLUNA</h5>
                  <h5 className="text-[#f8c304] text-[10px] font-bold">VIVA</h5>
                  
                  <div id="phone-image-mobile" className="mt-0.5 rounded-md overflow-hidden border border-[#f8c304]/30">
                    <img 
                      src="https://blogfisioterapia.com.br/wp-content/uploads/2018/01/exerc%C3%ADcios-de-rota%C3%A7%C3%A3o-capa.jpg" 
                      alt="Método Coluna Viva - Mobile" 
                      className="h-12 mx-auto object-cover"
                    />
                  </div>
                </div>
                <div className="w-6 h-0.5 bg-[#f8c304]/40 rounded-full mb-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section com design aprimorado */}
      <div className="w-full max-w-3xl mx-auto">
        <div className="relative">
          {/* Background decorativo */}
          <div className="absolute inset-0 bg-[#f8c304]/10 rounded-xl transform -rotate-1"></div>
          <div className="absolute inset-0 bg-black rounded-xl transform rotate-1 border-2 border-[#f8c304]/30"></div>
          
          <div className="relative z-10 bg-black rounded-xl p-6 border border-[#f8c304]/50">
            {/* Mensagem de urgência */}
            <div className="flex items-center justify-center bg-[#f8c304]/10 p-2 rounded-lg mb-4">
              <svg className="w-6 h-6 text-[#f8c304] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-[#f8c304] font-semibold animate-pulse">
                Oferta por tempo limitado - Acesso imediato ao conteúdo
              </p>
            </div>
            
            {/* Botão CTA principal */}
            <button className="w-full py-5 px-8 bg-gradient-to-r from-[#f8c304] to-[#ffd700] hover:from-[#ffd700] hover:to-[#f8c304] text-black text-xl md:text-2xl font-bold rounded-lg shadow-lg transform hover:scale-105 hover:scale-95 transition-all duration-300 uppercase tracking-wider">
              Quero acabar com minhas dores agora!
            </button>
            
            {/* Selos de garantia/segurança */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#f8c304]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-white text-sm">Compra Segura</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#f8c304]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                </svg>
                <span className="ml-1 text-white text-sm">Satisfação Garantida</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#f8c304]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-white text-sm">Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;