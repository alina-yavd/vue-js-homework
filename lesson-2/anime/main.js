const app = new Vue({
    el: '#app',
    data: {
        anime: [],
        animeAll: [],
        animeSelected: null,
        filters: [
            {type: 'top-ten', name: 'Top 10'},
            {type: 'reverse', name: 'Reverse'},
            {type: 'type-movie', name: 'Type: Movie'},
            {type: 'type-tv', name: 'Type TV'},
        ],
        filterType: '',
        filterId: null,
        showPreloader: true,
        showNotFound: false,
        showError: false,
    },
    computed: {
        animeFiltered() {
            switch (this.filterType) {
                case 'top-ten':
                    return this.anime.filter(item => (item.rank <= 10));
                case 'reverse':
                    return this.anime.reverse();
                case 'type-movie':
                    return this.anime.filter(item => item.type === 'Movie');
                case 'type-tv':
                    return this.anime.filter(item => item.type === 'TV');
                case 'id':
                    if (!this.filterId) return this.anime;
                    return this.anime.filter(item => item.mal_id === parseInt(this.filterId));
            }
            return this.anime;
        }
    },
    methods: {
        getAllAnime() { // TODO: не работает setTimeout
            return fetch('https://api.jikan.moe/v3/top/anime');
        },
        getAnime() {
            this.showPreloader = true;
            this.showError = false;

            this.getAllAnime()
                .then(response => response.json())
                .then(response => response.top)
                .then(response => {
                    this.animeAll = response;
                    this.anime = this.animeAll;
                })
                .then(() => {
                    this.showPreloader = false;
                    this.showNotFound = !!this.anime ? this.anime.length <= 0 : true;
                })
                .catch((e) => { // TODO: не перехватывает ошибки
                    this.showError = true;
                    this.errorText = e;
                    this.showNotFound = false;
                });
        },
        getFilteredAnime(type) {
            this.filterType = type;
            this.anime = this.animeAll;
            this.anime = this.animeFiltered;
            this.showNotFound = this.animeFiltered.length <= 0;
        },
        clearFilter() {
            this.filterType = null;
            this.filterId = null;
            this.getAnime();
        }
    },
    created() {
        this.getAnime();
    }
});
