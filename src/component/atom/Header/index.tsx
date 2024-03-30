import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { rupiah, statusDay } from '../../../utils/helper';
const { width } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
type HeaderProps = {
    title: string;
    onpress?: () => void;
    Icon?: FC;
    type: 'Home' | 'primary';
    date?: string | number;
}


const Header = ({ title, onpress, Icon, type, date }: HeaderProps) => {
    const widthCt = () => {
        if (Icon && onpress) {
            return width
        } else if (Icon || onpress) {
            return width / 1.4
        }
    }
    const postionFLex = () => {
        if (Icon && !onpress) {
            return 'flex-end'
        } else if (onpress && !Icon) {
            return 'flex-start'
        } else {
            return 'center'
        }
    }
    switch (type) {
        case 'Home':

            return (
                <View style={styles.containerHome}>

                    <View style={{ justifyContent: "space-between" }}>
                        <Text style={styles.txtHomeTitle}>{statusDay()}</Text>
                        <Text style={[styles.txtHomeDesc, { marginBottom: RFValue(16) }]}>Pengeluaranmu Hari Ini: {rupiah(10000)}</Text>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={[styles.txtHomeTime]}>{date}</Text>
                    </View>

                </View>
            )
        default:
            return (
                <View style={[styles.container, {}]}>
                    <View style={[styles.wpPrimary, { width: widthCt(), alignSelf: postionFLex(), flexDirection: 'row' }]}>
                        {onpress ? <TouchableOpacity onPress={onpress}>
                            <Ionicons name='arrow-back' size={RFValue(32)} color={'white'} />
                        </TouchableOpacity> : null}
                        <Text style={styles.txtTitle}>{title}</Text>
                        {Icon ? <Icon /> : null}
                    </View>
                </View>
            )
    }
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#91919177",
        height: width / 6,
        justifyContent: 'center',
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
        paddingHorizontal: 8

    },
    containerHome: {
        backgroundColor: "#91919177",
        height: width / 3,
        paddingHorizontal: RFValue(32),
        paddingVertical: RFValue(16),
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    wpPrimary: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
        justifyContent:'space-between'
    },
    txtHomeTitle: {
        fontSize: RFValue(32),
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
    },
    txtHomeTime: {
        fontSize: RFValue(16),
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
    },
    txtHomeDesc: {
        fontSize: RFValue(16),
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
    },
    txtTitle: {
        fontSize: RFValue(16),
        fontFamily: 'Poppins',
        fontWeight: '600',
        textAlign: 'center'
    }
})