document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Tabs
    const tablinks = document.querySelectorAll('.tablink');
    const tabcontents = document.querySelectorAll('.tabcontent');

    function openTab(evt, tabName) {
        tabcontents.forEach(tabcontent => {
            tabcontent.style.display = 'none';
        });

        tablinks.forEach(tablink => {
            tablink.className = tablink.className.replace(' active', '');
        });

        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className += ' active';
    }

    window.openTab = openTab;

    // Expandable FAQs
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});