import { Component, Vue } from 'vue-property-decorator';
// import _ from 'lodash';
// import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';

@Component({
  components: {
    // HelloWorld,
  },
})
export default class Practice1 extends Vue {
  private created() {
    console.log('hihi');
  }
}
