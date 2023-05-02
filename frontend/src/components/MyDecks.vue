<template>
    <div class="container">
        <div v-for="(deck, index) in decks" class="card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title text-primary">{{deck.name}}</h5>
              <p class="card-text text-secondary">{{deck.description}}</p>
              <router-link :to="'/cards/'+deck.id"><a href="#" class="btn btn-primary container text-center">Select</a></router-link>
              <button @click="delete_deck(index, deck.id)" class="btn btn-outline-danger container">Delete</button>
          </div>
        </div>
    </div>

    <div class="container text-center">
      <button type="button" class="btn btn-outline-primary"><router-link to='/create'><a  href="#">Create a deck</a></router-link></button>
    </div>
</template>


<script>


export default({
  data() {
    return{
        decks:[],
    }
  },
  components: {
  },
  methods:{
    async get_decks(){
        let response = await fetch("/api/decks/");
        let data = await response.json();
        this.decks = data.decks
    },
    async delete_deck(index, id){
        let response = await fetch('/api/deck/'+id+'/', {
            method: "DELETE",
            headers: {
                "X-CSRFToken": this.getCookie(),
            },
        });
        this.decks.splice(index, 1);
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
  mounted(){
    this.get_decks()
  }
});
  
  
</script>