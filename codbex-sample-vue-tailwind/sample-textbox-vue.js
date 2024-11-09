import { options, loadModule, version } from './loader.js'

const app = Vue.createApp({
    components: {
        'styled-textbox': Vue.defineAsyncComponent(() => loadModule('./components/TextBox.vue', options)),
    },
    data() {
        return {
            formData: {
                name: '',
            },
            users: [] // For storing remote data
        };
    },
    methods: {
        submitForm() {
            alert(JSON.stringify(this.formData));
        },
        // Method to fetch remote data
        async fetchRemoteData() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                this.users = await response.json();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    },
    mounted() {
        // Fetch remote data when the component is mounted
        this.fetchRemoteData();
    }
});
app.mount('#app');



