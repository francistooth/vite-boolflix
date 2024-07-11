import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie',
  params: {
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDU2NDU2ZGY0MTI0OTYwY2I0OWU0ODRmYTllODlmMSIsIm5iZiI6MTcyMDY5MjQxNi42MjEwMiwic3ViIjoiNjY4ZmFkZTMxNmE2MDE3M2FlZjZjODhkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.2-eN0DkUUZEs-n2FsAstbrucpfnk7ouuOmvdSFjEMm0'
  }
};

axios
.request(options)
.then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.error(error);
});