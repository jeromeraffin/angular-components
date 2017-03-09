// importation header.html
import template from './header.html';

export const HeaderComponent = {
    bindings: {
        label: '@',
        link: '@',
        color: '@',
        size: '@'
    },
    template,
    controller: class HeaderComponent {
        constructor() {
            this.jir="hello";
        }
    }
};