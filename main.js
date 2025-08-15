        // JavaScript for mobile menu toggle
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // JavaScript for smooth scrolling (in case the browser doesn't support 'scroll-behavior: smooth')
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // Prevent default anchor click behavior
                e.preventDefault();

                // Get the target element
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                // Check if the target element exists
                if (targetElement) {
                    // Use a function for smooth scrolling
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });