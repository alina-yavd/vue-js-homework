const app = new Vue({
    el: '#app',
    components: {
        Contact
    },
    data: {
        contacts: [],
        contactsAll: [],
        selectedContactId: null,
        maxId: 0,
        firstName: '',
        lastName: '',
        phone: '',
        imageUrl: '',
        filterText: '',
        foundCount: 0,
        showForm: false,
        showNotFound: false,
    },
    computed: {
        contactsFiltered() {
            let filterText = this.filterText.toLowerCase();
            return this.contacts.filter(function (item) {
                return item.firstName.toLowerCase().includes(filterText)
                    || item.lastName.toLowerCase().includes(filterText)
                    || item.phone.includes(filterText);
            });
        }
    },
    methods: {
        setDemoContacts() {
            let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
            if (contacts.length === 0) {
                console.log('setDemoContacts');
                contacts = [
                    {
                        id: 1,
                        firstName: 'John',
                        lastName: 'Doe',
                        phone: '123-12-12',
                        imageUrl: 'https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png',
                    },
                    {
                        id: 2,
                        firstName: 'Michael',
                        lastName: 'Sheen',
                        phone: '555-45-45',
                        imageUrl: 'https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png',
                    }
                ];
                localStorage.setItem('contacts', JSON.stringify(contacts));
                localStorage.setItem('contactsMaxId', '2');
            }
        },
        setContacts() {
            console.log('setContacts');
            let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
            let maxId = localStorage.getItem('contactsMaxId') || this.maxId;
            this.contactsAll = !!contacts ? contacts : this.contactsAll;
            this.maxId = parseInt(maxId);
        },
        getContacts() {
            console.log('getContacts');
            if (this.contactsAll.length === 0) this.setContacts();
            this.contacts = this.contactsAll;
        },
        searchContacts() {
            console.log('searchContacts');
            this.contacts = this.contactsAll;
            if (!this.filterText || this.filterText.length === 0) {
                this.clearFilter();
                return;
            }
            this.contacts = this.contactsFiltered;
            this.foundCount = this.contacts.length;
            this.showNotFound = this.contacts.length <= 0;
        },
        addContact(e) {
            console.log('addContact');
            e.preventDefault();
            let contact = {
                id: ++this.maxId,
                firstName: this.firstName,
                lastName: this.lastName,
                phone: this.phone,
                imageUrl: this.imageUrl,
            }
            this.contactsAll.push(contact);
            // this.contacts.push(contact); // fix adding contact when filter enabled
            localStorage.setItem('contacts', JSON.stringify(this.contactsAll));
            localStorage.setItem('contactsMaxId', this.maxId.toString());
        },
        deleteContact() {
            let selectedContactId = this.selectedContactId;
            this.contactsAll = this.contactsAll.filter(function (item) {
                return item.id !== selectedContactId;
            });
            localStorage.setItem('contacts', JSON.stringify(this.contactsAll));
            this.selectedContactId = null;
            this.searchContacts();
        },
        selectContact(id) {
            id = parseInt(id);
            this.selectedContactId = (id === this.selectedContactId) ? null : id;
        },
        toggleForm() {
            this.showForm = !this.showForm;
        },
        clearFilter() {
            this.filterText = '';
            this.foundCount = 0;
            this.getContacts();
        }
    },
    created() {
        this.setDemoContacts();
        this.getContacts();
    }
});
