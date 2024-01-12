      document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });
    
    // Initialize Lottie animation
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lottie-animation'), // Required
        path: 'https://lottie.host/7810fcef-4b08-46aa-bacd-168e8d7b9196/5UtQBcbbG1.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
    });
