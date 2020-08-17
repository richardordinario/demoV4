<template>
    <v-row align="center" justify="center">
        <v-col cols="9" lg="11" xl="9" sm="10" xs="6">
            <v-breadcrumbs :items="items" class="grey--text">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <h2 class="grey--text mt-3 pl-5">Subject Management</h2>

             <v-row class="ml-5 mt-3">
                <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Add Subject
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">New Subject</span>
                    </v-card-title>
                    <v-card-text>
                    <v-container>
                        <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field label="Subject Name *" type="text" v-model="name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select
                            :items="['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4',]"
                            label="Grade *"
                            required
                            v-model="grade"
                            ></v-select>
                        </v-col>
                      
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="addSubject()">Save</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>


            <v-row>
                <v-col cols="12" sm="6" md="3" lg="3" xl="3">
                    <v-card 
                    class="my-8"
                    max-width="300">
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        >
                        </v-img>
                        <v-card-title>Science Grade 4</v-card-title>
                        <v-card-subtitle>
                            Teacher: Lopez
                        </v-card-subtitle>
                        <v-card-text>
                            <v-row
                                align="center"
                                class="mx-0"
                            >
                                <v-rating
                                :value="4.5"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                                ></v-rating>

                                <div class="grey--text ml-4">4.5 (413)</div>
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                        <v-btn
                            color="info"
                            text
                        >
                            View
                        </v-btn>

                        <v-btn
                            color="success"
                            text
                        >
                            Add to Cart
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>

import axios from 'axios';

export default {
    name: 'Subject',
     data: () => ({

        name: '',
        grade: '',

        items: [
            {
            text: 'Dashboard',
            disabled: false,
            href: '/dashboard',
            },
            {
            text: 'Subject',
            disabled: true,
            href: '/subject',
            },
        ],
        dialog: false,
    }),
    methods: {
        addSubject() {
            axios.post('api/subject',{name:this.name,grade:this.grade})
            .then(res => {
                
                alert('Successfully Save');
                this.clearFields();
            })
            .catch(err => {
                console.log(err)
            })
           
        },
        clearFields() {
            this.name = '';
            this.grade = '';
            this.dialog = false;
        }
    }
}
</script>