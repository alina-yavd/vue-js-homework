Vue.component('NotFound', {
    props: {
        text: {
            type: String,
            default: 'Not found',
        }
    },
    template: `<div class="not-found">{{ text }}</div>`
});
