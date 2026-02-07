document.addEventListener('DOMContentLoaded', () => {
    const bgAnimation = document.getElementById('background-animation');

    // Create floating bubbles
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        // Random size
        const size = Math.random() * 80 + 20 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;

        // Random position
        bubble.style.left = Math.random() * 100 + '%';

        // Random animation duration
        const duration = Math.random() * 10 + 5 + 's';
        bubble.style.animationDuration = duration;

        // Random animation delay
        const delay = Math.random() * 5 + 's';
        bubble.style.animationDelay = delay;

        bgAnimation.appendChild(bubble);

        // Remove after animation completes
        // Calculate milliseconds from seconds string
        const durationMs = parseFloat(duration) * 1000;
        const delayMs = parseFloat(delay) * 1000;

        setTimeout(() => {
            bubble.remove();
        }, durationMs + delayMs + 100);
    }

    // Create initial bubbles
    for(let i = 0; i < 15; i++) {
        createBubble();
    }

    // Continuously create bubbles
    setInterval(createBubble, 1000);


    // Add 3D tilt effect to cards
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});
