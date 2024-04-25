/**
 * @jest-environment jsdom
 */

import createButtons from "./createButtons.js";


describe(' create a button', () => {
    const button = createButtons({id: 'all', text: 'All'})
    it('nodeName', () => {
        expect(button.nodeName).toEqual('BUTTON');
    })
    it('id => all', () => {
        expect(button.id).toEqual('all');
    });
    it('class name => filter-btn', () => {
        expect(button.className).toEqual('filter-btn');
    });
    it('type => button', () => {
        expect(button.type).toEqual('button');
    });
    it('innerText => All', () => {
        expect(button.innerText).toEqual('All');
    });
});
