<script>
import { movieArchive } from '../store';

export default {
    name: 'Search',
    data() {
        return {
            movieArchive,
        }
    },
    methods: {
        restSearch() {
            movieArchive.searchText = '';

            this.$emit('search');
        },
        enter(event) {
            if (event.key === 'Enter') {
                this.$emit('search');
            }
        }
    }
}
</script>

<template>
    <div class="container">
            <div class="row d-flex justify-content-between align-items-center">
                <div id="logo" class="col-xl-3 col-lg-3 col-md-2 col-sm-2 fw-bold">BOOLFLIX</div>
                <div class="col-xl-5 col-lg-6 col-md-8 col-sm-12 d-flex gap-3">
                    <label for="search-film">cerca un film: </label>
                    <input type="text" placeholder="Cerca un Film" v-model="movieArchive.searchText" @keydown="enter">
                    <button type="submit" @click.prevent="$emit('search')">Cerca</button>
                    <button type="reset" @click.prevent="restSearch">Reset</button>
                </div>
            </div>
        </div>
</template>

<style scoped lang="scss">
// general styles

@use '../style/general.scss' as *;

@use '../style/partials/variables' as *;

.container {
    .row {
        div#logo {
            font-size: 2rem;
            color: $primary;
        }

        div {
            margin: 20px 0;

            input {
                border-radius: 10px;
                padding: 5px 10px;
            }

            button {
                border-radius: 10px;
            }
        }
    }
    
}
</style>