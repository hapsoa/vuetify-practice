import { Component, Vue } from 'vue-property-decorator';
// import _ from 'lodash';
import Point from '@/api/class/Point.ts';
import LineGraph from '@/components/LineGraph/LineGraph.vue';

@Component({
  components: {
    LineGraph,
  },
})
export default class Practice1 extends Vue {
  private headers: object[] = [
    {
      text: 'ID',
      align: 'left',
      sortable: false,
      value: 'id',
    },
    {
      text: 'Name',
      align: 'left',
      sortable: false,
      value: 'name',
    },
    {
      text: 'Salary',
      align: 'right',
      sortable: false,
      value: 'salary',
    },
    {
      text: 'Country',
      align: 'right',
      sortable: false,
      value: 'country',
    },
    {
      text: 'City',
      align: 'right',
      sortable: false,
      value: 'city',
    },
  ];

  private desserts: object[] = [
    {
      id: 1,
      name: 'Dakota Rice',
      salary: '$35,738',
      country: 'Niger',
      city: 'Oud-Tunhout',
    },
    {
      id: 2,
      name: 'Minerva Hooper',
      salary: '$23,738',
      country: 'Curaçao',
      city: 'Sinaai-Waas',
    },
    {
      id: 3,
      name: 'Sage Rodriguez',
      salary: '$56,142',
      country: 'Netherlands',
      city: 'Overland Park',
    },
    {
      id: 4,
      name: 'Philip Chanley',
      salary: '$38,735',
      country: 'Korea, South',
      city: 'Gloucester',
    },
    {
      id: 5,
      name: 'Doris Greene',
      salary: '$63,542',
      country: 'Malawi',
      city: 'Feldkirchen in Kārnten',
    },
  ];

  private active = null;

  private secondHeaders: object[] = [
    {
      text: 'Dessert (100g serving)',
      align: 'left',
      value: 'name',
    },
    { text: 'Calories', value: 'calories' },
    { text: 'Fat (g)', value: 'fat' },
    { text: 'Carbs (g)', value: 'carbs' },
    { text: 'Protein (g)', value: 'protein' },
    { text: 'Iron (%)', value: 'iron' },
  ];

  private secondDesserts: object[] = [
    {
      name:
        'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
    },
    {
      name: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
    },
    {
      name: 'Sign contract for "What conference organized afraid of?',
    },
  ];

  private dailySalesGraph = {
    horizonTexts: ['0', '10', '20', '30', '40'],
    verticalTexts: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    nodes: [
      new Point(0, 1.0),
      new Point(1, 1.7),
      new Point(2, 0.8),
      new Point(3, 1.8),
      new Point(4, 2.4),
      new Point(5, 2.0),
      new Point(6, 3.8),
    ],
  };

  private emailSubscriptionGraph = {
    horizonTexts: ['0', '200', '400', '600', '800'],
    verticalTexts: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
    nodes: [
      new Point(0, 1.0),
      new Point(1, 3.8),
      new Point(2, 2.2),
      new Point(3, 1.45),
      new Point(4, 1.4),
      new Point(5, 1.1),
      new Point(6, 1.0),
      new Point(7, 1.0),
    ],
  };

  private completedTasks = {
    horizonTexts: ['0', '200', '400', '600', '800'],
    verticalTexts: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
    nodes: [
      new Point(0, 1.0),
      new Point(1, 3.8),
      new Point(2, 2.2),
      new Point(3, 1.45),
      new Point(4, 1.4),
      new Point(5, 1.1),
      new Point(6, 1.0),
      new Point(7, 1.0),
    ],
  };

  private created() {
    console.log('hihi');
  }
}
