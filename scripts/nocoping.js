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
        
        // Отключение Ctrl+U
        if (e.ctrlKey && e.keyCode == 85) {
            return false;
        }
        
        // Отключение Print Screen
        if (e.keyCode == 44) {
            return false;
        }
    };
})();
