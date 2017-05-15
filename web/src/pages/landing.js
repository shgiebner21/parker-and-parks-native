import React, {Component} from 'react'
import {connect} from 'react-redux'
import { View, ListView, Text, StyleSheet, Image } from 'react-native'
import NativeTachyons, { wrap } from 'react-native-style-tachyons'
import Welcome from '../components/welcome'
import BasicButton from '../components/basic-button'

NativeTachyons.build({ rem: 16}, StyleSheet)

class LandingPage extends Component {
  render () {
    return (
      <View style={styles.container} >
        <Image source={require('../hampton-park-bandstand.jpg')}
             style={styles.backgroundImage} />
        <Text>I am a Landing Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    resizeMode: 'contain',
    opacity: 0.90
  }
})

const mapStateToProps = (state => state)
const connector = connect(mapStateToProps)

export default connector(wrap(LandingPage))
