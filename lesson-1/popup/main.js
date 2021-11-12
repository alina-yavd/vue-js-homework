const styles = ['grey', 'blue', 'red'];

const app = new Vue({
    el: '#app',
    data: {
        popupActive: false,
        popupClass: 'popup',
        popupClassStyle: styles[0],
        styles: styles,
    },
    methods: {
        setStyle(style) {
            this.popupClassStyle = style;
        },
        togglePopup() {
            this.popupActive = !this.popupActive;
        }
    }
});
