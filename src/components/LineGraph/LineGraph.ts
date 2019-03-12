import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';

@Component({
  components: {},
})
export default class Practice1 extends Vue {
  // @ts-ignore-nextline
  public $refs: Vue['$refs'] & {
    svgZone: HTMLElement;
  };

  private horizonLineDataList: Array<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }> = [];
  private verticalLineDataList: Array<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }> = [];

  private mounted() {
    for (let i = 0; i < 5; i++) {
      this.horizonLineDataList.push({
        x1: 40,
        y1: 31 * (i + 1),
        x2: this.$refs.svgZone.clientWidth,
        y2: 31 * (i + 1),
      });
    }
    for (let i = 0; i < 7; i++) {
      this.verticalLineDataList.push({
        x1: 40 + i * ((this.$refs.svgZone.clientWidth - 40) / 7),
        y1: 0,
        x2: 40 + i * ((this.$refs.svgZone.clientWidth - 40) / 7),
        y2: 155,
      });
    }
    // console.log(this.$refs.svgZone.clientWidth);

    window.addEventListener('resize', () => {
      console.log('resizing');
      // this.$set(this.lineData, 'x2', this.$refs.svgZone.clientWidth);
      _.forEach(this.horizonLineDataList, (lineData, i) => {
        lineData.x2 = this.$refs.svgZone.clientWidth;
      });
      _.forEach(this.verticalLineDataList, (lineData, i) => {
        lineData.x1 = 40 + i * ((this.$refs.svgZone.clientWidth - 40) / 7);
        lineData.x2 = 40 + i * ((this.$refs.svgZone.clientWidth - 40) / 7);
      });
    });
  }
}
