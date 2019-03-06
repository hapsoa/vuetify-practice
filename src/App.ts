import { Component, Vue } from 'vue-property-decorator';
// import _ from 'lodash';
// import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';

@Component({
  components: {
    // HelloWorld,
  }
})
export default class App extends Vue {
  public drawer: boolean = true;
  private items = [
    { title: 'Dashboard', icon: 'dashboard' },
    { title: 'User Profile', icon: 'mdi-account' },
    { title: 'Table List', icon: 'mdi-clipboard-outline' },
    { title: 'Typography', icon: 'mdi-format-font' },
    { title: 'Icons', icon: 'mdi-chart-bubble' },
    { title: 'Maps', icon: 'mdi-map-marker' },
    { title: 'Notification', icon: 'mdi-bell' }
  ];
  private right = null;
}
