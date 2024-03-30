import { Dimensions, StyleSheet } from 'react-native';
import React, { useCallback, useState  } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../component/atom/Header';
import { View } from 'react-native';
import moment from 'moment';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { RootStackParamList } from '../../route';
import { StackNavigationProp } from '@react-navigation/stack';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProp } from '../../interface/user.type';
import { connect, useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { getAllRoom, jsonPlaceholder } from '../../redux/action/userDetailAction';
const { width } = Dimensions.get('window');
type NavigationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
}


const HomeScreen = ({ navigation }: NavigationProps) => {
  const [dataUser, setDataUser] = useState<UserProp | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const handleNavigate = () => {
    if(dataUser){
      navigation.navigate('InputExpenditureScreen', dataUser)
    }
  }


  const [date, setDate] = useState(() => moment(new Date().getTime()).format('HH:mm'))
  const [dataRoom, setDataRoom] = useState<string>('');

  
  useFocusEffect(useCallback(() => {
    dispatch(jsonPlaceholder(setDataRoom))
    // dispatch(getAllRoom(setDataRoom))
    // const fetchDataRoom = () =>{
      //   getAllRoom(setDataRoom)
    // }

    // fetchDataRoom()
  }, []))




  return (
    <SafeAreaView style={styles.screen}>
      <Header type='Home' title='Home Screen Kuy' date={date} />
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ padding: RFValue(8) }}>
          {dataRoom.length === 0 ? <Text>Belum Ada Riwayat</Text> : <Text>Udah Ada</Text>}
        </View>
        <TouchableOpacity onPress={handleNavigate} style={styles.buttonPlus}>
          <Text style={styles.textPlus} >+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default connect(null, {}) (HomeScreen);

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  buttonPlus: {
    width: width / 2.5 - RFValue(62),
    height: width / 2.5 - RFValue(62),
    borderRadius: 12,
    backgroundColor: '#e200d7',
    alignItems: 'center',
    justifyContent: 'center',

    alignSelf: 'flex-end',
    margin: RFValue(16)
  },
  textPlus: {
    fontSize: RFValue(64),
    fontWeight: "bold",
    marginBottom: 12
  },
  textDesc: {
    fontSize: RFValue(12),
    fontWeight: '600',
    fontFamily: "Poppins-Regular",
    color: "#3a2d2d"
  }
});
