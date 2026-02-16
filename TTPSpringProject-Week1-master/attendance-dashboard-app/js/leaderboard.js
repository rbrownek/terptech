// Leaderboard page logic

document.addEventListener('DOMContentLoaded', function() {
    renderLeaderboard();
    setupUserMenu();
});

function renderLeaderboard() {
    var tbody = document.getElementById('leaderboard-body');
    
    if (!tbody) return;
    
    // Generate HTML for each row
    var rowsHtml = mockLeaderboardData.map(function(entry) {
        return '<tr>' +
            '<td>' + entry.username + '</td>' +
            '<td>' + entry.year + '</td>' +
            '<td>' + entry.major + '</td>' +
            '<td>' + entry.main_club + '</td>' +
            '<td>' + entry.num_events_attended + '</td>' +
        '</tr>';
    }).join('');
    
    tbody.innerHTML = rowsHtml;
}

function setupUserMenu() {
    var menuButton = document.getElementById('user-menu-button');
    var dropdown = document.getElementById('user-dropdown');
    
    if (!menuButton || !dropdown) return;
    
    menuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        var isVisible = dropdown.style.display === 'block';
        dropdown.style.display = isVisible ? 'none' : 'block';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        dropdown.style.display = 'none';
    });
}
