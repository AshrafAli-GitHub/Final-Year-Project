<template>
    <Line :data="data"  />
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
                    data: [40, 39, 10, 40, 39, 80, 40]
                }
                ]
            },
            options : {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    }
  }
  </script>
  