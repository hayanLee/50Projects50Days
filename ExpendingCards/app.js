const $container = document.querySelector('.container');
const $items = document.querySelectorAll('.itemBox');

const toggleActive = (item) => {
    if (!item.classList.contains('active')) {
        $items.forEach((i) => i.classList.remove('active'));
        item.classList.toggle('active');
    } else {
        item.classList.remove('active');
    }
};

$container.addEventListener('click', (e) => {
    const clickedItem = e.target.closest('.itemBox');
    if (clickedItem) toggleActive(clickedItem);
});
