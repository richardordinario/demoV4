<template>
<v-app id="inspire">
  <NavBar></NavBar> 
  <v-main>
    
     <router-view></router-view>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>
    
<script>
  import NavBar from '../components/layouts/NavBar'

  export default {
    name: 'Index',
    components: {
        NavBar,
    },

  }
</script>