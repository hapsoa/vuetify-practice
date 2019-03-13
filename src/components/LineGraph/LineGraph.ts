import { Component, Vue } from 'vue-property-decorator';
import _ from 'lodash';
import Point from '@/api/class/Point';

@Component({
  props: {
    // horizonTexts: {
    //   type: Array,
    //   required: true,
    // },
    // verticalTexts: {
    //   type: Array,
    //   required: true,
    // },
    // nodes: {
    //   type: Array,
    //   required: true,
    // },
  },
})
export default class Practice1 extends Vue {
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
  private horizonTexts: string[] = ['0', '10', '20', '30', '40'];
  private horizonTextDataList: Array<{
    text: string;
    x: number;
    y: number;
  }> = [];

  // 세로 선
  private verticalLineDataList: Array<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }> = [];
  private verticalTexts: string[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  private verticalTextDataList: Array<{
    text: string;
    x: number;
    y: number;
  }> = [];

  // 노드
  private nodes: Point[] = [
    new Point(0, 1.0),
    new Point(1, 1.7),
    new Point(2, 0.8),
    new Point(3, 1.8),
    new Point(4, 2.4),
    new Point(5, 2.0),
    new Point(6, 3.8),
  ];
  private nodeLines: Array<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }> = [];

  private mounted() {
    this.horizonDistanceUnit = 31;
    this.verticalDistanceUnit =
      (this.$refs.svgZone.clientWidth - this.standardPoint.x) / 7;

    for (let i = 0; i < 5; i++) {
      this.horizonLineDataList.push({
        x1: 40,
        y1: 31 * (i + 1),
        x2: this.$refs.svgZone.clientWidth,
        y2: 31 * (i + 1),
      });
      this.horizonTextDataList.push({
        text: this.horizonTexts[4 - i],
        x: 10,
        y: 31 * (i + 1),
      });
    }
    for (let i = 0; i < 7; i++) {
      this.verticalLineDataList.push({
        x1: 40 + i * ((this.$refs.svgZone.clientWidth - 40) / 7),
        y1: 0,
        x2: 40 + i * ((this.$refs.svgZone.clientWidth - 40) / 7),
        y2: 155,
      });
      this.verticalTextDataList.push({
        text: this.verticalTexts[i],
        x: 40 + i * ((this.$refs.svgZone.clientWidth - 40) / 7),
        y: 170,
      });
    }

    for (let i = 1; i < this.nodes.length; i++) {
      this.nodeLines.push({
        x1:
          this.standardPoint.x +
          this.nodes[i - 1].x * this.verticalDistanceUnit,
        y1:
          this.standardPoint.y - this.nodes[i - 1].y * this.horizonDistanceUnit,
        x2: this.standardPoint.x + this.nodes[i].x * this.verticalDistanceUnit,
        y2: this.standardPoint.y - this.nodes[i].y * this.horizonDistanceUnit,
      });
    }

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

      this.verticalDistanceUnit =
        (this.$refs.svgZone.clientWidth - this.standardPoint.x) / 7;

      for (let i = 1; i < this.nodes.length; i++) {
        this.nodeLines[i - 1] = {
          x1:
            this.standardPoint.x +
            this.nodes[i - 1].x * this.verticalDistanceUnit,
          y1:
            this.standardPoint.y -
            this.nodes[i - 1].y * this.horizonDistanceUnit,
          x2:
            this.standardPoint.x + this.nodes[i].x * this.verticalDistanceUnit,
          y2: this.standardPoint.y - this.nodes[i].y * this.horizonDistanceUnit,
        };
      }

      for (let i = 0; i < 7; i++) {
        this.verticalTextDataList[i] = {
          text: this.verticalTexts[i],
          x: 40 + i * ((this.$refs.svgZone.clientWidth - 40) / 7),
          y: 170,
        };
      }
    });
  }
}
