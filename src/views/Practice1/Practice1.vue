<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex md12 sm12 lg4 mt-4>
        <v-card>
          <v-flex py-0 px-3>
            <div class="card-filler">
              <div class="svg-filler blue-like">
                <line-graph></line-graph>
              </div>
            </div>

            <v-card-title px-0>
              <div>
                <h3 class="headline mb-0">Daily Sales</h3>
              </div>
            </v-card-title>
            <v-card-text>
              <div class="grey--text">
                <v-icon small color="green">mdi-arrow-up</v-icon>
                <span class="green--text">55%</span>
                increase in today's sales
              </div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-icon small>mdi-clock-outline</v-icon>
              <div class="grey--text">&nbsp;&nbsp;updated 4 minutes ago</div>
            </v-card-actions>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex md12 sm12 lg4 mt-4>
        <v-card>
          <v-flex py-0 px-3>
            <div class="card-filler">
              <svg class="svg-filler red-like"></svg>
            </div>

            <v-card-title px-0>
              <div>
                <h3 class="headline mb-0">Email Subscription</h3>
              </div>
            </v-card-title>

            <v-card-text>
              <div class="grey--text">Last Campaign Performance</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-icon small>mdi-clock-outline</v-icon>
              <div class="grey--text">&nbsp;&nbsp;updated 10 minutes ago</div>
            </v-card-actions>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex md12 sm12 lg4 mt-4>
        <v-card>
          <v-flex py-0 px-3>
            <div class="card-filler">
              <div class="svg-filler green-like"></div>
            </div>

            <v-card-title px-0>
              <div>
                <h3 class="headline mb-0">Completed Tasks</h3>
              </div>
            </v-card-title>

            <v-card-text>
              <div class="grey--text">Last Last Campaign Performance</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-icon small>mdi-clock-outline</v-icon>
              <div class="grey--text">&nbsp;&nbsp;updated 26 minutes ago</div>
            </v-card-actions>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex sm6 xs12 md6 lg3 mt-4>
        <v-card>
          <v-flex py-0 px-3>
            <v-container px-0>
              <v-layout row wrap pt-0>
                <v-flex pt-0>
                  <div class="small-card-filler">
                    <div class="small-svg-filler green-like">
                      <!-- <v-flex class="small-svg-filler green-like text-xs-center"> -->
                      <v-icon color="white" large>mdi-store</v-icon>
                      <!-- </v-flex> -->
                    </div>
                  </div>
                </v-flex>
                <v-flex pt-0 text-xs-right>
                  <!-- <v-card-title>Revenue</v-card-title> -->
                  <v-card-text>
                    <div class="grey--text">Revenue</div>
                    <div class="headline font-weight-light">$34,245</div>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
              <v-icon small>mdi-calendar</v-icon>
              <div class="grey--text">&nbsp;&nbsp;Last 24 Hours</div>
            </v-card-actions>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex sm6 xs12 md6 lg3 mt-4>
        <v-card>
          <v-flex py-0 px-3>
            <v-container px-0>
              <v-layout row wrap pt-0>
                <v-flex pt-0>
                  <div class="small-card-filler">
                    <div class="small-svg-filler yellow-like">
                      <!-- <v-flex class="small-svg-filler green-like text-xs-center"> -->
                      <v-icon color="white" large>mdi-content-copy</v-icon>
                      <!-- </v-flex> -->
                    </div>
                  </div>
                </v-flex>
                <v-flex pt-0 text-xs-right>
                  <!-- <v-card-title>Revenue</v-card-title> -->
                  <v-card-text>
                    <div class="grey--text">Used Space</div>
                    <div class="headline font-weight-light">
                      49/50
                      <span class="grey--text subheading">GB</span>
                    </div>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-container>
            <v-divider></v-divider>
            <v-card-actions>
              <v-icon small color="red lighten-1">mdi-alert</v-icon>
              <div class="purple--text text--lighten-2">&nbsp;&nbsp;Get More Space...</div>
            </v-card-actions>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex sm6 xs12 md6 lg3 mt-4>
        <v-card>
          <v-flex py-0 px-3>
            <v-container px-0>
              <v-layout row wrap pt-0>
                <v-flex pt-0>
                  <div class="small-card-filler">
                    <div class="small-svg-filler red-like">
                      <v-icon color="white" large>mdi-information-outline</v-icon>
                    </div>
                  </div>
                </v-flex>
                <v-flex pt-0 text-xs-right>
                  <v-card-text>
                    <div class="grey--text">Fixed Issues</div>
                    <div class="headline font-weight-light">75</div>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
              <v-icon small>mdi-tag</v-icon>
              <div class="grey--text">&nbsp;&nbsp;Tracked from Github</div>
            </v-card-actions>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex sm6 xs12 md6 lg3 mt-4>
        <v-card>
          <v-flex py-0 px-3>
            <v-container px-0>
              <v-layout row wrap pt-0>
                <v-flex pt-0>
                  <div class="small-card-filler">
                    <div class="small-svg-filler blue-like">
                      <v-icon color="white" large>mdi-twitter</v-icon>
                    </div>
                  </div>
                </v-flex>
                <v-flex pt-0 text-xs-right>
                  <!-- <v-card-title>Revenue</v-card-title> -->
                  <v-card-text>
                    <div class="grey--text">Followers</div>
                    <div class="headline font-weight-light">+245</div>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
              <v-icon small>mdi-calendar</v-icon>
              <div class="grey--text">&nbsp;&nbsp;Just Updated</div>
            </v-card-actions>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex md12 lg6 mt-4>
        <v-card>
          <v-flex py-0 px-3>
            <div class="big-card-filler">
              <div class="card-title-zone yellow-like white--text">
                <v-card-text>
                  <div class="title font-weight-light">Employee Stats</div>
                </v-card-text>
                <div class="font-weight-light">New employees on 15th September, 2016</div>
              </div>
            </div>

            <v-card-text>
              <v-data-table :headers="headers" :items="desserts" hide-actions>
                <template v-slot:items="props">
                  <td>{{ props.item.id }}</td>
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item.salary }}</td>
                  <td class="text-xs-right">{{ props.item.country }}</td>
                  <td class="text-xs-right">{{ props.item.city }}</td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex md12 lg6 mt-4>
        <v-card>
          <v-flex py-0 px-0>
            <div class="big-card-filler-2">
              <v-tabs
                v-model="active"
                color="#4caf50"
                dark
                slider-color="white"
                class="card-title-zone-2"
              >
                <div class="white--text margin-right">Tasks:</div>
                <!-- <v-tab v-for="n in 3" :key="n" ripple>Item {{ n }}</v-tab> -->
                <v-tab>
                  <v-icon>mdi-bug</v-icon>
                  <div>&nbsp;Bugs</div>
                </v-tab>
                <v-tab>
                  <v-icon>mdi-code-tags</v-icon>
                  <div>&nbsp;Website</div>
                </v-tab>
                <v-tab>
                  <v-icon>mdi-cloud</v-icon>
                  <div>&nbsp;Server</div>
                </v-tab>

                <v-tab-item v-for="n in 3" :key="n">
                  <v-card flat>
                    <v-card-text>
                      <v-flex>
                        <v-data-table
                          :headers="secondHeaders"
                          hide-headers
                          hide-actions
                          :items="secondDesserts"
                          select-all
                          item-key="name"
                        >
                          <template v-slot:headers="props">
                            <tr>
                              <th>
                                <v-checkbox
                                  :input-value="props.all"
                                  :indeterminate="props.indeterminate"
                                  primary
                                  hide-details
                                  @click.stop="toggleAll"
                                ></v-checkbox>
                              </th>
                              <th
                                v-for="header in props.headers"
                                :key="header.text"
                                :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                @click="changeSort(header.value)"
                              >
                                <v-icon small>arrow_upward</v-icon>
                                {{ header.text }}
                              </th>
                            </tr>
                          </template>
                          <template v-slot:items="props">
                            <tr>
                              <td>
                                <v-checkbox primary hide-details></v-checkbox>
                              </td>
                              <td>{{ props.item.name }}</td>
                              <td class="padding-5">
                                <v-icon color="green" size="19">mdi-pencil</v-icon>
                              </td>
                              <td class="padding-5">
                                <v-icon color="red" size="19">mdi-close</v-icon>
                              </td>
                            </tr>
                          </template>
                        </v-data-table>
                      </v-flex>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </div>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang='ts' src='./Practice1.ts' />

