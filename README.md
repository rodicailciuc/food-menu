# Image gallery

> A simple food menu project

## Table of contents

- [Image gallery](#image-gallery)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Status](#status)
  - [Contact](#contact)

## General info

> The objective of the project is to practice separation of concern in
> JavaScript.

## Screenshots

![Example screenshot](./assets/Capture%20d’écran%202024-04-25%20095140.png)

## Technologies

- JavaScript
- HTML5
- CSS3
- VSC code

## Setup

clone the repo and start using the stop watch.

## Code Examples

```js
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
```

## Status

Project is: _in progress_


## Contact

[Rodica](https://github.com/rodicailciuc)
