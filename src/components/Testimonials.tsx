import { useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';

// Tipo para os depoimentos reais
interface RealTestimonial {
  id: string;
  name: string;
  imagePath: string;
}

function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<RealTestimonial | null>(null);
  
  // Configuração do carrossel
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    slidesToScroll: 1,
    align: "start"
  });

  // Lista de depoimentos reais com imagens
  const realTestimonials: RealTestimonial[] = [
    { id: "1", name: "Vinicius da Costa", imagePath: "/assets/images/testmonials/viniludcosta.jpg" },
    { id: "2", name: "Vinicius Silva", imagePath: "/assets/images/testmonials/viniciussilva.jpg" },
    { id: "3", name: "Vanessa Valente", imagePath: "/assets/images/testmonials/vanessavalente.jpg" },
    { id: "4", name: "Taelise Rodriguez", imagePath: "/assets/images/testmonials/taeliserodriguez.jpg" },
    { id: "5", name: "Rosalia Mello", imagePath: "/assets/images/testmonials/rosaliamello.jpg" },
    { id: "6", name: "Nathalia Cunha", imagePath: "/assets/images/testmonials/nathaliacunha.jpg" },
    { id: "7", name: "Marcio Bello", imagePath: "/assets/images/testmonials/marciobello.jpg" },
    { id: "8", name: "Luciano Mendes", imagePath: "/assets/images/testmonials/lucianomendes.jpg" },
    { id: "9", name: "Luciana Lima", imagePath: "/assets/images/testmonials/lucianalima.jpg" },
    { id: "10", name: "Diego Santos", imagePath: "/assets/images/testmonials/diegosantos.jpg" },
    { id: "11", name: "Cintia Pinheiro", imagePath: "/assets/images/testmonials/cintiapinheiro.jpg" },
    { id: "12", name: "Beto Marinho", imagePath: "/assets/images/testmonials/betomarinho.jpg" },
    { id: "13", name: "Anderson Galvão", imagePath: "/assets/images/testmonials/andersongalvao.jpg" },
  ];

  // Funções para controlar o carrossel
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  
  // Função para abrir o modal com a imagem ampliada
  const openTestimonial = (testimonial: RealTestimonial) => {
    setSelectedTestimonial(testimonial);
    // Desativa o scroll do body quando o modal está aberto
    document.body.style.overflow = "hidden";
  };

  // Função para fechar o modal
  const closeTestimonial = () => {
    setSelectedTestimonial(null);
    // Reativa o scroll do body quando o modal é fechado
    document.body.style.overflow = "auto";
  };

  return (
    <div className="w-full px-4 py-16 bg-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-[#f8c304]">
          Depoimentos de quem já experimentou
        </h2>
        <div className="w-24 h-1 bg-[#f8c304] mx-auto mb-4"></div>
        <p className="text-white max-w-2xl mx-auto">
          Veja o que nossos clientes estão dizendo sobre o Método Coluna Viva e os resultados obtidos
        </p>
      </div>

      {/* Swiper Container */}
      <div className="max-w-6xl mx-auto">
        <h3 className="title text-[#f8c304] text-xl mb-4">Depoimentos de nossos clientes</h3>
        
        {/* Embla Carousel */}
        <div className="relative">
          {/* Botões de navegação */}
          <button 
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-[#f8c304] text-white hover:text-black rounded-full p-2 focus:outline-none"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {realTestimonials.map((item) => (
                <div 
                  key={item.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] px-2"
                >
                  <div className="slide-item bg-[#111] rounded-lg overflow-hidden border border-[#f8c304]/20 h-auto">
                    <div 
                      className="cursor-pointer relative overflow-hidden"
                      onClick={() => openTestimonial(item)}
                    >
                      <img 
                        src={item.imagePath} 
                        alt={`Depoimento de ${item.name}`}
                        className="w-full hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="text-[#f8c304] font-medium">{item.name}</h4>
                      <div className="flex gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-[#f8c304] text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={scrollNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-[#f8c304] text-white hover:text-black rounded-full p-2 focus:outline-none"
            aria-label="Próximo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Paginação */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(realTestimonials.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  className="w-3 h-3 rounded-full bg-[#f8c304]/30 hover:bg-[#f8c304]"
                  onClick={() => emblaApi?.scrollTo(index * 4)}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal para exibir a imagem ampliada */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 overflow-auto">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={closeTestimonial}
              className="absolute right-4 top-4 z-10 text-white hover:text-[#f8c304] bg-black/50 rounded-full p-2 sticky"
              aria-label="Fechar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            
            <div className="mt-2">
              <img 
                src={selectedTestimonial.imagePath} 
                alt={`Depoimento de ${selectedTestimonial.name}`}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonials;