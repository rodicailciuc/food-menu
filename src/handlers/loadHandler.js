import data from '../data.js';
import dom from '../dom.js';
import createButtons from '../components/createButtons.js';
import createItems from '../components/createItems.js';

const loadHandler = () => {
    data.buttons.forEach((btn) => {
        const button = createButtons(btn);
        dom.buttonsContainer.append(button);
    });

    data.menu.forEach((item) => {
        const article = createItems(item);
        dom.menuItems.append(article);
    });
};

export default loadHandler;
