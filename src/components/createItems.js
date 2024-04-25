/**
 * Creates a DOM element representing a menu item.
 *
 *
 * @param {Object} item - An object containing information about a menu item.
 * @returns {HTMLElement} - The created article element representing the menu item.
 */



const createItems = (item) => {
    const article = document.createElement('article');
    article.classList.add('menu-item', item.category);

 
    // image
    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = item.src;
    img.alt = item.title;

    // item info
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    article.append(img, itemInfo);

    // header
    const header = document.createElement('header');

    // title
    const title = document.createElement('h4');
    title.innerText = item.title;

    // price
    const price = document.createElement('h4');
    price.classList.add('price');
    price.innerText = `$${item.price}`;

    header.append(title, price);

    // description
    const description = document.createElement('p');
    description.classList.add('item-text');
    description.innerText = item.desc;

    itemInfo.append(header, description);

    article.addEventListener('mouseover', () => {
        img.classList.add('action');
    });

    article.addEventListener('mouseout', () => {
        img.classList.remove('action');
    });
    return article;
}

export default createItems;