import { Text, View, TextInput, KeyboardTypeOptions } from 'react-native'
import React from 'react'

type TextInputProps = {
    value: string;
    placeHolder?: string;
    onTextChange: (e:string) => void;
    title?: string;
    keyboardType?: KeyboardTypeOptions;

}

const TextInputComponent = ({ value, placeHolder, onTextChange, title, keyboardType = 'default' }: TextInputProps) => {
    return (
        <View className='gap-2'>
            <Text className='font-semibold text-lg text-slate-600 '>{title}</Text>
            <TextInput className='bg-slate-800 rounded-md pl-2 text-white placeholder:white' keyboardType={keyboardType} placeholderTextColor={'#ffffff40'} value={value} placeholder={placeHolder} onChangeText={onTextChange} />
        </View>
    )
}

export default TextInputComponent

