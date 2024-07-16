<script>
import { movieArchive } from '../store.js'


export default {
    name: 'AppFilmCard',
    props:['info', 'img'],
    data() {
        return{
            movieArchive,
        }
    },
    methods: {
        convertToRange(value) {
            let num = parseFloat(value);
            if(num <= 1 ) {
                return '★☆☆☆☆';
            }
            if (num <= 3 ) {
                return '★★☆☆☆';
            }
            if (num <= 5 ) {
                return '★★★☆☆';
            }
            if  (num <= 7 ) {
                return '★★★★☆';
            }
            else if(num <= 10 ) {
                return '★★★★★';
            }
        }
    }

}

</script>

<template>
    <div id="baseCard" class="my-3">
        <div id="flipCard">
            <div class="col-3 my-3 imageFilm">
                <img :src="`${movieArchive.imageUrlFilm}${info.poster_path}`" :alt='`${info.original_title}`'>
            </div>
            
            <div class="cardFilm my-3 p-2 text-start">
                <div>
                    <span class="fw-bold">Titolo: </span><span>{{ info.title }}</span>
                </div>
                <div>
                    <span class="fw-bold">Titolo Originale: </span><span>{{info.original_title}}</span>
                </div>
                <div class="text-center">{{ info.original_language}}</div>
                
                
                <span class="fw-bold">Voto: </span><span id="star">{{convertToRange(info.vote_average)}}</span>
                <p><span class="fw-bold">Sinossi: </span>{{info.overview}}</p>
            </div>

        </div>

    </div>
    
    


</template>

<style lang="scss" scoped>
// Importa gli stili generali
@use 'src/style/general.scss' as *;
// Importa le variabili degli stili
@use 'src/style/partials/_variables.scss' as *;
div#baseCard{

    height: 500px;

    // rotate system
    &:hover div#flipCard{
            transform: rotateY(180deg);
        }
    
    div#flipCard{
        height: 100%;

        // rotate system
        position: relative;
        transform-style: preserve-3d;
        transition: transform 1.0s;

        

        .imageFilm{
            width: 100%;
            height: 100%;

            // rotate system front
            position: absolute;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;



            img{
                height: 100%;
                width: 100%;

            }
            

        }

        .cardFilm{
            height: 100%;
            border: 2px solid black;
            overflow-y: scroll;
            background-color: black;
            color: white;

            // rotate system back
            position: absolute;
            transform: rotateY(180deg);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            
            h3{
                font-size: 1rem;
            }
            
            span#star{
                color: yellow;
                font-size: 1.6rem;
            }

        }

    }

}




</style>