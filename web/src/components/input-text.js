import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { InputField } from 'react-native-form-generator'

const TextField = props => {

  return (
    <View>
      <Text>{props.label}</Text>
        <InputField value={props.value}
                   onChangeText={props.onChange}
                   style={styles.input}
          />
    </View>
  )
}

const styles = StyleSheet.create({
  input: { flex: 1, height: 50, marginLeft: 8 }
})

export default TextField
