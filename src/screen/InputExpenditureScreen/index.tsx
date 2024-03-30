import { Dimensions, SafeAreaView, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/atom/Header'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../route'
import TextInputComponent from '../../component/atom/TextInput'
import { View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
Dimensions.get('window');
type NavigationProps = {
    navigation: StackNavigationProp<RootStackParamList, 'InputExpenditureScreen', 'params'>;
}


const InputExpenditureScreen = ({navigation}: NavigationProps) => {

  
  const [form, setForm] = useState('');
  const categories = ["no Selected",'Makanan', "Transportasi", "Tabungan", ]
  const [categoriesState, setCategoriesState] = useState('');

  
  return (
    <SafeAreaView style={styles.screen}>
        <Header title='Masukkan Pengeluaran' type='primary' onpress={()=> navigation.goBack()} />
        <View className='p-4'>
        <TextInputComponent keyboardType='default' title='Nama' value={form} onTextChange={(e)=> setForm(e)} placeHolder='Masukkan' />
        <TextInputComponent keyboardType='number-pad' title='Harga' value={form} onTextChange={(e)=> setForm(e)} placeHolder='Masukkan' />
        <SelectDropdown  data={categories}  onSelect={(selected : string)=> setCategoriesState(selected) } />
        {/* <SelectDropdown  buttonTextStyle={{backgroundColor:'green', width: widthScreen}} dropdownStyle={{backgroundColor:'green'}} data={categories} onSelect={(selected : string)=> setCategoriesState(selected) } /> */}
        </View>
    </SafeAreaView>
  )
}

export default InputExpenditureScreen

const styles = StyleSheet.create({
    screen:{
        flex:1
    },

})