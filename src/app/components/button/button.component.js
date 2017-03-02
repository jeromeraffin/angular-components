import template from './button.html';

export const ButtonComponent = {
    bindings: {
        label: '@',
        link: '@',
        color: '@',
        size: '@'
    },
    template,
    controller: class ButtonComponent {
        constructor() {

        }
    }
};
