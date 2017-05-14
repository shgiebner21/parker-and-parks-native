import React, {Component} from 'react'
import {connect} from 'react-redux'
import { View, ListView, Text } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import Welcome from '../components/welcome'
import BasicButton from '../components/basic-button'


class LandingPage extends Component {
  render () {
    return (
      <View cls='ba ml2 mr2 mt4' >
        <Text>I am a Landing Page</Text>
      </View>
    )
  }
}

const mapStateToProps = (state => state)
const connector = connect(mapStateToProps)

export default connector(wrap(LandingPage))
