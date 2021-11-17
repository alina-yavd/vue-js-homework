const Contact = {
    props: {
        item: {
            type: Object,
            default: {},
        }
    },
    template: `<div class="item-inner">
        <img :src="item.imageUrl" :alt="item.firstName + ' ' + item.lastName">
        <h3>{{ item.firstName + ' ' + item.lastName }}</h3>
        <p><b>Phone: {{ item.phone }}</b></p>
        <div class="id">ID: {{ item.id }}</div>
    </div>`
}
