<template>
    <div class="container">
        <div class="form-outline mb-4 col">
          <p>Add deck details</p>
          <input type="text" id="deckTitle" class="form-control" v-model="title" placeholder="Enter deck title"/>
          <textarea id="deckDesc" class="form-control" v-model="description" placeholder="Enter deck description"/>
        </div>
        <div class="form-outline mb-4 col">
          <p>Add card</p>
          <textarea id="card-front" class="form-control" v-model="front" placeholder="Enter front of card"/>
          <textarea id="card-back" class="form-control" v-model="back" placeholder="Enter back of card"/>
          <button type="button" @click="add()" class="btn btn-primary btn-block mb-4">Add</button>
          <button type="button" @click="finish()" class="btn btn-primary btn-block mb-4">Finish</button>
        </div>
    </div>
</template>
  
  
<script>

export default({
  data() {
    return{
        title:'',
        front:'',
        back:"",
        description:"",
        cards:[],
    }
  },
  components: {
  },
  methods:{
    add(){
        this.cards.push({front:this.front, back:this.back})
        this.front = ''
        this.back = ''
    },
    async finish(){
        let data = {title:this.title, cards:this.cards, description: this.description}
        let response = await fetch('/api/decks/', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "X-CSRFToken": this.getCookie(),
            },
        });
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
});
  
  
</script>