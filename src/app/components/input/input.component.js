import template from './input.html';

export const InputComponent = {
    bindings: {
        label: '@',
        type: '@'
    },
    template,
    controller: class InputComponent {
        constructor() {

        }
    }
};
