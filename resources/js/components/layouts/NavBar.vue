<template>
    <div>
         <v-navigation-drawer
            v-model="drawer"
            app
        >
        <LeftBar></LeftBar>
        </v-navigation-drawer>
        
        <v-app-bar
        app
        color="white"
        dark
        dense
        flat
        >
        <v-app-bar-nav-icon class="body-1 grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text" >
                <span class="font-weight-light body-1">Demo</span>
                <span class="body-1">App</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            
            <v-icon class="grey--text  body-1">mdi-logout</v-icon>
          
        </v-app-bar>
    </div>
</template>

<script>
    import LeftBar from './LeftBar'

    export default {
    name: 'NavBar',

    components: {
        LeftBar
    },
    
    data: () => ({
      drawer: null,
    }),
}
</script>