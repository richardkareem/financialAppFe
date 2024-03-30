import { Dimensions } from 'react-native'
import React from 'react'
import {
    PieChart,
} from "react-native-chart-kit";
import { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes';

const {width} = Dimensions.get('window');
const Chart = () => {
    const chartConfig : ChartConfig = {
        backgroundColor: "#FFF",
        backgroundGradientFrom: "#FFF",
        backgroundGradientTo: "#FFF",
        color: (opacity = 1) => `rgba(255, 166, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,   
      }
      const data = [

        {
          name: "Toronto",
          population: 2800000,
          color: "#bbff00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Beijing",
          population: 527612,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Moscow",
          population: 11920000,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];
    return <PieChart
    data={data}
    width={width}
    height={220}
    chartConfig={chartConfig}
    accessor={"population"}
    backgroundColor={"transparent"}
    paddingLeft='0' 
  />
}

export default Chart