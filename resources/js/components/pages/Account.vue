<template>
    <v-row align="center" justify="center">
        <v-col cols="10">
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <h3 class="grey--text">Account Management</h3>
            <v-card>
                <v-card-text>
                    
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Account',
     data: () => ({
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/dashboard',
        },
        {
          text: 'Account',
          disabled: true,
          href: '/account',
        },
      ],
    }),
}
</script>