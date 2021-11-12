const tabs = [
    {
        'title': 'Ukraine',
        'content': ['Kyiv', 'Lviv', 'Kharkiv']
    },
    {
        'title': 'Great Britain',
        'content': ['London', 'Manchester', 'Cambridge']
    },
    {
        'title': 'Germany',
        'content': ['Berlin', 'Munchen', 'Hamburg']
    }
];

const styles = ['grey', 'blue', 'red'];

const app = new Vue({
    el: '#app',
    data: {
        tabs: tabs,
        activeIndex: 0,
        tabsClass: 'tabs',
        tabsClassStyle: styles[0],
        tabsNavClass: 'tabs-nav',
        tabsContentClass: 'tabs-content',
        styles: styles,
    },
    methods: {
        tabItemClass(i) {
            return {
                active: i === this.activeIndex,
                'tab-item': true
            }
        },
        setActive(i) {
            this.activeIndex = i;
        },
        setStyle(style) {
            this.tabsClassStyle = style;
        }
    }
});
