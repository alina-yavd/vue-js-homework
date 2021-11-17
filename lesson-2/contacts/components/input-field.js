Vue.component('InputField', {
    props: {
        name: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        label: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        }
    },
    methods: {},
    template: `<div class="field-item">
        <label>
            <span class="label">{{ label }}:</span>
            <input :type="type" :name="name" :value="value" v-on:input="$emit('input', $event.target.value)">
        </label>
    </div>`
});
