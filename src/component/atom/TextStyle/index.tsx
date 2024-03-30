import { StyleSheet, Text as TextRN } from 'react-native'
import React from 'react'

type Props =  {
 title: string,
}

type StyleProps = {
    color: {
        color: string;
        fontSize: number;
    }
}

const TextStyle = (props:Props) => {
  return (
    <TextRN style={styles.color} >{props.title}</TextRN>
  )
}

export default TextStyle

const styles = StyleSheet.create<StyleProps>({
    color:{
        color: 'green',
        fontSize: 12
    }
})