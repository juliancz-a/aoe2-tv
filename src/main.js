import './styles/main.scss'
import "flag-icons/css/flag-icons.min.css";

document.querySelectorAll('.sidebar__dropdown').forEach(dropdown => {
    const select = dropdown.querySelector('.sidebar__dropdown-select');
    const menu = dropdown.querySelector('.sidebar__dropdown-menu');
    const displaySpan = select.querySelector('span');
    const input = dropdown.querySelector('input[type="hidden"]');

    // Show/hide menu
    select.addEventListener('click', e => {
        e.stopPropagation();
        dropdown.classList.toggle('sidebar__dropdown--active');
    });

    // Hide when unfocus
    document.addEventListener('click', () => {
        dropdown.classList.remove('sidebar__dropdown--active');
    });

    // Setup option
    menu.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', e => {
            e.stopPropagation();
            displaySpan.textContent = item.textContent;
            input.value = item.id;
            dropdown.classList.remove('sidebar__dropdown--active');
        });
    });

    // Setup default option
    const defaultOption = menu.querySelector('li[data-default]');
    if (defaultOption) {
        displaySpan.textContent = defaultOption.textContent;
        input.value = defaultOption.id;
    }
});

