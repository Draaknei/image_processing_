document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll('.btn-filter');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const iframes = document.querySelectorAll('.thumb-video');
            const filterName = btn.getAttribute('data-filter');

            iframes.forEach(iframe => {
                iframe.className = 'thumb-video'; 
                if (filterName !== 'normal') {
                    iframe.classList.add(`filter-${filterName}`);
                }
            });
        });
    });

});