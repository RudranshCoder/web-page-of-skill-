function goToPage2() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
    window.scrollTo(0, 0);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });

            this.classList.add('active');

            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

function toggleExpand(videoId) {
    const videoCard = document.getElementById(videoId);
    const allVideoCards = document.querySelectorAll('.video-card');
    const button = videoCard.querySelector('.expand-btn');

    if (videoCard.classList.contains('expanded')) {
        videoCard.classList.remove('expanded');
        button.textContent = 'Expand';
    } else {
        allVideoCards.forEach(card => {
            card.classList.remove('expanded');
            card.querySelector('.expand-btn').textContent = 'Expand';
        });

        videoCard.classList.add('expanded');
        button.textContent = 'Collapse';

        videoCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function openVideo(url) {
    window.open(url, '_blank');
}

const contactNumber = '7058757095';
const internationalNumber = '917058757095';
const whatsappMessage = encodeURIComponent('how can i get more information on this');

function openContact(type) {
    if (type === 'call') {
        window.location.href = `tel:+${internationalNumber}`;
    } else if (type === 'whatsapp') {
        window.open(`https://wa.me/${internationalNumber}?text=${whatsappMessage}`, '_blank');
    }
}

