document.addEventListener("DOMContentLoaded", function() {
    // 1. Check if Tailwind is loaded, if not, inject it (Safety net)
    if (!document.querySelector('script[src*="tailwindcss"]')) {
        const script = document.createElement('script');
        script.src = "https://cdn.tailwindcss.com";
        document.head.appendChild(script);
    }

    // 2. Define FontAwesome (Safety net)
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
        document.head.appendChild(link);
    }

    // 3. Render Navbar
    const menuContainer = document.getElementById('main-menu-container');
    if(menuContainer) {
        menuContainer.innerHTML = `
            <div class="relative z-50">
                <button id="menuBtn" onclick="toggleMenu()" class="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all shadow-sm">
                    <i class="fas fa-bars text-lg"></i>
                </button>

                <!-- Dropdown -->
                <div id="mainMenu" class="hidden absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl py-2 transform origin-top-right transition-all border border-gray-100">
                    
                    <div class="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                        <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Navigation</span>
                    </div>

                    <a href="dashboard.html" class="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors gap-3">
                        <div class="w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center">
                            <i class="fas fa-th-large text-sm"></i>
                        </div>
                        <span class="font-medium">Dashboard</span>
                    </a>

                    <a href="data-View.html" class="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors gap-3">
                        <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                            <i class="fas fa-user-graduate text-sm"></i>
                        </div>
                        <span class="font-medium">Student Database</span>
                    </a>

                    <div class="px-4 py-2 border-t border-gray-100 border-b bg-gray-50/50 mt-1">
                        <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Tools</span>
                    </div>

                    <a href="Hw.html" class="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors gap-3">
                        <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                            <i class="fas fa-paper-plane text-sm"></i>
                        </div>
                        <span class="font-medium">HW Sender</span>
                    </a>

                    <a href="attendance.html" class="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors gap-3">
                        <div class="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                            <i class="fas fa-clock text-sm"></i>
                        </div>
                        <span class="font-medium">Attendance Sender</span>
                    </a>

                    <a href="https://ermathexpert.online/wp-admin/post.php?post=72364&action=edit&currentTab=learndash_course_builder" target="_blank" class="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors gap-3">
                        <div class="w-8 h-8 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center">
                            <i class="fas fa-tools text-sm"></i>
                        </div>
                        <span class="font-medium">Exams Builder</span>
                    </a>
                </div>
            </div>
        `;
    }
});

// Logic
window.toggleMenu = function() {
    const menu = document.getElementById("mainMenu");
    const btn = document.getElementById("menuBtn");
    
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.classList.add("animate-fade-in-down");
        // Icon change
        btn.innerHTML = '<i class="fas fa-times text-lg"></i>';
        btn.classList.add('bg-white/40');
    } else {
        menu.classList.add("hidden");
        menu.classList.remove("animate-fade-in-down");
        btn.innerHTML = '<i class="fas fa-bars text-lg"></i>';
        btn.classList.remove('bg-white/40');
    }
}

// Close on click outside
window.onclick = function(event) {
    const menu = document.getElementById("mainMenu");
    const btn = document.getElementById("menuBtn");
    if (!menu || !btn) return;

    if (!btn.contains(event.target) && !menu.contains(event.target)) {
        if (!menu.classList.contains("hidden")) {
            menu.classList.add("hidden");
            btn.innerHTML = '<i class="fas fa-bars text-lg"></i>';
            btn.classList.remove('bg-white/40');
        }
    }
}
