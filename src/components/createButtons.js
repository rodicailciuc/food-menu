/**
 * Creates a button element for filtering items.
 *
 *
 * @param {Object} btn - An object containing information about a button.
 * @returns {HTMLButtonElement} - The created button element for filtering items.
 */

import filterItems from '../handlers/filterItems.js';

const createButtons = (btn) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = btn.id;
    button.classList.add('filter-btn');
    button.innerText = btn.text;

    button.addEventListener('click', () => {
        const id = button.id;
        filterItems(id);
    });

    return button;
};

export default createButtons;