<style lang='scss'>
.card-filler {
  width: 100%;
  height: 200px;
  position: relative;
}
.small-card-filler {
  width: 100%;
  height: 60px;
  position: relative;
  // background-color: green;
}
.big-card-filler {
  width: 100%;
  height: 90px;
  position: relative;
}
.big-card-filler-2 {
  width: 100%;
  height: 260px;
  position: relative;
}
.svg-filler {
  width: 100%;
  height: 200px;
  position: absolute;
  top: -15px;
  border-radius: 5px;
}
.small-svg-filler {
  width: 85px;
  height: 85px;
  position: absolute;
  top: -20px;
  border-radius: 5px;
  text-align: center;
  line-height: 100px;
}
.card-title-zone {
  width: 100%;
  // height: 100px;
  position: absolute;
  top: -15px;
  border-radius: 5px;
  padding: 15px;
}
.card-title-zone-2 {
  width: 100%;
  // height: 100px;
  position: absolute;
  top: -30px;
  border-radius: 5px;
  padding: 15px;
}
.p-relative {
  position: relative;
}
.p-absolute {
  position: absolute;
}
.v-tabs__bar {
  height: 78px;
  border-radius: 5px;
  line-height: 50px;
  padding-top: 15px;
  padding-left: 10px;
}
.margin-right {
  margin-right: 20px;
}

.blue-like {
  background-color: #26c6da;
}
.red-like {
  background-color: #ef5350;
}
.green-like {
  background-color: #4caf50;
}
.yellow-like {
  background-color: #ff9800;
}

.v-card__title {
  padding: 0;
}
.v-card__text {
  padding-top: 0;
  padding-right: 0;
  padding-left: 0;
  // padding: 0;
}
.v-card__actions {
  padding-left: 0;
  padding-right: 0;
}

.padding-5 {
  padding: 5px !important;
}
</style>