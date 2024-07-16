<script>
import Search from './components/Search.vue';
import CardList from './components/CardList.vue';

// axios import 

import axios from 'axios';

// store import 

import { movieArchive } from './store';

export default {
    name: 'App',
    data(){
        return {
            movieArchive,
        }
    },  
    methods: {
        getCards(){
            let endPoint = movieArchive.apiUrl;

            if (movieArchive.searchText != "") {
                endPoint += `${movieArchive.searchText}`;
            }

            axios.
            get(endPoint)
            .then(res => {
                console.log(res.data.results);
                movieArchive.movieList = res.data.results;
            }).catch(err => {
                console.log(err);
            });
        }
    },
    created() {
        // this.getCards();
    },
    components: {
        Search,
        CardList,
    }
}
</script>

<template>
    <!-- <AppHeader message="BoolFlix" /> -->
    <main>
        <Search @search="getCards()" />
        <CardList />
    </main>
</template>

<style lang="scss">
@use './style/general.scss';

main {
    padding-top: 20px;
}

</style>
