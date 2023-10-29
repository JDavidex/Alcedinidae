document.addEventListener("mousemove", function (e) {
    if (window.innerWidth > 1024) {
        const bird = document.querySelector('.bird');
        const content = document.querySelector('.content');

        bird.style.right = 100 + e.pageX/1.9 + 'px';
        content.style.left = 100 + e.pageX/2.6 + 'px';
    }
});