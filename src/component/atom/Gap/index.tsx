import { DimensionValue, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

export type GapProps = {
    width?: DimensionValue;
    height?: DimensionValue;
}

const Gap = ({width, height}:GapProps) => {
  return <View style={{height:height, width: width}} />
}

export default Gap