document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('alertButton');
    
    button.addEventListener('click', function() {
        // Cute alert message with emoji
        alert('Yay! You clicked me! 🎀\n\nGood job exploring JavaScript! ✨');
        
        // More playful color changes
        this.style.backgroundColor = '#ff85a2'; // Pink
        this.style.color = 'white';
        
        // Add temporary heart emoji
        const heart = document.createElement('span');
        heart.textContent = ' ❤️';
        this.appendChild(heart);
        
        // Reset after 1 second
        setTimeout(() => {
            this.style.backgroundColor = '#a6e1fa';
            this.style.color = '#5a5a5a';
            heart.remove();
            
            // Little bounce effect
            this.style.transform = 'translateY(0)';
        }, 1000);
    });
    
    // Bonus: Add cute hover effect to links
    const links = document.querySelectorAll('.links-section a');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        link.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});