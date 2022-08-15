export class Section {
    constructor({items, renderer}, selector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    setItem(element) {
        this._container.prepend(element);
    }

    renderItems(items) {
        items.reverse().forEach((item) => {
            this._renderer(item);
        });
    }
}