import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import { wrap } from 'react-native-style-tachyons'

const getFamilies = dispatch => {
  return fetch(
    'https://giebnar.cloudant.com/cpc/_design/families/_view/families?limit=20&reduce=false&include_docs=true&conflicts=true')
      .then(res => res.json())
      .then(families => {
        dispatch({ type: 'SET_FAMILIES', payload: families })
      })
    }

class Families extends Component {
  componentDidMount() {
    this.props.dispatch(getFamilies)
  }

  render() {
    return(
      <View cls='jcsb'>
        <View cls='ma3'>
          <Text cls='f4 ml3'>Show me the Families!</Text>
        </View>
        <View>

        </View>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Families))
