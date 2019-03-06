<template>
  <v-app>
    <v-toolbar app absolute flat>
      <v-toolbar-side-icon v-show="!drawer" @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- <v-input></v-input> -->
        <v-text-field label="Search..." color="purple"></v-text-field>
        <v-layout align-center>
          <v-btn flat>
            <v-icon>dashboard</v-icon>
          </v-btn>
          <v-btn flat>
            <!-- <v-icon>mdi-bell</v-icon> -->
            <v-badge color="red">
              <template v-slot:badge>
                <span>5</span>
              </template>
              <v-icon>mdi-bell</v-icon>
              <!-- <v-icon large color="grey">mail</v-icon> -->
            </v-badge>
            <!-- <v-icon>dashboard</v-icon> -->
          </v-btn>
          <v-btn flat>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </v-layout>
        <!-- <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>-->
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" dark app :width="260">
      <!-- <v-img
        src="https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"
        aspect-ratio="2.75"
      >-->
      <v-layout column px-3>
        <v-list>
          <v-list-tile>
            <v-list-tile-avatar color="white">
              <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
            </v-list-tile-avatar>
            <v-list-tile-title class="title font-weight-regular">Vuetify MD</v-list-tile-title>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list class="pt-0">
          <v-text-field label="Search..." color="purple"></v-text-field>
          <v-list-tile v-for="item in items" :key="item.title" @click>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-layout>
      <!-- </v-img> -->
    </v-navigation-drawer>

    <v-content>
      <v-container fill-height fluid grid-list-xl>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer></v-footer>
  </v-app>
</template>

<script lang='ts' src='./App.ts'>
