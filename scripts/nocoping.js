(function() {
    'use strict';
    
    // Блокировка контекстного меню
    document.oncontextmenu = function() {
        return false;
    };
    
    // Блокировка выделения
    document.onselectstart = function() {
        return false;
    };
    
    // Блокировка перетаскивания
    document.ondragstart = function() {
        return false;
    };

    document.onkeydown = function(e) {
        e = e || window.event;
        
        // Отключение DevTools
        if (e.ctrlKey && e.shiftKey && [73,74,67].includes(e.keyCode)) {
            return false;
        }
        
        // Отключение Ctrl+U
        if (e.ctrlKey && e.keyCode == 85) {
            return false;
        }
        
        // Отключение Print Screen
        if (e.keyCode == 44) {
            return false;
        }
    };
    
    // Защита от отключения JavaScript через DevTools
    setInterval(function() {
        debugger;
    }, 1000);
})();