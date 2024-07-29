document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.imgtt .imgt');
    const largeImage = document.querySelector('.large-img img');
    const testimonials = [
        {
            name: "Harshvardhan Upadhaya",
            title: "Long Term Investor",
            text: "Great work!!! The team was solid, efficient and knowledgeable. They did an amazing job on my very challenging app. I will be using them again. Thank you for doing such a great job!"
        },
        {
            name: "John Doe",
            title: "Entrepreneur",
            text: "Fantastic service! The team provided excellent support and delivered a top-notch product. I highly recommend them."
        },
        {
            name: "Jane Smith",
            title: "Startup Founder",
            text: "A pleasure to work with! Their expertise and professionalism exceeded my expectations. I'm very happy with the results."
        },
        {
            name: "Michael Johnson",
            title: "Tech Enthusiast",
            text: "The team was great at understanding my needs and delivering a solution that worked perfectly. Excellent job!"
        }
    ];

    function updateImages() {
        // Update the large image
        largeImage.src = images[currentIndex].src;

        // Update the testimonials text
        const testimonial = testimonials[currentIndex];
        document.querySelector('.name').textContent = testimonial.name;
        document.querySelector('.name1').textContent = testimonial.title;
        document.querySelector('.name2').textContent = testimonial.text;

        // Update the smaller images visibility
        images.forEach((img, index) => {
            img.style.display = (index === currentIndex) ? 'none' : 'inline-block';
        });
    }

    function slideRight() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImages();
    }

    function slideLeft() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImages();
    }

    document.querySelector('.btnn1').addEventListener('click', slideRight);
    document.querySelector('.btnn2').addEventListener('click', slideLeft);

    updateImages(); // Initialize the first set of images and text
});
