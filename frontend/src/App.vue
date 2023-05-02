<template>
  <div class="bg-dark text-light" style="height:100vh">
    <NavBar />
    <div style="padding-top:50px;">
      <hr style="border-top: 2px solid white"/>
      <router-view />
    </div>
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue';


export default({
  data() {
    return{
    }
  },
  components: {
    NavBar,
  },
  methods:{},
});


</script>
