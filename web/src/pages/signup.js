import React, { Component } from 'react'
import { connect } from 'react-redux'
import { wrap } from 'react-native-style-tachyons'
import { View, Text } from 'react-native'

class Signup extends Component {
  render() {
    const props = this.props

    return(
      <View cls='mt3'>
        <Text>I am a Signup page</Text>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Signup))
