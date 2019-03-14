import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';
import Point from '@/api/class/Point';

@Component({
  props: {
    horizonTexts: {
      type: Array,
      required: true,
    },
    verticalTexts: {
      type: Array,
      required: true,
    },
    nodes: {
      type: Array,
      required: true,
    },
  },
})
export default class BarGraph extends Vue {
  // @ts-ignore-nextline
  public $refs: Vue['$refs'] & {
    svgZone: HTMLElement;
  };

  private standardPoint: Point = new Point(40, 155); // 시작 기준 점
  private horizonDistanceUnit: number = 0; // 세로 선들 간 길이
  private verticalDistanceUnit: number = 0; // 가로 선들 간 길이

  // 가로 선
  private horizonLineDataList: Array<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }> = [];
  // private horizonTexts: string[] = ['0', '10', '20', '30', '40'];
  private horizonTextDataList: Array<{
    text: string;
    x: number;
    y: number;
  }> = [];

  // 세로
  private verticalTextDataList: Array<{
    text: string;
    x: number;
    y: number;
  }> = [];

  // private nodeLines: Array<{
  //   x1: number;
  //   y1: number;
  //   x2: number;
  //   y2: number;
  // }> = [];
  private bars: Array<{
    x: number;
    y: number;
    width: number;
    height: number;
  }> = [];

  private mounted() {
    this.horizonDistanceUnit = 31;
    this.verticalDistanceUnit =
      (this.$refs.svgZone.clientWidth - this.standardPoint.x) /
      this.$props.verticalTexts.length;

    for (let i = 0; i < 5; i++) {
      this.horizonLineDataList.push({
        x1: 40,
        y1: 31 * (i + 1),
        x2: this.$refs.svgZone.clientWidth,
        y2: 31 * (i + 1),
      });
      this.horizonTextDataList.push({
        text: this.$props.horizonTexts[4 - i],
        x: 10,
        y: 31 * (i + 1),
      });
    }
    for (let i = 0; i < this.$props.verticalTexts.length; i++) {
      this.verticalTextDataList.push({
        text: this.$props.verticalTexts[i],
        x:
          40 +
          i *
            ((this.$refs.svgZone.clientWidth - 40) /
              this.$props.verticalTexts.length),
        y: 170,
      });
    }

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.$props.nodes.length; i++) {
      this.bars.push({
        x:
          this.standardPoint.x +
          this.$props.nodes[i].x * this.verticalDistanceUnit,
        y:
          this.standardPoint.y -
          this.$props.nodes[i].y * this.horizonDistanceUnit,
        width: 14,
        height: this.$props.nodes[i].y * this.horizonDistanceUnit,
      });
    }

    window.addEventListener('resize', () => {
      console.log('resizing');
      console.log(
        'this.$refs.svgZone.clientWidth',
        this.$refs.svgZone.clientWidth,
      );

      _.forEach(this.horizonLineDataList, (lineData, i) => {
        lineData.x2 = this.$refs.svgZone.clientWidth;
      });

      this.verticalDistanceUnit =
        (this.$refs.svgZone.clientWidth - this.standardPoint.x) /
        this.$props.verticalTexts.length;

      // for (let i = 1; i < this.$props.nodes.length; i++) {
      //   this.nodeLines[i - 1] = {
      //     x1:
      //       this.standardPoint.x +
      //       this.$props.nodes[i - 1].x * this.verticalDistanceUnit,
      //     y1:
      //       this.standardPoint.y -
      //       this.$props.nodes[i - 1].y * this.horizonDistanceUnit,
      //     x2:
      //       this.standardPoint.x +
      //       this.$props.nodes[i].x * this.verticalDistanceUnit,
      //     y2:
      //       this.standardPoint.y -
      //       this.$props.nodes[i].y * this.horizonDistanceUnit,
      //   };
      // }
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.$props.nodes.length; i++) {
        this.bars[i] = {
          x:
            this.standardPoint.x +
            this.$props.nodes[i].x * this.verticalDistanceUnit,
          y:
            this.standardPoint.y -
            this.$props.nodes[i].y * this.horizonDistanceUnit,
          width: 14,
          height: this.$props.nodes[i].y * this.horizonDistanceUnit,
        };
      }

      for (let i = 0; i < this.$props.verticalTexts.length; i++) {
        this.verticalTextDataList[i] = {
          text: this.$props.verticalTexts[i],
          x:
            40 +
            i *
              ((this.$refs.svgZone.clientWidth - 40) /
                this.$props.verticalTexts.length),
          y: 170,
        };
      }
    });
  }
}
