<template>
    <Line :data="computedData"  />
  </template>
  
  <script lang="ts">
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
  import { Line } from 'vue-chartjs'
  import * as chartConfig from './chartConfig.js'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  
  export default {
    name: 'App',
    components: {
      Line
    },
    data() {
        return{
            data : {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                {
                    label: 'Data One',
                    backgroundColor: '#ffffff',
                    data: [0, 0, 0, 0, 0, 0, 0]
                }
                ]
            },
        }
    },
    computed: {
      computedData() {
        return {
          labels: this.data.labels,
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#ffffff',
              data: this.data.datasets[0].data
            }
          ]
        };
      }
    },
    methods:{
      async get_chart() {
        let response = await fetch('/api/student/', {
          method: "GET",
        })
        let fetchedData = await response.json();
        this.data.datasets[0].data = fetchedData.num_cards;
        let today = new Date();
        let v = today;
        today.toLocaleDateString("en-GB");
        for (let i = 6; i >= 0; i--) {
          this.data.labels[i] = v.toLocaleDateString("en-GB");
          v.setDate(v.getDate() - 1);
        }
        console.log(this.data);
    },
    },
    async mounted() {
        await this.get_chart()
    },
  }
  </script>
  