import store from './store'
import {Provider} from 'react-redux'
import React, { Component } from 'react'
import { NativeRouter, Route } from 'react-router-native'
import { StyleSheet, Text, View } from 'react-native'
import { Constants } from 'expo'
import NativeTachyons from 'react-native-style-tachyons'
import LandingPage from './web/src/pages/landing'
import Signup from './web/src/pages/signup'
import Login from './web/src/pages/login'
import Header from './web/src/components/header'
import FormView from './web/src/pages/form-view'
import Families from './web/src/pages/family.js'


NativeTachyons.build({ rem: 16 }, StyleSheet)

class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Route exact path='/' component={LandingPage} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/family' component={Families} />
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  },
})

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
