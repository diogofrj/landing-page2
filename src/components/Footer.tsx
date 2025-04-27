import * as React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#103259] to-[#0b2241] text-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img 
              src="/src/logo.png" 
              alt="Instituto Carla Veiga" 
              className="h-12 mb-4"
            />
            <p className="text-sm text-gray-300">
              Transformando vidas através do método Coluna Viva
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-[#f8c304] font-bold mb-3">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sobre o Método</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#f8c304] font-bold mb-3">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Instituto Carla Veiga. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4 mt-3">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;