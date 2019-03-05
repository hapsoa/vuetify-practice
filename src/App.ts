import { Component, Vue } from 'vue-property-decorator';
// import _ from 'lodash';
// import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';

@Component({
  components: {
    // HelloWorld,
  },
})
export default class App extends Vue {
  private items = [
    { title: 'Dashboard', icon: 'dashboard' },
    { title: 'User Profile', icon: 'question_answer' },
    { title: 'Table List', icon: 'question_answer' },
    { title: 'Typography', icon: 'question_answer' },
    { title: 'Icons', icon: 'question_answer' },
    { title: 'Maps', icon: 'question_answer' },
    { title: 'Notification', icon: 'question_answer' },
  ];
  private right = null;
  private drawer: boolean = false;
}
