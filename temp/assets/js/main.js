document.addEventListener('DOMContentLoaded', function() {
    // Inicialização da página
    initFAQAccordion();
    initSmoothScroll();
    initFixedHeader();
});

// Funcionalidade de acordeão para as perguntas frequentes
function initFAQAccordion() {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Fechar todos os itens abertos
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Se o item clicado não estava ativo, abri-lo
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// Funcionalidade de rolagem suave para as âncoras
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Funcionalidade de cabeçalho fixo
function initFixedHeader() {
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.classList.add('fixed');
            document.body.style.paddingTop = `${headerHeight}px`;
        } else {
            header.classList.remove('fixed');
            document.body.style.paddingTop = '0';
        }
    });
}

// Contador regressivo para criar senso de urgência (opcional)
function initCountdown() {
    // Define a data final (24 horas a partir do momento atual)
    const endDate = new Date();
    endDate.setHours(endDate.getHours() + 24);
    
    const countdownElement = document.querySelector('.countdown');
    if (!countdownElement) return;
    
    function updateCountdown() {
        const now = new Date();
        const diff = endDate - now;
        
        if (diff <= 0) {
            countdownElement.innerHTML = "Oferta encerrada!";
            return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-value">${hours.toString().padStart(2, '0')}</span>
                <span class="countdown-label">Horas</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-value">${minutes.toString().padStart(2, '0')}</span>
                <span class="countdown-label">Minutos</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-value">${seconds.toString().padStart(2, '0')}</span>
                <span class="countdown-label">Segundos</span>
            </div>
        `;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Animação de elementos ao rolar a página
function initScrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    function checkVisibility() {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verificar visibilidade inicial
} 