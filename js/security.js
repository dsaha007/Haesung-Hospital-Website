
        // Disable right-click and text selection
        document.addEventListener('contextmenu', event => event.preventDefault());

        // Disable keyboard shortcuts
        document.onkeydown = function(e) {
            if(e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
                return false;
            }
        };

        // Disable saving page
        document.addEventListener('DOMContentLoaded', function() {
            document.addEventListener('keydown', function(e) {
                if(e.keyCode == 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
                    e.preventDefault();
                }
            });

            document.addEventListener('keydown', function(e) {
                if(e.keyCode == 85 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
                    e.preventDefault();
                }
            });
        });

        // Disable developer tools
        document.addEventListener('keydown', function(e) {
            if (e.keyCode == 123) {
                e.preventDefault();
            }
        });

        //window.addEventListener('blur', function() {
        //     window.location.href = 'alert.html';
        //});
    
