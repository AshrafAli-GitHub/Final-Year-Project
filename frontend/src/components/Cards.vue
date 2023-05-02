<template>
    <Carousel v-model="current_card">
        <Slide v-for="card in cards" :key="card.id">
            <vue-flashcard 
            :front='card.front'
            :back="card.back">
            </vue-flashcard>
        </Slide>
        <template #addons>
        <Navigation />
        <Pagination />
        </template>
    </Carousel>
    <div class="container col-md-4 text-center mx-auto mt-3">
        <button @click="show= !show" class="btn btn-outline-info m-2">Edit card</button>
        <button @click="show2= !show2" class="btn btn-outline-success m-2">Add card</button>
        <div v-if="show">
            <input type='text' v-model="front" class="form-control m-1" placeholder="New front"/>
            <input type='text' v-model="back" class="form-control m-1" placeholder="New back"/>
            <button @click="save()" class='btn btn-success m-2'>Save</button>
        </div>
        <div v-if="show2">
            <input type='text' v-model="front" class="form-control m-1" placeholder="Front"/>
            <input type='text' v-model="back" class="form-control m-1" placeholder="Back"/>
            <button @click="add()" class='btn btn-success m-2'>Save</button>
        </div>
        <button @click="delete_card()" class="btn btn-outline-danger">Delete</button>
    </div>
</template>
  
  
<script>
import vueFlashcard from 'vue-flashcard';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'


export default({
  data() {
    return{
        id: this.$route.params.id,
        cards:[],
        front:'',
        back:'',
        show:false,
        show2:false,
        current_card:0,
    }
  },
  components: {
    vueFlashcard,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods:{
    async get_cards(){
        let response = await fetch('/api/deck/'+this.id+'/');
        let data = await response.json()
        this.cards = data.cards
    },
    async save(){
        let data = {front:this.front, back:this.back}
        let response = await fetch('/api/flashcard/'+this.cards[this.current_card].id+'/', {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "X-CSRFToken": this.getCookie(),
            },
        });
        let data2 = await response.json()
        this.cards[this.current_card] = data2
    },
    async add(){
        let data = {front:this.front, back:this.back, deck_id:this.id}
        let response = await fetch('/api/flashcards/', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "X-CSRFToken": this.getCookie(),
            },
        });
        let data2 = await response.json()
        this.cards.push(data2)
    },
    async delete_card(){
        let response = await fetch('/api/flashcard/'+this.cards[this.current_card].id+'/', {
            method: "DELETE",
            headers: {
                "X-CSRFToken": this.getCookie(),
            },
        });
        this.cards.splice(this.current_card, 1);
    },
    getCookie() {
        let cookieValue = "";
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.substring(0, 10) === ('csrftoken=')) {
                    cookieValue = decodeURIComponent(cookie.substring(10));
                    break;
                }
            }
        }
        return cookieValue;
    },
  },
  async mounted(){
    await this.get_cards()
  }
});
  
  
</script>