import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/atom/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RFValue } from 'react-native-responsive-fontsize'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Gap from '../../component/atom/Gap'
import { rupiah } from '../../utils/helper'
import ListRow from '../../component/atom/ListRow'
import moment from 'moment'
import Chart from '../../component/atom/Chart'
import { Button } from '../../component/atom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementAsync, incrementByAmount } from '../../redux/reducer/counter'
import { AppDispatch, RootState } from '../../redux/store'
import { ScrollView } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../route'


const getMonth = moment(new Date()).format("MMMM");
type NavigationProp = {
  navigation: StackNavigationProp<RootStackParamList>
}
const ProfileScreen = ({navigation}: NavigationProp) => {
  const count = useSelector((state : RootState)=> state.counter.value);
  const {name, point, token} = useSelector((state: RootState)=> state.userDetailReducer)
  const userDetail = useSelector((state:RootState) => state.userDetailReducer);
  const dispatch = useDispatch<AppDispatch>();

  
  const handleCounter = ()=>{
    navigation.navigate('RegisterScreen');
  }
  const handleDecrement = ()=>{
    dispatch(decrement())
  }
  const handleIncrementByAmount = ()=>{
    dispatch(incrementByAmount(10))
  }
 
  const handleIncrementAsycn = () =>{
    dispatch(incrementAsync(10))
  }

  return (
    <SafeAreaView style={styles.Screen}>
      <Header title='Profile' type='primary' />
      <ScrollView style={styles.wp}>
        <View style={styles.rowItemsCenter}>
          <EvilIcons name='user' size={RFValue(64)} />
          <Gap width={RFValue(8)} />
          <Text style={styles.txtTitle}>Richard Abdul Kareem</Text>
        </View>
        <ListRow title='Uang: ' desc={rupiah(10000000)} width={'auto'} style={{ marginTop: RFValue(10) }} />
        <ListRow title={`Pengeluaran Bulan ${getMonth} ini: `} desc={`Rp ${rupiah(10000000)}`} width={'auto'} style={{ marginTop: RFValue(10) }} />
        <Chart />
        <Button title='Increment Test' onpress={handleCounter} />
        <Text>VALUE: {count}</Text>
        <Button title='Decrement Test' onpress={handleDecrement} />
        <Button title='By Amount' onpress={handleIncrementByAmount} />
        <Gap height={32} />
        <Gap height={32} />
        <Button title='logging' onpress={()=> console.log(userDetail)} />
        <Gap height={32} />
        <Button title='incrementasycn' onpress={()=> handleIncrementAsycn()} />
      </ScrollView>

    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  Screen: {
    flex: 1
  },
  wp: {
    paddingHorizontal: RFValue(16),
    marginTop: RFValue(32)
  },
  txtTitle: {
    fontSize: RFValue(14),
    color: "#727272",
    fontWeight: "800",
    fontFamily: "Poppins-Bold"
  },
  txtPrimary: {
    fontSize: RFValue(12),
    color: "#727272",
    fontWeight: "800",
    fontFamily: "Poppins-Bold"
  },
  rowItemsCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})