// Profile page logic

document.addEventListener('DOMContentLoaded', function() {
    setupUserMenu();
});

function setupUserMenu() {
    var menuButton = document.getElementById('user-menu-button');
    var dropdown = document.getElementById('user-dropdown');
    
    if (!menuButton || !dropdown) return;
    
    menuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        var isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block';
    });
    
    document.addEventListener('click', function() {
        dropdown.style.display = 'none';
    });
}
