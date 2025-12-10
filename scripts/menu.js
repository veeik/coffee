document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const nav = document.querySelector('.navigation');
    const headerContent = document.querySelector('.header-content');

    if (!nav || !headerContent) return;

    let menuToggle = null;
    let overlay = null;

    // Функция закрытия меню
    function closeMenu() {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // Функция удаления бургер-меню
    function removeMenuToggle() {
        if (menuToggle) {
            menuToggle.remove();
            menuToggle = null;
        }
        if (overlay) {
            overlay.remove();
            overlay = null;
        }
        closeMenu();
    }

    // Функция создания и добавления бургер-меню
    function createMenuToggle() {
        if (menuToggle) return;

        menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.setAttribute('aria-label', 'Открыть меню');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

        // Обработчик открытия/закрытия
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            const isActive = nav.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
        });

        // Обработчики кликов по ссылкам
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', handleEscapeKey);

        headerContent.appendChild(menuToggle);
    }

    function handleEscapeKey(e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            closeMenu();
        }
    }

    // Основная логика переключения режима
    function checkScreenSize() {
        if (window.innerWidth < 768) {
            createMenuToggle();
            nav.style.display = 'block'; 
        } else {
            removeMenuToggle();
            nav.style.display = '';
            nav.classList.remove('active');
        }
    }

    checkScreenSize();

    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(checkScreenSize, 150);
    });
});