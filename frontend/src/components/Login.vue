<template>
    <div class='container text-center'>
        <div class="form-outline mb-4">
          <input type="text" id="username" class="form-control" v-model="username" placeholder="Enter username"/>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="password" class="form-control" v-model="password" placeholder="Enter password"/>
        </div>

        <button type="button" @click="Login()" class="btn btn-primary btn-block mb-4">Sign in</button>
        <p class="text-danger">{{response}}</p>
    </div>
</template>

<script>


export default({
  data() {
    return{
      username: "",
      password: "",
      response: ""
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
    async Login(){
        let data = {username:this.username, password:this.password}
        let response = await fetch('/api/students/', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "X-CSRFToken": this.getCookie(),
                "Source":'Login',
            },
        });
        let reply = await response.text();
        if (reply == "Username or password incorrect."){
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
  },
});
  
  
</script>