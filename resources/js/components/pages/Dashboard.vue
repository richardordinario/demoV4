<template>
    <v-row align="center" justify="center">
        <v-col cols="10">
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <h3 class="grey--text mt-5">Dashboard</h3>
            
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Dashboard',
     data: () => ({
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/dashboard',
        },
        
      ],
    }),
}
</script>