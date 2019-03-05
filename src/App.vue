<template>
  <v-app>
    <v-toolbar app prominent>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <v-icon @click.stop="drawer = !drawer">mdi-view-list</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- <v-input></v-input> -->
        <v-text-field label="Search..."></v-text-field>
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

    <v-navigation-drawer v-model="drawer" absolute temporary dark permanent>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-avatar>
              <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
            </v-list-tile-avatar>
            <v-list-tile-title class="title">Vuetify MD</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-text-field label="Search..."></v-text-field>
        <v-list-tile v-for="item in items" :key="item.title" @click>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang='ts' src='./App.ts'>
