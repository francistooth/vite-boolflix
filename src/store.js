import { reactive } from 'vue'

// Importazione dell'API principale
export const movieArchive = reactive({
    movieList: [],
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=a0eaecc8086b5da87f94347ac1a74575&include_adult=true&language=it-IT&page=1&query=",
    imageUrlFilm: "https://image.tmdb.org/t/p/w342",
    searchText: "",
    imageFilm: 'poster_path',
});