Vue.component('Error', {
    props: {
        text: {
            type: String,
            default: 'Error occurred',
        }
    },
    template: `<div class="error">{{ text }}</div>`
});
