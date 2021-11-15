Vue.component('Wrapper', {
    inheritAttrs: false,
    props: {
        wrapclass: {
            type: String,
            default: 'wrapper'
        }
    },
    template: `<div :class="wrapclass"><slot></slot></div>`
});
