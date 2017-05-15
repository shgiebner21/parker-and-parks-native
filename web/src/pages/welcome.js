import React from 'react'
import { View, Text, Image } from 'react-native'
import { wrap } from 'react-native-style-tachyons'


const Welcome = props => {
  const txt = `Hi!  I'm Parker Bear.`
  const txt2 = `There are TWO great parks to play in so let's get started!`

  return (
    <View cls='bg-white-80' >
      <Text>{txt}</Text>
    </View>
  )
}


export default wrap(Welcome)
