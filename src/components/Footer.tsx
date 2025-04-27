import * as React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img 
              src="/src/logo.png" 
              alt="Instituto Carla Veiga" 
              className="h-12 mb-4"
            />
            <p className="text-sm text-gray-300">
            Este produto não garante que você ficará livre das dores na coluna, mas oferece as ferramentas e estratégias necessárias para aliviar suas dores, recuperar a mobilidade e fortalecer sua coluna de maneira eficaz.<br></br>
            Os resultados podem variar de acordo com o esforço e dedicação de cada pessoa, mas com comprometimento e consistência, o Método Coluna Viva pode transformar sua rotina e qualidade de vida.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-[#f8c304] font-bold mb-3">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
                <li><a href="#method" className="text-gray-300 hover:text-white transition-colors">Sobre o Método</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#professional-intro" className="text-gray-300 hover:text-white transition-colors">Fisioterapeuta</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#f8c304] font-bold mb-3">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/fisiocarlaveiga/" className="text-gray-300 hover:text-white transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://www.facebook.com/fisiocarlaveiga" className="text-gray-300 hover:text-white transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="https://www.youtube.com/@Fisiocarlaveiga" className="text-gray-300 hover:text-white transition-colors">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                {/* <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <i className="fab fa-whatsapp text-xl"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Dra. Carla Veiga. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4 mt-3">
            <a href="" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span>|</span>
            <a href="" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;