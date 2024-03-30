import { DimensionValue, StyleProp, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Gap from '../Gap';
import { RFValue } from 'react-native-responsive-fontsize';
import { ViewStyle } from 'react-native';

type ListRowProps = {
  title: string;
  desc: string;
  width: DimensionValue;
  style?: StyleProp<ViewStyle>;
}

const ListRow: React.FC<ListRowProps> = ({ title, desc, width, style}: ListRowProps) => {
  return (
    <View style={[styles.row, style]}>
      <Text style={styles.txtTitle}>
        {title}
      </Text>
      <Gap width={width}  />
      <Text style={styles.txtTitle}>
        {desc}
      </Text>
    </View>
  )
}

export default ListRow

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:RFValue(8)
  },
  txtTitle:{
    fontSize:RFValue(14),
    color: "#727272",
    fontWeight:"800",
    fontFamily:"Poppins-Bold"
  },
})