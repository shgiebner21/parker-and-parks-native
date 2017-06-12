import React, {Component} from 'react'
import {connect} from 'react-redux'
import { View, ListView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import NativeTachyons, { wrap } from 'react-native-style-tachyons'
import { Octicons } from '@expo/vector-icons'
import Welcome from '../components/welcome'
import BasicButton from '../components/basic-button'

NativeTachyons.build({ rem: 16}, StyleSheet)

class LandingPage extends Component {
  render () {

    const txt = `Hi!  I'm Parker Bear.`
    const txt2 = `There are TWO great parks to play in so let's get started!`

    return (
      <View >
        <Image source={require('../hampton-park-bandstand.jpg')}
             style={styles.backgroundImage} />
           <Text cls='bg-red' style={styles.text}>{txt}</Text>
        <Text cls='bg-red'>{txt2}</Text>
          <View>
            <TouchableOpacity>
              <Octicons name='bookmark' size={32} />
            </TouchableOpacity>
          </View>
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
  },
  text: {
    height: 8
  }
})

const mapStateToProps = (state => state)
const connector = connect(mapStateToProps)

export default connector(wrap(LandingPage))
