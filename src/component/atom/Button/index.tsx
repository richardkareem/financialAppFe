import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { GetSizeType, getSize } from '../../../utils/helper';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
    onpress?: () => void;
    title: string;
    sizeTxt?: GetSizeType;
    buttonStyle?: StyleProp<ViewStyle>;
}

const Button = ({ title, onpress, sizeTxt, buttonStyle }: Props) => {
    const sizeText = getSize(sizeTxt ? sizeTxt : 'M');  
    return (
        <TouchableOpacity  onPress={onpress} style={[styles.container, buttonStyle]}>
            <Text style={[styles.txt, {
                fontSize: sizeText
            }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#9b9b9b',
        backgroundColor: '#6b6b6b',
        height: 'auto',
        justifyContent: 'center',
        paddingVertical:RFValue(8)
    },
    txt: {
        fontFamily: 'Poppins-Reguler',
        textAlign: "center",
        fontSize: 12,
        fontWeight: '600',
        color: '#f4f4f4'
    }
})