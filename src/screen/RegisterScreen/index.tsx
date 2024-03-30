import { Alert, SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import TextInputComponent from '../../component/atom/TextInput'
import { RFValue } from 'react-native-responsive-fontsize';
import Gap from '../../component/atom/Gap';
import { Button } from '../../component/atom';
import axios from 'axios';
import API from '../../utils/api';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../route';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserResponse } from '../../interface/user.type';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';

type InputProps = {
    name: string;
    email: string;
}

type NavigationProps = {
    navigation: StackNavigationProp<RootStackParamList>
}

const RegisterScreen = ({ navigation }: NavigationProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const counter = useSelector((state: RootState)=> state.counter)
    const [formInput, setFormInput] = useState<InputProps>({
        name: '',
        email: ''
    })

    const handleChangeForm = (text: string, key: string) => {
        setFormInput(current => {
            return {
                ...current,
                [key]: text
            }
        })
    }

    const fetchPost = () => {
        axios.post(`${API.root}user`, formInput, {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then((res) => {
            const data: UserResponse = res.data;
            if (data.message) {
                AsyncStorage.setItem('userDetail', JSON.stringify(data.message)).then(() => {
                    navigation.navigate('MainApp');
                    Alert.alert("berhasil Login")
                })
            }
        }).catch(err => {
            // console.log(err);
        })
    }
    return (
        <SafeAreaView style={styles.screen}>
            <View style={{
                paddingHorizontal: RFValue(8)
            }}>
                <TextInputComponent onTextChange={(e) => handleChangeForm(e, 'name')} value={formInput.name} placeHolder='Masukkan Nama' title='Nama' />
                <Gap height={RFValue(12)} />
                <TextInputComponent onTextChange={(e) => handleChangeForm(e, 'email')} value={formInput.email} placeHolder='Masukkan Email' title='Email' />
                <Gap height={RFValue(12)} />
                <Button title='Masuk' onpress={fetchPost} />
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',

    }
})