Vue.component('Btn', {
    props: {
        name: {
            type: String,
            default: 'button',
        }
    },
    methods: {},
    template: `<button type="button">{{ name }}</button>`
});
