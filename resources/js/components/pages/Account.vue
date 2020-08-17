<template>
    <v-row align="center" justify="center" class="mt-5">
        <v-col cols="10">
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
        
              <v-card>
                <v-card-title class="grey--text">
                  Account Management 
                  <v-row class="ml-5">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="primary"
                        small
                        depressed
                        v-bind="attrs"
                        v-on="on"
                        >
                        Add Student
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline">New Student</span>
                        </v-card-title>
                        <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12" sm="4">
                                <v-text-field clearable label="First Name *" type="text" v-model="fname"></v-text-field>
                            </v-col>
                             <v-col cols="12" sm="4">
                                <v-text-field clearable label="Last Name *" type="text" v-model="lname"></v-text-field>
                            </v-col>
                             <v-col cols="12" sm="4">
                                <v-text-field clearable label="Middle Name" type="text" v-model="mname"></v-text-field>
                            </v-col>
                             <v-col cols="12" sm="6">
                                <v-text-field clearable label="Email *" type="Email" v-model="email"></v-text-field>
                            </v-col>
                             <v-col cols="12" sm="6">
                                <v-text-field clearable label="Password *" type="password" v-model="password"></v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="createStudent()">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-row>
                  <v-spacer></v-spacer>
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-card-title>
                <v-data-table
                  :headers="headers"
                  :items="students"
                  :search="search"
                ></v-data-table>
              </v-card>
        </v-col>
    </v-row>

    

</template>


<script>

import axios from 'axios';

export default {
    created() {
      this.fetchStudent()
    },
    name: 'Account',
     data: () => ({
      fname:'',lname:'',mname:'',email:'',password:'',

     search: '',
      headers: [
        {
          text: 'Email',
          align: 'start',
          sortable: false,
          value: 'email',
        },
        { text: 'First Name', value: 'fname' },
        { text: 'Last Name', value: 'lname' },
        { text: 'Middle Name', value: 'mname' },
        { text: 'Actions', value: 'actions', sortable: false },
  
      ],
      students: [],
      dialog: false,
      
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
    methods: {
      fetchStudent() {
        axios.get('api/students')
        .then(res => {
          this.students = res.data
        })
        .catch(err => {
          console.log(err)
        })
      },
      createStudent() {
        axios.post('api/student',{
          fname:this.fname,
          lname:this.lname,
          mname:this.mname,
          email:this.email,
          password:this.password,
        })
        .then(res => {
          this.clearFields()
          this.fetchStudent()
        })
      },
      clearFields() {
        this.fname = '';
        this.lname = '';
        this.mname = '';
        this.email = '';
        this.password = '';
        this.dialog = false;
      
      }
    },  
}
</script>