<script>
import SingleCard from './SingleCard.vue';

// store import

import { movieArchive } from '../store';

export default {
    name: 'CardList',
    components: {
        SingleCard,
    }, 
    data() {
        return {
            movieArchive,
        }
    }
}
</script>

<template>
    <section class="container">
        <div class="row">
            <div v-for="movie in movieArchive.movieList" :key="movie.id" class="col-6 col-md-4 col-lg-3 mb-5">
                <SingleCard :info="movie"/>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

</style>