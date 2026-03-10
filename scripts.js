document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Course Catalog Tabs
    const tablinks = document.querySelectorAll('.tablink');
    const tabcontents = document.querySelectorAll('.tabcontent');

    if (tablinks.length > 0) {
        // Initialize: Show first tab content and set first link to active
        tabcontents.forEach(content => content.style.display = 'none');
        if (tabcontents[0]) tabcontents[0].style.display = 'block';
        if (tablinks[0]) tablinks[0].classList.add('active');

        tablinks.forEach(link => {
            link.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Hide all contents and remove active class from all links
                tabcontents.forEach(content => content.style.display = 'none');
                tablinks.forEach(l => l.classList.remove('active'));
                
                // Show selected content and set link to active
                const selectedTab = document.getElementById(tabId);
                if (selectedTab) {
                    selectedTab.style.display = 'block';
                    this.classList.add('active');
                }
            });
        });
    }

    // Expandable FAQs
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (answer) {
                const isVisible = answer.style.display === 'block';
                answer.style.display = isVisible ? 'none' : 'block';
            }
        });
    });
});
