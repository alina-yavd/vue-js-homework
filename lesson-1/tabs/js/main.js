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

const renderTabs = function () {
    const tabsEl = document.createElement('div');
    const tabsNav = document.createElement('div');
    const tabsContent = document.createElement('div');
    tabsEl.className = 'tabs grey';
    tabsNav.className = 'tabs-nav';
    tabsContent.className = 'tabs-content';

    const renderLinks = function () {
        for (let i = 0; i < tabs.length; i++) {
            let tabNavEl = document.createElement('div');
            let tabTitle = document.createElement('h3');

            tabNavEl.className = 'tab-item';
            tabTitle.innerText = tabs[i].title;
            if (i === 0) tabNavEl.classList.add('active');

            tabNavEl.appendChild(tabTitle);
            tabsNav.appendChild(tabNavEl);
        }
        tabsEl.appendChild(tabsNav);
    }

    const renderContent = function () {
        for (let i = 0; i < tabs.length; i++) {
            let tabContentEl = document.createElement('div');
            tabContentEl.className = 'tab-item';

            let tabItems = tabs[i].content.map(function (item) {
                let el = document.createElement('li');
                el.innerText = item;
                return el;
            });
            let tabContentList = document.createElement('ul');
            for (let j = 0; j < tabItems.length; j++) {
                tabContentList.appendChild(tabItems[j]);
            }
            if (i === 0) tabContentEl.classList.add('active');

            tabContentEl.appendChild(tabContentList);
            tabsContent.appendChild(tabContentEl);
        }
        tabsEl.appendChild(tabsContent);
    }

    renderLinks();
    renderContent();
    document.querySelector('#app').appendChild(tabsEl);
}

const activateTabs = function () {
    const activate = function (tab) {
        let tabNavigationLinks = tab.querySelectorAll('.tabs-nav .tab-item');
        let tabContentContainers = tab.querySelectorAll('.tabs-content .tab-item');
        let activeIndex = 0;

        const handleClick = function (link, index) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                goToTab(index);
            });
        }

        const goToTab = function (index) {
            if (index !== activeIndex && index <= tabNavigationLinks.length) {
                tabNavigationLinks[activeIndex].classList.remove('active');
                tabNavigationLinks[index].classList.add('active');
                tabContentContainers[activeIndex].classList.remove('active');
                tabContentContainers[index].classList.add('active');
                activeIndex = index;
            }
        }

        for (let i = 0; i < tabNavigationLinks.length; i++) {
            let link = tabNavigationLinks[i];
            handleClick(link, i);
        }
    }

    let tabs = document.querySelectorAll('.tabs');
    for (let i = 0; i < tabs.length; i++) {
        activate(tabs[i]);
    }
}

const renderButtons = function () {
    const buttonsEl = document.createElement('div');
    buttonsEl.className = 'styles';
    for (let i = 0; i < styles.length; i++) {
        const buttonEl = document.createElement('button');
        buttonEl.type = 'button';
        buttonEl.dataset.style = styles[i];
        buttonEl.innerText = styles[i] + ' style';
        buttonEl.onclick = function () {
            setStyle(this.dataset.style);
        }
        buttonsEl.appendChild(buttonEl);
    }
    document.querySelector('#app').appendChild(buttonsEl);
}

function setStyle(style) {
    let tabs = document.querySelectorAll('.tabs');
    tabs.forEach(function (tabEl) {
        for (let i = 0; i < styles.length; i++) {
            tabEl.classList.remove(styles[i]);
        }
        tabEl.classList.add(style);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    renderTabs();
    activateTabs();
    renderButtons();
});
