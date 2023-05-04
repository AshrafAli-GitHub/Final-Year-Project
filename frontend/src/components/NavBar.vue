<template>
    <nav class='navbar navbar-expand-lg navbar-dark bg-primary fixed-top my-auto p-3'>
        <div class="container">
            <router-link to='/about'><a class="navbar-brand" href="#">MyFlashcards</a></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li v-if="auth!='Authenticated'" class="nav-item">
                    <router-link to='/'><a class="nav-link" href="#">Login</a></router-link>
                </li>
                <li v-if="auth!='Authenticated'" class="nav-item">
                    <router-link to='/signup'><a class="nav-link" href="#">Register</a></router-link>
                </li>
                <li v-if="auth=='Authenticated'" class="nav-item">
                    <router-link to='/mydecks'><a class="nav-link" href="#">Decks</a></router-link>
                </li>
                <li v-if="auth=='Authenticated'" class="nav-item">
                    <router-link to='/chart'><a class="nav-link" href="#">Chart</a></router-link>
                </li>
                <li v-if="auth=='Authenticated'" class="nav-item">
                    <router-link to='/'><a class="nav-link" @click="logout()" href="#">Logout</a></router-link>
                </li>
                
                </ul>
            </div>
        </div>
    </nav>
</template>
  
  
<script>


export default({
  data() {
    return{
        auth:'',
    }
  },
  components: {
  },
  methods:{
    async logout() {
        let response = await fetch("/logout/", {
            method: "GET"
        });
        window.location.replace("/");
    },
    async user_info(){
        let response = await fetch("/auth/");
        let data = await response.text();
        this.auth = data
    },
  },
  mounted(){
    this.user_info()
  }
});
  
  
</script>

<style>
a{
    text-decoration: none !important;
    font-size: large;
}

a:hover{
    color:paleturquoise !important;
}
</style>