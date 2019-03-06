<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex md12 sm12 lg4 mt-3>
        <v-card>
          <v-flex py-0 px-3>
            <div class="card-filler">
              <div class="svg-filler blue-like"></div>
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
      <v-flex md12 sm12 lg4 mt-3>
        <v-card>
          <v-flex py-0 px-3>
            <div class="card-filler">
              <div class="svg-filler red-like"></div>
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
      <v-flex md12 sm12 lg4 mt-3>
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
      <v-flex sm6 xs12 md6 lg3 mt-3>
        <v-card>
          <v-flex py-0 px-3>
            <v-container px-0>
              <v-layout row wrap pt-0>
                <v-flex pt-0>
                  <div class="small-card-filler">
                    <!-- <div class="small-svg-filler green-like"> -->
                    <v-flex class="small-svg-filler green-like text-xs-center" align-self-center>
                      <v-icon color="white" large>mdi-store</v-icon>
                    </v-flex>
                    <!-- </div> -->
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
      <v-flex sm6 xs12 md6 lg3 mt-3>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title offset-sm3>
            <div>
              <h3 class="headline mb-0">Daily Sales</h3>
              <div>
                <v-icon>mdi-arrow-up</v-icon>
                <span class="green--text">55%</span>
                increase in today's sales
              </div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <v-icon>mdi-clock-outline</v-icon>
            <div>updated 4 minutes ago</div>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title offset-sm3>
            <div>
              <h3 class="headline mb-0">Daily Sales</h3>
              <div>
                <v-icon>mdi-arrow-up</v-icon>
                <span class="green--text">55%</span>
                increase in today's sales
              </div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <v-icon>mdi-clock-outline</v-icon>
            <div>updated 4 minutes ago</div>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title offset-sm3>
            <div>
              <h3 class="headline mb-0">Daily Sales</h3>
              <div>
                <v-icon>mdi-arrow-up</v-icon>
                <span class="green--text">55%</span>
                increase in today's sales
              </div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <v-icon>mdi-clock-outline</v-icon>
            <div>updated 4 minutes ago</div>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex md12 lg6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title offset-sm3>
            <div>
              <h3 class="headline mb-0">Daily Sales</h3>
              <div>
                <v-icon>mdi-arrow-up</v-icon>
                <span class="green--text">55%</span>
                increase in today's sales
              </div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <v-icon>mdi-clock-outline</v-icon>
            <div>updated 4 minutes ago</div>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex md12 lg6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
          <v-card-title primary-title offset-sm3>
            <div>
              <h3 class="headline mb-0">Daily Sales</h3>
              <div>
                <v-icon>mdi-arrow-up</v-icon>
                <span class="green--text">55%</span>
                increase in today's sales
              </div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <v-icon>mdi-clock-outline</v-icon>
            <div>updated 4 minutes ago</div>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang='ts' src='./Practice1.ts' />

<style scoped lang='scss'>
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
  top: -30px;
  border-radius: 5px;
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
// .po-relative {
//   position: relative !important;
// }
// .po-absolute {
//   position: absolute !important;
//   top: 0;
// }

.v-card__title {
  // padding-right: 0;
  // padding-left: 0;
  // padding-top: 0;
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
</style>