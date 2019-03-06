import { Component, Vue } from 'vue-property-decorator';
// import _ from 'lodash';
// import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';

@Component({
  components: {
    // HelloWorld,
  }
})
export default class Practice1 extends Vue {
  private headers: object[] = [
    {
      text: 'ID',
      align: 'left',
      sortable: false,
      value: 'id'
    },
    {
      text: 'Name',
      align: 'left',
      sortable: false,
      value: 'name'
    },
    {
      text: 'Salary',
      align: 'right',
      sortable: false,
      value: 'salary'
    },
    {
      text: 'Country',
      align: 'right',
      sortable: false,
      value: 'country'
    },
    {
      text: 'City',
      align: 'right',
      sortable: false,
      value: 'city'
    }
  ];

  private desserts: object[] = [
    {
      id: 1,
      name: 'Dakota Rice',
      salary: '$35,738',
      country: 'Niger',
      city: 'Oud-Tunhout'
    },
    {
      id: 2,
      name: 'Minerva Hooper',
      salary: '$23,738',
      country: 'Curaçao',
      city: 'Sinaai-Waas'
    },
    {
      id: 3,
      name: 'Sage Rodriguez',
      salary: '$56,142',
      country: 'Netherlands',
      city: 'Overland Park'
    },
    {
      id: 4,
      name: 'Philip Chanley',
      salary: '$38,735',
      country: 'Korea, South',
      city: 'Gloucester'
    },
    {
      id: 5,
      name: 'Doris Greene',
      salary: '$63,542',
      country: 'Malawi',
      city: 'Feldkirchen in Kārnten'
    }
  ];

  private active = null;

  private created() {
    console.log('hihi');
  }
}
