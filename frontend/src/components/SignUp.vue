<template>
    <div class='container text-center'>
        <div class="form-outline mb-4">
          <input type="text" id="registerName" class="form-control" v-model="username" placeholder="Create username"/>
        </div>
        <div class="form-outline mb-4">
          <input type="password" id="registerPassword" class="form-control" v-model="pass1" placeholder="Create password"/>  
        </div>
        <div class="form-outline mb-4">
          <input type="password" id="registerPassword2" class="form-control" v-model="pass2" placeholder="Re-enter password"/>
        </div>
        <button type="button" @click='signUp()' class="btn btn-primary btn-block mb-3">Create</button>
        <p class="text-danger">{{response}}</p>
    </div>
  </template>
  
  
  <script>


export default({
  data() {
    return{
        username:"",
        pass1:"",
        pass2:"",
        response:'',
    }
  },
  components: {
  },
  methods:{
    async get_csrf() {
        let response = await fetch('/csrf/', {
            method: "GET",
        })
        let data = await response.text();
    },
    async signUp(){
        if (this.pass1 != this.pass2){
            this.response = "The passwords do not match!"
            return
        }
        let data = {username:this.username, password:this.pass1}
        let response = await fetch('/api/students/', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "X-CSRFToken": this.getCookie(),
                "Source":'Signup',
            },
        });
        let reply = await response.text();
        if (reply == "Username taken"){
            this.response = reply
            return
        }
        window.location.replace('/mydecks')
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
    this.get_csrf()
  }
});
  
</script>