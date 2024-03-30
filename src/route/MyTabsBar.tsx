import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { TouchableOpacity } from 'react-native-gesture-handler'



type IconProps = {
    label: string;
    focus: boolean;
}



const Icon = ({ label, focus }: IconProps) => {
    switch (label) {
        case 'Home':
            return focus ? (
                <View style={{ alignItems: 'center'}}>
                    <AntDesign name='home' size={24} color={"green"} />
                    {/* <Gap height={4} /> */}
                </View>
            ) : <AntDesign name='home' size={24} />
        case "ProfileScreen":
            return focus ? (
                <View style={{ alignItems: 'center'}}>
                    <AntDesign name='user' size={24} color={"green"} />
                    {/* <Gap height={4} /> */}
                </View>
            ) : <AntDesign name='user' size={24} />
        

        default:
            return focus ? (
                <View style={{ alignItems: 'center' }}>
                    <AntDesign name='home' size={24}  />
                    {/* <Gap height={4} /> */}
                </View>
            ) : <AntDesign name='home' size={24} />
    }
}

const MyTabsBar = ({ state, navigation, descriptors }: BottomTabBarProps) => {
    //styles.container
    return (
        <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              key={index}
              style={{flex:1}}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <View style={[styles.wpItem]}>
                <Icon label={label as string} focus={isFocused} />
                <Text >{label as string}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
}

export default MyTabsBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 2,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#F2F2F2',
        paddingTop: (7),
        paddingBottom: 8,
        // paddingHorizontal: 25,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'space-around',
        height: (64),
        overflow: 'hidden',
        // alignItems:"center"
      },
      wpItem: {
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 5,
      },
})